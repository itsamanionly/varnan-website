"use client"
import React from 'react'
import { ArrowRight, Zap, CheckCircle2, Compass, Flame, Trophy } from 'lucide-react';
import Link from 'next/link';
const phases = [
    {
        number: 1,
        title: 'POSITIONING',
        subtitle: 'PHASE 1',
        icon: Compass,
        duration: '4-6 weeks',
        outcome: {
            title: 'OUTCOME',
            description: 'Your ICP can clearly explain what you do and why it matters in 10 seconds.'
        },
        items: [
            'Deep market and competitor signal mapping',
            'Founder-led positioning and narrative workshop',
            'Clear messaging hierarchy and value propositions',
            'High-signal customer interviews to validate demand'
        ],
        color: '#000000',
        bgGradient: 'from-gray-900 via-gray-800 to-black'
    },
    {
        number: 2,
        title: 'GROWTH ENGINE',
        subtitle: 'PHASE 2',
        icon: Flame,
        duration: '8-12 weeks',
        outcome: {
            title: 'OUTCOME',
            description: '3x increase in qualified inbound leads within 90 days.'
        },
        items: [
            'Technical content built to rank and compound on Google',
            'Product-led assets (templates, tools, interactive demos)',
            'Founder thought leadership designed for LinkedIn distribution',
            'Structured launch sequences for major product releases'
        ],
        color: '#1a1a1a',
        bgGradient: 'from-gray-800 via-gray-700 to-gray-900'
    },
    {
        number: 3,
        title: 'LAUNCH & SCALE',
        subtitle: 'PHASE 3',
        icon: Trophy,
        duration: '6-10 weeks',
        outcome: {
            title: 'OUTCOME',
            description: 'A repeatable launch playbook generating $50K+ pipeline per drop.'
        },
        items: [
            'Coordinated multi-channel launch execution',
            'Design partner and early champion recruitment',
            'PR and media narratives aligned with positioning',
            'Community and advocacy loops to sustain momentum'
        ],
        color: '#0d0d0d',
        bgGradient: 'from-gray-700 via-gray-800 to-black'
    }
];
export const Phases = () => {
    // const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
    return (
        <div className="w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>

            <div className="relative py-12 sm:py-16 md:py-20  lg:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto ">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                        <div className="inline-block mb-4 sm:mb-6 group">
                            <div className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-black text-white text-[10px] sm:text-xs font-bold tracking-widest rounded-full hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-black">
                                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="whitespace-nowrap">THE VARNAN PLAYBOOK</span>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-black tracking-tighter leading-tight sm:leading-none">
                            Three Phases.<br />
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Measurable Results.</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed px-2">
                            How we take AI companies from positioning to launch with measurable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-6 relative mb-12 sm:mb-16 md:mb-20 lg:mb-16">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            // const isHovered = hoveredPhase === phase.number;

                            return (
                                <div
                                    key={phase.number}
                                    // onMouseEnter={() => setHoveredPhase(phase.number)}
                                    // onMouseLeave={() => setHoveredPhase(null)}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-br from-black to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 -z-10"></div>

                                    <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-black transition-all duration-500 h-fit lg:h-full hover:shadow-2xl hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50"></div>

                                        <div className="relative p-5 sm:p-6 md:p-8 h-full flex flex-col">
                                            <div className="flex items-start justify-between gap-3 mb-6 sm:mb-8">
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[10px] sm:text-xs font-black text-gray-600 tracking-widest mb-1 sm:mb-2 uppercase">
                                                        {phase.subtitle}
                                                    </div>
                                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black leading-tight tracking-tight">
                                                        {phase.title}
                                                    </h2>
                                                    <div className="text-[10px] sm:text-xs text-gray-500 font-semibold mt-1 sm:mt-2">
                                                        {phase.duration}
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-black to-gray-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl border border-gray-300 relative group/outcome hover:border-black transition-all duration-300">
                                                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10 group-hover/outcome:opacity-20 transition-opacity">
                                                    <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12" />
                                                </div>
                                                <div className="text-[10px] sm:text-xs font-black text-gray-700 tracking-widest mb-2 sm:mb-3 uppercase">
                                                    {phase.outcome.title}
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-900 font-semibold leading-relaxed pr-6 sm:pr-8">
                                                    {phase.outcome.description}
                                                </p>
                                            </div>

                                            <div className="space-y-2 sm:space-y-3 flex-1">
                                                {phase.items.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-2 sm:gap-3 group/item"
                                                    >
                                                        <div className="flex-shrink-0 mt-1 sm:mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black opacity-60 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300"></div>
                                                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium group-hover/item:text-black transition-colors">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 flex items-center justify-between group-hover:border-black transition-colors">
                                                <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider">Phase {phase.number}</span>
                                                
                                            </div> */}
                                        </div>
                                    </div>

                                    {index < phases.length - 1 && (
                                        <>
                                            <div className="lg:hidden flex justify-center pt-5 sm:pt-6 md:pt-8">
                                                <div className="relative w-12 h-16 sm:h-20">
                                                    <div className="absolute left-1/2 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-black via-gray-400 to-transparent transform -translate-x-1/2"></div>
                                                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2">
                                                        <div className="bg-black rounded-full p-1.5 sm:p-2.5 shadow-xl border-3 sm:border-4 border-white animate-bounce" style={{ animationDuration: '2s' }}>
                                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white transform rotate-90" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-20">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-700 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                                                    <div className="relative w-14 h-14 bg-white rounded-full shadow-2xl border-3 border-black flex items-center justify-center hover:scale-125 transition-all duration-300 hover:shadow-3xl group/arrow cursor-pointer">
                                                        <ArrowRight className="w-6 h-6 text-black group-hover/arrow:translate-x-1 transition-transform duration-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center px-2">
                        <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-black text-white font-bold text-sm sm:text-base md:text-lg tracking-wide rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-black hover:bg-gray-900 overflow-hidden whitespace-nowrap sm:whitespace-normal">
                            <span className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10"></span>
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                            <span className="hidden sm:inline">
                                <Link href="https://calendly.com/varnan-discovery-call/30min">
                                    Start Your Journey Today
                                </Link>
                            </span>
                            <span className="sm:hidden">

                                <Link href="https://calendly.com/varnan-discovery-call/30min">
                                    Get Started
                                </Link>
                            </span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
