import { Post } from '@/lib/getMediumPosts'
import React from 'react'
const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}
export function trimHtmlToWords(htmlContent: string, wordLimit: number = 50) {
    if (!htmlContent) return "";

    // Remove HTML tags
    const text = htmlContent
        .replace(/<[^>]*>/g, " ")   // remove tags
        .replace(/\s+/g, " ")       // normalize spaces
        .trim();

    const words = text.split(" ");

    if (words.length <= wordLimit) return text;

    return words.slice(0, wordLimit).join(" ") + " ...";
}
export const LandingBlogContainer = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post, i) => (
                <a
                    key={i}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-gray-200 shadow hover:shadow-md transition overflow-hidden bg-white flex flex-col"
                >
                    {post.image ? (
                        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    ) : (
                        <div className="w-full h-48 bg-gray-100" />
                    )}

                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">{formatDate(post.pubDate)}</p>
                        <p className="text-gray-700 text-sm flex-grow">{trimHtmlToWords(post.htmlContent)}</p>
                        <span className="mt-4 text-blue-600 text-sm font-medium hover:underline">Read more →</span>
                    </div>
                </a>
            ))}
        </div>
    )
}