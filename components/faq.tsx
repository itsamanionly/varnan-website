import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const data = [
    {
        id: 1,
        question: "What exactly does Varnan do for AI startups?",
        answer: "We help AI startups launch and grow. That means defining clear positioning, writing technical content that earns trust, building distribution across Reddit, Hacker News, and LinkedIn, and driving user acquisition through repeatable growth loops."
    },
    {
        id: 2,
        question: "What stage of startup do you work with?",
        answer: "We work with seed to Series A Native AI startups that already have a working product and need traction."
    },
    {
        id: 3,
        question: "Do you handle sales or book discovery calls?",
        answer: "No. We focus on marketing and distribution, creating demand and awareness. Your team owns the sales conversations and closing."
    },
    {
        id: 4,
        question: "How are you different from a marketing agency?",
        answer: "We act like an embedded product marketing team, not a campaign vendor. No vanity metrics, no bloated retainers just impactful product launches, technical content, sharp positioning, and channels that compound over time."
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
