import Link from "next/link";
import type { TrendingToolListItem } from "@/lib/mdxHotTrends";

type HotTrendsProps = {
  posts: TrendingToolListItem[];
};

export default function HotTrends({ posts }: HotTrendsProps) {
  return (
    <div className="relative h-fit w-full bg-white overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-dot-black/[0.5]"></div>
        <div className="absolute inset-0 bg-white pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-composite:exclude]"></div>
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto py-7 lg:py-15 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-merri">
          Hot Trends
        </h1>
        <div className="flex flex-col gap-6">
          {posts.map((post, index) => (
            <div key={index} className="w-full">
              <Link href={`/hot-trends/${post.slug}`}>
                <div className="p-6 md:p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-center min-h-[200px]">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 font-mono mb-4">
                    <span className="border border-gray-200 px-2 py-1 rounded text-black font-semibold">Hot Trends</span>
                    <span>{post.readingTime || "5 Min read"}</span>
                    {post.date && (
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-semibold text-black font-merri mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2 text-base md:text-lg">
                    {post.description}
                  </p>
                  
                  <div className="text-black font-medium text-sm mt-auto">
                    Read more &gt;
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
