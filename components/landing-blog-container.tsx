import React from 'react'


export const LandingBlogContainer = ({ posts }: { posts: { title: string, description: string, image: string, link: string, author: string, readTime: string }[] }) => {
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
                        {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h2> */}
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-500 mb-2">Author: <span className="font-bold text-blue-600">{post.author}</span></p>
                            <p className="text-sm text-gray-500 mb-2">{post.readTime}</p>
                        </div>
                        <p className="text-gray-700 text-sm flex-grow">{post.description}</p>
                        {/* <span className="mt-4 text-blue-600 text-sm font-medium hover:underline">Read more →</span> */}
                    </div>
                </a>
            ))}
        </div>
    )
}