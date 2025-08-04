// components/newsletter.tsx
import Parser from "rss-parser";
import { type Item as RssParserItem } from "rss-parser";

// Define a type for a Beehiiv RSS item to include potential image fields
type BeehiivItem = RssParserItem & {
  enclosure?: { url: string; type: string };
  itunes?: { image: string };
  "media:content"?: { url: string };
};

// Client-safe image extractor with a more robust strategy
const extractImageFromContent = (item: BeehiivItem): string | null => {
  // 1. Check for the enclosure field, which is common in RSS feeds
  if (item.enclosure && item.enclosure.url) {
    return item.enclosure.url;
  }

  // 2. Check for the itunes:image tag, often used for podcasts but also for posts
  if (item.itunes && item.itunes.image) {
    return item.itunes.image;
  }

  // 3. Check for media:content, another common way to specify media
  if (item["media:content"] && item["media:content"].url) {
    return item["media:content"].url;
  }

  // 4. Fallback to the original regex if no dedicated image field is found
  if (item.content) {
    const patterns = [
      /<img[^>]+src=["']([^"']+)["']/i,
      /<img[^>]+src=([^\s>]+)/i,
      /src=["']([^"']+)["'][^>]*>/i,
    ];

    for (const pattern of patterns) {
      const match = item.content.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
  }
  
  return null;
};


type Post = {
  title: string;
  link: string;
  pubDate?: string;
  image?: string | null;
  contentSnippet?: string;
};

export default async function Newsletter() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://rss.beehiiv.com/feeds/DbPIw9AbTv.xml"); // replace with your Beehiiv feed

  const posts: Post[] = feed.items.map((item) => ({
    title: item.title ?? "Untitled",
    link: item.link ?? "#",
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
    image: extractImageFromContent(item as BeehiivItem), // Cast the item to the new type
  }));

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-6xl font-bold mb-9 text-center lg:text-7xl">The Distribution Layer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-200 shadow hover:shadow-md transition overflow-hidden bg-white flex flex-col"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{post.pubDate}</p>
              <p className="text-gray-700 text-sm flex-grow">
                {post.contentSnippet}
              </p>
              <span className="mt-4 text-blue-600 text-sm font-medium hover:underline">
                Read more →
              </span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}