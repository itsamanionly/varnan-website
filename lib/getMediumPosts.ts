// lib/getMediumPosts.ts - REPLACE with this code

import { cache } from 'react';

// Your existing Post type
export type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  image: string | null;
  slug: string;
  htmlContent: string;
};

// --- TYPE DEFINITION ADDED ---
// Define the structure of a single item from the rss2json API
type Rss2JsonItem = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
};

// Define the structure of the entire API response
type Rss2JsonResponse = {
  status: string;
  items: Rss2JsonItem[];
};
// --- END OF TYPE DEFINITION ---

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export const getMediumPosts = cache(async (): Promise<Post[]> => {
  const feedUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/medium-feed`;

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 },
    });
    
    // Tell TypeScript to treat the response as our defined type
    const data = await response.json() as Rss2JsonResponse;

    if (data.status !== 'ok') {
      throw new Error(`Failed to fetch feed: API status was '${data.status}'`);
    }

    // Now, TypeScript knows that 'item' is of type 'Rss2JsonItem'
    return data.items.map((item): Post => {
      const htmlContent = item.content ?? '';
      const imageMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
      const image = imageMatch ? imageMatch[1] : null;
      const snippet = htmlContent.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';

      return {
        title: item.title ?? '',
        link: item.link ?? '',
        pubDate: item.pubDate ?? '',
        contentSnippet: snippet,
        image,
        slug: slugify(item.title ?? ''),
        htmlContent,
      };
    });
  } catch (err) {
    console.error('Failed to fetch or parse Medium feed:', err);
    return [];
  }
});