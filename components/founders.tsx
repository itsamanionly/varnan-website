"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
// import { FaGlobe } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
// import { FaReddit } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
const SocialIcon = ({ platform }: { platform: string }) => {
    const iconMap: Record<string, React.ReactElement> = {
        linkedin: (
            <FaLinkedin size={22} />
        ),
        instagram: (
            <FaInstagram size={22} />
        ),
        medium: (
            <FaMedium size={22} />
        ),
        website: (
            <IoIosGlobe size={22} />
        ),
        reddit: (
            <FaReddit size={24} />
        ),
    };

    return iconMap[platform.toLowerCase()] || null;
};

const teamMembers = [
    {
        name: "Paras Madan",
        role: "Co-Founder",
        bio: "An action-oriented builder at heart. He's led GTM for two YC-backed AI companies (Athina and Unify AI) and scaled an AI community to 250K+ with 50M+ total views.",
        image: "/paras.png",
        socials: {
            instagram: "https://www.instagram.com/parasmadan.in",
            linkedin: "https://www.linkedin.com/in/paras-madan-a9863716b",
            medium: "https://medium.com/@parasmadan.in",
            website: "https://parasmadan.in",
        },
    },
    {
        name: "Sam Josh",
        role: "Co-Founder",
        bio: "A Stanford graduate who's worked closely with Paras for 4+ years. He leads GTM strategy, chooses the right channels, and runs campaigns end-to-end.",
        image: "/sam.jpg",
        socials: {
            reddit: "https://www.reddit.com/user/Sam_Tech1/"
        },
    },
];
export const Founders = () => {
    return (
        <section className=" bg-background  py-16 md:py-24">
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
                            {member.socials && Object.keys(member.socials).length > 0 && (
                                <div className="mt-6 flex justify-center gap-4">
                                    {Object.entries(member.socials).map(([platform, url]) => {
                                        if (!url) return null;

                                        const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);

                                        return (
                                            <a
                                                key={platform}
                                                href={url as string}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                                                aria-label={`${member.name}'s ${platformName}`}
                                            >
                                                <SocialIcon platform={platform} />
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {member.bio}
                            </p>
                            {/* Social Links */}

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}