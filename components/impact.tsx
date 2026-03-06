"use client"
import React from 'react'
import Link from 'next/link'

const projects = [
    { name: "LibrePods", stars: "5,500+", views: "600K", barWidth: "100%", highlight: true, href: "https://github.com/kavishdevar/librepods" },
    { name: "Git City", stars: "1,540+", views: "1M+", barWidth: "28%", highlight: true, href: "https://github.com/srizzon/git-city" },
    { name: "PicoClaw", stars: "1,500+", views: "1M+", barWidth: "27%", highlight: true, href: "https://github.com/sipeed/picoclaw" },
    { name: "Shannon", stars: "500+", views: "380K", barWidth: "9%", highlight: false, href: "https://github.com/KeygraphHQ/shannon" },
    { name: "Macless-Haystack", stars: "450+", views: "500K", barWidth: "8%", highlight: false, href: "https://github.com/dchristl/macless-haystack" },
    { name: "AirLLM", stars: "250+", views: "226K", barWidth: "5%", highlight: false, href: "https://github.com/lyogavin/airllm" },
    { name: "CraftGPT", stars: "180+", views: "343K", barWidth: "3%", highlight: false, href: "https://github.com/zizmax/CraftGPT" },
    { name: "Pixel Agents", stars: "200+", views: "99K", barWidth: "3%", highlight: false, href: "https://github.com/pablodelucca/pixel-agents" },
    { name: "Android-MCP", stars: "100+", views: "93K", barWidth: "1%", highlight: false, href: "https://github.com/ulcica/android-mcp" },
]

export const Impact = () => {
    return (
        <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24 px-4 sm:px-6">
            {/* Grid background matching Phases section */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
                {/* Badge pill */}
                <div className="flex justify-center mb-5">
                    <div className="flex items-center gap-2 px-4 py-2 bg-black text-white text-[10px] sm:text-xs font-bold tracking-widest rounded-full border border-gray-700">
                        <span>★</span>
                        <span>THE TRACK RECORD</span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-black text-center tracking-tighter leading-tight mb-4">
                    10,000+ GitHub Stars.<br />
                    9 Projects. One GTM Playbook.
                </h2>

                {/* Subtitle */}
                <p className="text-center text-sm md:text-base text-gray-500 mb-9 max-w-lg mx-auto leading-relaxed">
                    Every star below is a developer who found a product through our distribution system. Not paid ads, not luck.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-3 border-2 border-black mb-4 bg-white">
                    <div className="px-4 py-6 text-center border-r-2 border-black">
                        <span className="block text-3xl sm:text-4xl font-black tracking-tighter leading-none mb-2">10,000+</span>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Stars Generated</div>
                    </div>
                    <div className="px-4 py-6 text-center border-r-2 border-black">
                        <span className="block text-3xl sm:text-4xl font-black tracking-tighter leading-none mb-2">5.7M+</span>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Content Views</div>
                    </div>
                    <div className="px-4 py-6 text-center">
                        <span className="block text-3xl sm:text-4xl font-black tracking-tighter leading-none mb-2">9</span>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Projects Scaled</div>
                    </div>
                </div>

                {/* Projects table */}
                <div className="border-2 border-black bg-white overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-[1fr_80px_120px] sm:grid-cols-[1fr_90px_140px] px-4 py-2.5 bg-black gap-2">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">Project</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Stars</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Views</span>
                    </div>

                    {/* Project rows */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_80px_120px] sm:grid-cols-[1fr_90px_140px] px-4 py-3.5 border-b border-gray-100 items-center gap-2 hover:bg-gray-50 transition-colors duration-150 last:border-b-0"
                        >
                            <div className="flex items-center gap-2 text-sm font-bold min-w-0">
                                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.highlight ? 'bg-black' : 'bg-gray-400'}`} />
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="truncate border-b border-gray-200 hover:border-black transition-colors duration-150"
                                >
                                    {project.name}
                                </Link>
                            </div>
                            <div className="text-sm font-bold text-black">{project.stars}</div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${project.highlight ? 'bg-black' : 'bg-gray-400'}`}
                                        style={{ width: project.barWidth }}
                                    />
                                </div>
                                <span className="text-[11px] text-gray-400 whitespace-nowrap min-w-[36px] text-right">{project.views}</span>
                            </div>
                        </div>
                    ))}

                    {/* Total row */}
                    <div className="grid grid-cols-[1fr_80px_120px] sm:grid-cols-[1fr_90px_140px] px-4 py-3.5 bg-gray-50 border-t-2 border-black items-center gap-2">
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Total</div>
                        <div className="text-sm font-black">10,296+</div>
                        <div className="text-[11px] text-gray-500">5.7M+ views</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
