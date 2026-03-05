import React from 'react'
import { LandingBlogContainer } from './landing-blog-container';
import type { CaseStudyListItem } from '@/lib/mdxCaseStudies';

export const LandingBlogs = ({ items }: { items: CaseStudyListItem[] }) => {
    const posts = items.map((item) => ({
        title: item.title,
        description: item.description,
        image: item.thumbnail ?? '',
        link: `/case-studies/${item.slug}`,
        author: 'Varnan',
        readTime: item.readingTime ?? '',
    }));
    return (
        <section className="py-16  px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Case Studies</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Real examples of how we drove User Acquisition and Growth for AI Startups and Developer Tools
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <LandingBlogContainer posts={posts} />
            </div>
        </section>
    )
}