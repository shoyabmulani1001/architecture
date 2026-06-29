"use client";

import { useEffect, useState } from "react";

const placementLinks = [
    {
        title: "About Placement",
        href: "#about-placement",
    },
    {
        title: "Placement Committee",
        href: "#placement-committee",
    },
    {
        title: "Career Support",
        href: "#career-support",
    },
    {
        title: "Placement Activities",
        href: "#placement-activities",
    },
    {
        title: "Placement Brochure",
        href: "#placement-brochure",
    },
    {
        title: "Placement Updates",
        href: "#placement-updates1",
    },
    {
        title: "Placement Status",
        href: "#placement-status",
    },
    {
        title: "Our Recruiters",
        href: "#our-recruiters",
    },
    {
        title: "Student Verification",
        href: "#student-verification",
    },
    {
        title: "Job Fair",
        href: "#job-fair",
    },
];

export default function PlacementSidebar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const visibleEntry = entries.find(entry => entry.isIntersecting);
            if (visibleEntry) {
                setActiveSection(`#${visibleEntry.target.id}`);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0.1,
        });

        placementLinks.forEach((item) => {
            const el = document.querySelector(item.href);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerOffset = 140; // header height + sticky menu clearance
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(href);
        }
    };

    return (
        <aside className="lg:sticky lg:top-32 h-fit lg:w-[380px] w-full sticky top-[60px] md:top-[72px] z-30 bg-[#fafafa] lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
            {/* Desktop Version */}
            <div className="hidden lg:block bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

                <div className="bg-[var(--primary-bg)] p-6">
                    <h4 className="text-[var(--text-1)]">
                        Placements
                    </h4>
                </div>

                <nav>
                    {placementLinks.map((item) => {
                        const isActive = activeSection === item.href;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={`block px-6 py-3 border-b border-gray-100 transition-all duration-300 font-medium ${
                                    isActive
                                        ? "bg-[#3E4095] text-white"
                                        : "text-black hover:bg-gray-50"
                                }`}
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </nav>

            </div>

            {/* Mobile/Tablet Horizontal Scrollable Version */}
            <div 
                className="lg:hidden w-full overflow-x-auto py-3 flex gap-2 border-b border-gray-200 bg-white -mx-4 px-4"
                style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch' 
                }}
            >
                {placementLinks.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={`inline-block px-4 py-2 text-xs md:text-sm rounded-full transition-all duration-300 font-semibold shrink-0 ${
                                isActive
                                    ? "bg-[#3E4095] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {item.title}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
}