"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface CardData {
    id: number;
    title: string;
    icon: React.ReactNode;
    content?: string;
    points?: string[];
}

interface AboutAccordionProps {
    cardsData: CardData[];
}

export default function AboutAccordion({
    cardsData,
}: AboutAccordionProps) {
    const [openCard, setOpenCard] = useState<number | null>(1);

    return (
        <div className="space-y-4">
            {cardsData.map((card) => {
                const isOpen = openCard === card.id;

                return (
                    <div
                        key={card.id}
                        className="bg-white rounded-[var(--r-btn)] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() =>
                                setOpenCard(isOpen ? null : card.id)
                            }
                            className="w-full flex items-center justify-between p-2 md:p-3 text-left gap-4 cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                    {card.icon}
                                </div>

                                <span className="text-[var(--text-1)]">
                                    {card.title}
                                </span>
                            </div>

                            <div className="shrink-0 text-[var(--text-2)]">
                                {isOpen ? (
                                    <FaChevronUp className="text-base" />
                                ) : (
                                    <FaChevronDown className="text-base" />
                                )}
                            </div>
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out overflow-y-auto ${isOpen
                                ? "max-h-[600px] border-t border-gray-50 p-6 bg-[var(--secondary-bg)]"
                                : "max-h-0"
                                }`}
                        >
                            {card.points ? (
                                <ul className="list-disc pl-5 space-y-2 text-[var(--text-2)]">
                                    {card.points.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[var(--text-2)]">
                                    {card.content}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}