import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const data = [
    {
        id: 1,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate the return process."
    },
    {
        id: 2,
        question: "What is your refund policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate the return process."
    },
    {
        id: 3,
        question: "What is your cancellation policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate the return process."
    },
    {
        id: 4,
        question: "What is your shipping policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate the return process."
    },
]
export const Faq = () => {
    return (
        <section className="container mx-auto py-10 px-5">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gray-100">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently asked questions</h2>
            </div>
            <div className="max-w-4xl mx-auto">

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {
                        data && data.map((item) => (
                            <AccordionItem key={item.id} value={"item-" + item.id} className="border rounded-lg px-4">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline">
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
