import React from 'react'
import { LandingBlogContainer } from './landing-blog-container';
const posts = [
    {
        title: 'First 100 users for your AI Product: Lessons from our 2 YC Portfolio Companies',
        description: "Getting first 100 users for your AI Startup is not easy, it's a battlefield. Why? Because the market is too flooded. Everyone's selling the next big AI SaaS. Here's how we did it for our portfolio companies.",
        image: '/blog-1.png',
        link: 'https://varnan.tech/blog/first-100-users-for-your-ai-product-lessons-from-our-2-yc-portfolio-companies'
    },
    {
        title: '100x UX Research AI Agent: Finding why Products fail using Reddit and Hacker News',
        description: "If you're building a product, the hardest thing is knowing what your users are actually struggling with. Learn how to build agents that help you do it at Scale ",
        image: '/blog-2.png',
        link: 'https://varnan.tech/blog/100x-ux-research-ai-agent-finding-why-products-fail-using-reddit-and-hacker-news'
    },
    {
        title: 'Generate Viral Meme Videos for Your Business Using No-Code AI Agents',
        description: "Meme marketing works, but creating viral videos at scale is time-consuming. Learn how to build no-code AI agents that generate scroll-stopping meme content for your business automatically. ",
        image: '/blog-3.png',
        link: 'https://varnan.tech/blog/generate-viral-meme-videos-for-your-business-using-nocode-ai-agents'
    }
]
export const LandingBlogs = () => {
    return (
        <section className="py-16  px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Latest Insights</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Read our latest articles on product-market fit, growth strategies, and scaling your startup.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <LandingBlogContainer posts={posts} />
            </div>
        </section>
    )
}