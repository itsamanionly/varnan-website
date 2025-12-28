import React from 'react'
import { LandingBlogContainer } from './landing-blog-container';
const posts = [

    {
        title: 'How Varnan helped Server Survival Gained 1000+ GitHub Stars and Built an Active Contributor Base in 90 Days',
        description: "Server Survival is an open-source tower defense game that teaches cloud architecture. With little visibility in a crowded developer education market, Varnan helped it break through - driving 1,000+ GitHub stars, contributor growth, and direct attribution from new community members.",
        image: 'https://storage.googleapis.com/img_varnan/Case-studies/server-survival-case-study/cover-image/server-survival-case-study-cover-image.png',
        link: 'https://varnan.tech/case-studies/how-varnan-helped-server-survival-gained-1000-github-stars-and-built-an-active-contributor-base-in-90-days'
    },
    {
        title: 'How Varnan Turned Reddit Into Athina’s (YC W23) Primary Growth Channel Without Getting Blocked',
        description: "Athina AI, a YC-backed LLM observability platform, struggled with discovery despite a strong product. Varnan used value-first Reddit strategy to drive 15–20× user growth, 10K+ upvotes, enterprise customers, low CAC, and AI search visibility.",
        image: 'https://storage.googleapis.com/img_varnan/Case-studies/athina_ai_case_study/cover-image/Athina_AI_Case_Study_Cover_image.png',
        link: 'https://varnan.tech/case-studies/how-varnan-turned-reddit-into-athina-s-yc-w23-primary-growth-channel-without-getting-blocked'
    },
    {
        title: 'From Invisible to Inevitable: How Strategic Content by Varnan generated 6000+ GitHub Stars',
        description: "Three technically strong open-source projects had zero visibility. Varnan used strategic video distribution to reach technical audiences driving 6,000+ GitHub stars in weeks, major tech press coverage, and measurable community activation.",
        image: 'https://storage.googleapis.com/img_varnan/Case-studies/6000stars-repo-case-study/cover-image/6000stars_case_study.png',
        link: 'https://varnan.tech/case-studies/from-invisible-to-inevitable-how-strategic-content-by-varnan-generated-6000-github-stars'
    },

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