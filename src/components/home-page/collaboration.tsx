"use client";

import { useState } from "react";
import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
}

interface SectionData {
    approved: {
        title: string;
        logos: Logo[];
    };
    member: {
        title: string;
        logos: Logo[];
    };
    collaborations: {
        title: string;
        logos: Logo[];
    };
}

export default function CollaborationTabs({
    sections,
}: {
    sections: SectionData;
}) {
    const [activeTab, setActiveTab] = useState<
        "approved" | "member" | "collaborations"
    >("member");

    return (
        <div className="flex flex-col items-center gap-12">

            {/* Tabs */}
            <div className="bg-[var(--primary)] rounded-[var(--r-btn)] p-2 w-full max-w-5xl flex flex-col sm:flex-row gap-2">

                {(Object.keys(sections) as Array<
                    keyof typeof sections
                >).map((key) => {
                    const active = activeTab === key;

                    return (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex-1 px-4 sm:px-6 py-2 rounded-[var(--r-btn)] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base
                                ${active
                                    ? "bg-white text-[var(--text-1)]"
                                    : "text-white"
                                }`}
                        >
                            <span>
                                {sections[key].title}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">

                {sections[activeTab].logos.map((logo, index) => (
                    <div
                        key={index}
                        className="bg-white border border-[var(--card-border)] rounded-[var(--r-btn)] p-8 flex items-center justify-center hover:shadow-sm transition-all duration-300"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={180}
                            height={120}
                            className="object-contain h-24 w-auto"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}