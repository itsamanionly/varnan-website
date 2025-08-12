import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const data = [
    {
        id: 1,
        question: "What exactly does Varnan do for AI Startups?",
        answer: "Varnan focuses on increasing your product’s overall visibility, building market traction, and helping you acquire the right users, the ones who drive feedback, adoption, and growth. Our work spans positioning, content strategy, distribution, and launches, so you end up with a stronger presence in the market."
    },
    {
        id: 2,
        question: "What stage of Startups do you work with?",
        answer: "We work with seed to Series A Native AI startups that already have a working product and need traction."
    },
    {
        id: 3,
        question: "Do you handle Sales or book Discovery Calls?",
        answer: "No. We focus on marketing and distribution, creating demand and awareness. Your team owns the sales conversations and closing."
    },
    {
        id: 4,
        question: "How are you different from a Marketing Agency?",
        answer: "We act like an embedded product marketing team, not a campaign vendor. No vanity metrics, no bloated retainers just impactful product launches, technical content, sharp positioning, and channels that compound over time."
    },
    {
        id: 5,
        question: "What makes your Product Marketing approach different from others?",
        answer: "We’re a team of AI engineers first, marketers second. Every part of our workflow is powered by AI agents. It’s how we test faster, publish quicker, and scale your product marketing efforts without adding extra layers of people or delay."
    },
    {
        id: 6,
        question: "Do you help in increasing my Social Media followers?",
        answer: "No, follower growth is a side effect, not the goal. We focus on positioning, distribution, and user acquisition that increase your product’s visibility in the market, bring in the right users, and drive adoption. The result is lasting traction and market presence, not just a bigger number on a profile."
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
