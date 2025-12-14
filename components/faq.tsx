import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const data = [
    {
        id: 1,
        question: "Why should we work with you vs. hiring a VP of Marketing?",
        answer: "Speed and proven systems. A VP takes 6+ months to ramp, costs $200K+/year, and may not have experience scaling AI products specifically. We deploy battle-tested frameworks week one, with no ramp time or equity dilution."
    },
    {
        id: 2,
        question: "We already have product-market fit. Why do we need this?",
        answer: "PMF ≠ scalable GTM. Most AI companies nail the product but struggle with repeatable demand generation, enterprise positioning, and pipeline velocity. We bridge that gap with systems that compound, not one-off campaigns."
    },
    {
        id: 3,
        question: "What makes your approach different from typical marketing agencies?",
        answer: "We're operators, not creatives. Our frameworks come from scaling Y Combinator companies and AI-first products. We focus on pipeline metrics (MQLs, SQLs, pipeline $) not vanity metrics (impressions, clicks)."
    },
    {
        id: 4,
        question: " How do you guarantee results? ",
        answer: "Two ways: (1) We only work with companies that have proven ICP + validated messaging, and (2) Our playbooks are battle-tested across 15+ AI companies. If fundamentals are there, execution is predictable."
    },
    {
        id: 5,
        question: "Can you work with our existing marketing team?",
        answer: "Absolutely. We're force multipliers, not replacements. We plug in as interim CMO/demand gen leads, build the systems, then transition execution to your team. Many clients keep us on for optimization."
    },
    {
        id: 6,
        question: "Do you help grow social media followers?",
        answer: "Not directly but we'll position you as the go-to expert in your space. Thought leadership content, founder-led GTM, and strategic visibility that attracts your ICP. Followers are a byproduct, pipeline is the goal."
    }
]
export const Faq = () => {
    return (
        <section className="container mx-auto py-10 px-5">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gray-100">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight capitalize">Frequently asked questions</h2>
            </div>
            <div className="max-w-4xl mx-auto">

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {
                        data && data.map((item) => (
                            <AccordionItem key={item.id} value={"item-" + item.id} className="border rounded-lg px-4">
                                <AccordionTrigger className="text-lg text-left font-medium hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    )
}
