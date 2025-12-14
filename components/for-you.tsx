import React from 'react'
import { Check, X } from "lucide-react"
export const ForYou = () => {
    const fitCriteria = [
        "Have proven Product-Market Fit ($50K-$500k ARR)",
        "Have Technical Founders who can build but need GTM help",
        "Are getting Signups but struggling to convert to Paid Customers",
        "Want to scale without building a massive Marketing Team",
        "Are YC-backed or venture-funded (understand growth urgency)",
    ]

    const notFitCriteria = [
        "Haven't launched yet (pre-product)",
        "Are pre-revenue with no customer feedback",
        'Want us to "figure out" what to build',
        "Need demand creation, not demand capture",
        "You want quick hacks, not systems that compound"
    ]
    return (
        <section className="pt-16 md:pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto ">
            <div className="mb-16 text-center mx-auto">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 text-balance leading-tight">
                    Is This For You?
                </h2>
                <div className="w-16 h-1 bg-black mb-6 mx-auto" />
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance mx-auto">
                    We work best with founders who have a product, traction, and are ready to accelerate growth.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 ">
                {/* Perfect Fit Card */}
                <div className="border border-[#0a0a0a] rounded-lg p-6 sm:p-8 md:p-10 bg-white ">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                            <Check className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Perfect Fit</h3>
                    </div>

                    <div className="space-y-5">
                        {fitCriteria.map((criterion, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 mt-1">
                                    <Check className="w-3 h-3 text-foreground" />
                                </div>
                                <p className="text-foreground text-base leading-relaxed">{criterion}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Not a Fit Card */}
                <div className="border border-[#0a0a0a] rounded-lg p-6 sm:p-8 md:p-10 bg-black/5 ">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0">
                            <X className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Not a Fit</h3>
                    </div>

                    <div className="space-y-5">
                        {notFitCriteria.map((criterion, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="w-5 h-5 rounded-full border-2 border-[#0a0a0a]/50 flex items-center justify-center flex-shrink-0 mt-1">
                                    <X className="w-3 h-3 text-foreground/70" />
                                </div>
                                <p className="text-foreground/80 text-base leading-relaxed">{criterion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}