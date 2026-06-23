"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({
    question,
    answer,
}: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left gap-4"
            >
                <p className="text-[var(--text-1)]">
                    {question}
                </p>

                <span
                    className={`w-8 h-8 rounded-full border border-black flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? "bg-[var(--primary)] text-[var(--primay-bg)] border-[var(--primary)] rotate-45"
                        : "bg-transparent text-black"
                        }`}
                >
                    <FaPlus size={12} />
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[300px] pb-6" : "max-h-0"
                    }`}
            >
                <p className="text-[var(--text-2)]">
                    {answer}
                </p>
            </div>
        </div>
    );
}