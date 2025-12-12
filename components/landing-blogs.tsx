import React from 'react'
import { getMediumPosts } from '@/lib/getMediumPosts';
import { LandingBlogContainer } from './landing-blog-container';

export const LandingBlogs = async () => {
    const posts = await getMediumPosts();
    return (
        <section className="pt-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Latest Insights</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Read our latest articles on product-market fit, growth strategies, and scaling your startup.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <LandingBlogContainer posts={posts} />
            </div>
        </section>
    )
}