import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const data = [
    {
        id: 1,
        question: "What types of AI startups do you work with?",
        answer: "We specialize in partnering with early-stage AI startups, typically with teams of 2–6 members, focusing on bringing their innovative products to market."
    },
    {
        id: 2,
        question: "How do you tailor your GTM strategies?",
        answer: "Our approach is customized to each startup's unique needs, considering factors like target audience, product offerings, and market dynamics."
    },
    {
        id: 3,
        question: "What is your pricing model?",
        answer: "We offer a monthly retainer-based model with tiered pricing based on the scope of services, and optional performance-based bonuses tied to traction milestones."
    },
    {
        id: 4,
        question: "How quickly can we see results?",
        answer: "While timelines vary, our clients often begin to see measurable improvements in user engagement and acquisition within the first few months."
    },
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
                                <AccordionContent className="text-gray-600">
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
