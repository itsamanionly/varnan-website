"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

type FAQItemProps = {
    question: string;
    children: React.ReactNode;
};

export function FAQItem({ question, children }: FAQItemProps) {
    return (
        <AccordionItem value={question} className="border-b border-gray-200 py-2">
            <AccordionTrigger className="text-left font-bold text-xl md:text-2xl py-5 hover:no-underline text-gray-900 [&[data-state=open]]:border [&[data-state=open]]:border-gray-300 [&[data-state=open]]:rounded-lg [&[data-state=open]]:px-4 [&[data-state=open]]:bg-gray-50/50">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base md:text-lg leading-relaxed pt-2 pb-4">
                {children}
            </AccordionContent>
        </AccordionItem>
    );
}

type FAQSectionProps = {
    children: React.ReactNode;
    defaultOpen?: string; // Question text of the FAQ to open by default
};

export function FAQSection({ children, defaultOpen }: FAQSectionProps) {
    // Get the first child's question prop to use as default if not specified
    const firstChildQuestion = React.Children.toArray(children)[0];
    const defaultValue = defaultOpen ||
        (React.isValidElement(firstChildQuestion)
            ? (firstChildQuestion.props as FAQItemProps).question
            : undefined);

    return (
        <div className="my-10">
            <Accordion
                type="single"
                collapsible
                defaultValue={defaultValue}
                className="w-full space-y-2"
            >
                {children}
            </Accordion>
        </div>
    );
}
