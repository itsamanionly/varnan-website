"use client"
import React from 'react'
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Paras Madan",
        role: "Co-Founder",
        bio: "An action-oriented builder at heart, he has all the right ingredients: led GTM for two YC-backed AI companies (Athina and Unify AI), scaled an AI community to 250K with 50M total views.",
        image: "/paras.png",
    },
    {
        name: "Sam Josh",
        role: "Co-Founder",
        bio: "A Stanford grad who's worked with Paras for 4+ years. He handles GTM strategy, picks the right channels, and runs campaigns end-to-end.",
        image: "/sam.jpg",
    },
];
export const Founders = () => {
    return (
        <section className=" bg-background pb-0">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        The Team
                    </p>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Meet Our Founders
                    </h2>
                    <div className="mx-auto mt-6 h-px w-24 bg-foreground" />
                </motion.div>

                {/* Team Grid */}
                <div className="mx-auto grid max-w-4xl gap-16 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="group text-center"
                        >
                            {/* Image */}
                            <div className="relative mx-auto mb-8 h-64 w-64 overflow-hidden rounded-full border-2 border-border bg-muted">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-2xl font-semibold text-foreground">
                                {member.name}
                            </h3>
                            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                                {member.role}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}