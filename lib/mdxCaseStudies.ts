import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";
import type React from "react";

export type CaseStudyFrontmatter = {
  title: string;
  date: string; // ISO recommended
  description: string;
  thumbnail?: string;
};

export type CaseStudyListItem = CaseStudyFrontmatter & {
  slug: string;
};

const CASE_STUDIES_DIR = path.join(process.cwd(), "case-study");

function filenameStem(filename: string) {
  return filename.replace(/\.mdx$/i, "");
}

function slugifyTitle(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeFrontmatter(raw: unknown, fallbackTitle: string): CaseStudyFrontmatter {
  const obj = (raw ?? {}) as Record<string, unknown>;

  const title =
    typeof obj.title === "string" && obj.title.trim() ? obj.title : fallbackTitle;
  const date = typeof obj.date === "string" && obj.date.trim() ? obj.date : "";
  const description =
    typeof obj.description === "string" && obj.description.trim() ? obj.description : "";
  const thumbnail =
    typeof obj.thumbnail === "string" && obj.thumbnail.trim() ? obj.thumbnail : undefined;

  return { title, date, description, thumbnail };
}

async function getMdxFilenames(): Promise<string[]> {
  const entries = await fs.readdir(CASE_STUDIES_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".mdx"))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));
}

type CaseStudyIndexItem = {
  filename: string;
  slug: string;
  frontmatter: CaseStudyFrontmatter;
};

const getCaseStudiesIndex = cache(async (): Promise<CaseStudyIndexItem[]> => {
  const filenames = await getMdxFilenames();

  const items = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(CASE_STUDIES_DIR, filename);
      const file = await fs.readFile(fullPath, "utf8");
      const { data } = matter(file);

      const fallback = filenameStem(filename);
      const fm = normalizeFrontmatter(data, fallback);
      const baseSlug = fm.title ? slugifyTitle(fm.title) : fallback;
      const slug = baseSlug || fallback;

      return { filename, slug, frontmatter: fm };
    }),
  );

  // Ensure unique slugs deterministically (based on filename ordering).
  const counts = new Map<string, number>();
  return items.map((item) => {
    const base = item.slug;
    const next = (counts.get(base) ?? 0) + 1;
    counts.set(base, next);

    if (next === 1) return item;
    return { ...item, slug: `${base}-${next}` };
  });
});

export async function getAllCaseStudies(): Promise<CaseStudyListItem[]> {
  const index = await getCaseStudiesIndex();
  const items = index.map(({ slug, frontmatter }) => ({ slug, ...frontmatter }));

  items.sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    const aValid = Number.isFinite(aTime);
    const bValid = Number.isFinite(bTime);
    if (!aValid && !bValid) return a.slug.localeCompare(b.slug);
    if (!aValid) return 1;
    if (!bValid) return -1;
    return bTime - aTime;
  });

  return items;
}

export async function getCaseStudy(slug: string): Promise<
  | {
      slug: string;
      frontmatter: CaseStudyFrontmatter;
      content: React.ReactElement;
    }
  | null
> {
  const index = await getCaseStudiesIndex();
  const match = index.find((p) => p.slug === slug);
  if (!match) return null;

  const fullPath = path.join(CASE_STUDIES_DIR, match.filename);

  try {
    const source = await fs.readFile(fullPath, "utf8");

    const compiled = await compileMDX<CaseStudyFrontmatter>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      slug,
      frontmatter: normalizeFrontmatter(compiled.frontmatter, match.slug),
      content: compiled.content,
    };
  } catch {
    return null;
  }
}


