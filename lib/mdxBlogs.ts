import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import type React from "react";
import { cache } from "react";
import { FAQSection, FAQItem } from "@/components/mdx/faq";
import { CodeBlock } from "@/components/mdx/code-block";

export type BlogFrontmatter = {
  title: string;
  date: string; // ISO recommended (e.g. 2025-06-30)
  description: string;
  image?: string;
  published?: boolean; // Default true if not specified
};

export type BlogListItem = BlogFrontmatter & {
  slug: string;
};

const BLOGS_DIR = path.join(process.cwd(), "blogs");

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

function normalizeFrontmatter(raw: unknown, slug: string): BlogFrontmatter {
  const obj = (raw ?? {}) as Record<string, unknown>;

  const title = typeof obj.title === "string" && obj.title.trim() ? obj.title : slug;
  const date = typeof obj.date === "string" && obj.date.trim() ? obj.date : "";
  const description =
    typeof obj.description === "string" && obj.description.trim() ? obj.description : "";
  const image = typeof obj.image === "string" && obj.image.trim() ? obj.image : undefined;
  const published = typeof obj.published === "boolean" ? obj.published : true; // Default to true

  return { title, date, description, image, published };
}

async function getMdxFilenames(): Promise<string[]> {
  const entries = await fs.readdir(BLOGS_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".mdx"))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));
}

type BlogIndexItem = {
  filename: string;
  slug: string;
  frontmatter: BlogFrontmatter;
};

const getBlogIndex = cache(async (): Promise<BlogIndexItem[]> => {
  const filenames = await getMdxFilenames();

  const items = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(BLOGS_DIR, filename);
      const file = await fs.readFile(fullPath, "utf8");
      const { data } = matter(file);

      const fallbackSlug = filenameStem(filename);
      const fm = normalizeFrontmatter(data, fallbackSlug);

      // Priority: explicit slug in frontmatter > slugified title > filename
      const explicitSlug = typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : null;
      const baseSlug = explicitSlug || (fm.title ? slugifyTitle(fm.title) : fallbackSlug);
      const slug = baseSlug || fallbackSlug;

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

export async function getAllBlogPosts(): Promise<BlogListItem[]> {
  const index = await getBlogIndex();
  const posts = index
    .filter(({ frontmatter }) => frontmatter.published !== false) // Filter out unpublished posts
    .map(({ slug, frontmatter }) => ({ slug, ...frontmatter }));

  posts.sort((a, b) => {
    // newest first; empty/invalid dates sort last
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    const aValid = Number.isFinite(aTime);
    const bValid = Number.isFinite(bTime);
    if (!aValid && !bValid) return a.slug.localeCompare(b.slug);
    if (!aValid) return 1;
    if (!bValid) return -1;
    return bTime - aTime;
  });

  return posts;
}

export async function getBlogPost(slug: string): Promise<
  | {
    slug: string;
    frontmatter: BlogFrontmatter;
    content: React.ReactElement;
  }
  | null
> {
  const index = await getBlogIndex();
  const match = index.find((p) => p.slug === slug);
  if (!match) return null;

  // Return null if the post is unpublished
  if (match.frontmatter.published === false) return null;

  const fullPath = path.join(BLOGS_DIR, match.filename);

  try {
    const source = await fs.readFile(fullPath, "utf8");
    const { content: mdxContent, data } = matter(source);

    // Use evaluate from @mdx-js/mdx with proper React runtime
    const { default: MDXContent } = await evaluate(mdxContent, {
      ...runtime,
      remarkPlugins: [remarkGfm],
      development: false, // Force production mode to avoid dev property checks
    });

    // MDX components available in blog posts
    const components = {
      FAQSection,
      FAQItem,
      pre: CodeBlock,
    };

    // Create proper React element with components
    const element = MDXContent({ components }) as React.ReactElement;

    return {
      slug,
      frontmatter: normalizeFrontmatter(data, slug),
      content: element,
    };
  } catch (error) {
    console.error(`Error compiling MDX for ${slug}:`, error);
    return null;
  }
}
