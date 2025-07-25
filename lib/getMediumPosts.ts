// lib/getMediumPosts.ts
import { cache } from 'react';
import Parser from 'rss-parser';

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
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Wrap the async function in React's `cache` to memoize the request.
// This ensures that if this function is called multiple times in the same
// render pass, the data is only fetched once.
export const getMediumPosts = cache(async (): Promise<Post[]> => {
  const parser = new Parser({ customFields: { item: ['content:encoded'] } });

  try {
    // Use the native `fetch` API to enable Next.js caching features.
    // The `next: { revalidate: 3600 }` option tells Next.js to cache the
    // result for 3600 seconds (1 hour).
    const response = await fetch('https://medium.com/feed/@varnan', {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch feed: ${response.statusText}`);
    }

    // Get the response text to be parsed.
    const feedText = await response.text();
    
    // Use `parseString` instead of `parseURL` to parse the fetched text.
    const feed = await parser.parseString(feedText);

    return feed.items.map((item) => {
      const htmlContent = item['content:encoded'] ?? '';
      const imageMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
      const image = imageMatch ? imageMatch[1] : null;

      return {
        title: item.title ?? '',
        link: item.link ?? '',
        pubDate: item.pubDate ?? '',
        contentSnippet: item.contentSnippet ?? '',
        image,
        slug: slugify(item.title ?? ''),
        htmlContent,
      };
    });
  } catch (err) {
    console.error('Failed to fetch or parse Medium feed:', err);
    return []; // Fallback to an empty list to prevent the app from crashing.
  }
});