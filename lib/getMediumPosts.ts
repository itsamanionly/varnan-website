// lib/getMediumPosts.ts
import Parser from "rss-parser";
import { cache } from "react";

export type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  image: string | null;
  slug: string;
  htmlContent: string;
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export const getMediumPosts = cache(async (): Promise<Post[]> => {
  const parser = new Parser({ customFields: { item: ["content:encoded"] } });

  try {
    const feed = await parser.parseURL("https://medium.com/feed/@varnan");

    return feed.items.map((item) => {
      const htmlContent = item["content:encoded"] ?? "";
      const imageMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
      const image = imageMatch ? imageMatch[1] : null;

      return {
        title: item.title ?? "",
        link: item.link ?? "",
        pubDate: item.pubDate ?? "",
        contentSnippet: item.contentSnippet ?? "",
        image,
        slug: slugify(item.title ?? ""),
        htmlContent,
      };
    });
  } catch (err) {
    console.error("Failed to fetch Medium feed:", err);
    return []; // fallback to empty list to avoid build failure
  }
});
