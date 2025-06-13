// components/blogs.tsx
import Link from "next/link";
import { Post } from "@/lib/getMediumPosts";

type BlogsProps = {
  posts: Post[];
};

export default function Blogs({ posts }: BlogsProps) {
  return (
    <div className="relative h-fit w-full bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-dot-black/[0.5]"></div>
        <div className="absolute inset-0 bg-white pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-composite:exclude]"></div>
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto py-7 lg:py-15">
        <div className="flex flex-wrap -mx-4">
          {posts.map((post, index) => (
            <div key={index} className="mt-5 w-full md:w-1/2 px-4 mb-8">
              <div className="p-4 border border-gray-200 rounded-lg shadow-lg h-full bg-white">
                <Link href={`/blog/${post.slug}`}>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full object-cover rounded-md mb-4"
                    />
                  )}
                  <h2 className="text-xl font-semibold text-black font-merri">
                    {post.title}
                  </h2>
                </Link>
                {/* <p className="text-gray-500 text-sm font-merri">
                  {new Date(post.pubDate).toDateString()}
                </p> */}
                <p className="mt-2 text-gray-700">{post.contentSnippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
