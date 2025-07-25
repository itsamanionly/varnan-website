// lib/getMediumPosts.ts
import { cache } from "react";
import Parser from "rss-parser";

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

// Wrap the async function in React's `cache` to memoize the request.
export const getMediumPosts = cache(async (): Promise<Post[]> => {
  const parser = new Parser({ customFields: { item: ["content:encoded"] } });

  // The original URL for the Medium feed.
  const feedUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/medium-feed`;

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch feed: ${response.statusText}`);
    }

    const feedText = await response.text();
    const feed = await parser.parseString(feedText);

    return feed.items.map((item): Post => {
      // Explicitly returning your Post type
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
    console.error("Failed to fetch or parse Medium feed:", err);
    return [];
  }
});
