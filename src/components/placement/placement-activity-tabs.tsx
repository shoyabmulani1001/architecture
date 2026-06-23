"use client";

import { useState } from "react";
import {
    FaBriefcase,
    FaChalkboardTeacher,
    FaUserGraduate,
    FaChevronDown,
} from "react-icons/fa";

export default function PlacementActivities() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const activities = [
        {
            title: "Industry Expert Sessions",
            icon: <FaChalkboardTeacher size={22} />,
            description:
                "Connect directly with visionary architects, urban planners, and design innovators. Learn about future-forward trends, sustainable practices, and the real-world dynamics of running a successful modern practice.",
            highlights: [
                "Direct networking opportunities with industry leaders and prospective employers.",
                "Interactive Q&A on upcoming architectural technologies and green building trends.",
                "Insider guidance on transitioning from academic studios to high-impact jobs.",
            ],
        },
        {
            title: "Internships",
            icon: <FaBriefcase size={22} />,
            description:
                "Step into the real world with curated placements at leading design firms and planning agencies. Gain hands-on exposure working on live, prestigious projects that shape communities.",
            highlights: [
                "Real portfolio-ready experience on live structural and landscape designs.",
                "Master industry-standard tools and client coordination protocols.",
                "High conversion rates from internships to full-time career placement.",
            ],
        },
        {
            title: "Pre-Placement Training",
            icon: <FaUserGraduate size={22} />,
            description:
                "Perfect your professional presence. From building showstopping portfolios to mastering mock interviews and communication skills, we ensure you stand out to premium recruitment panels.",
            highlights: [
                "One-on-one portfolio polishing and review sessions with elite design mentors.",
                "Interactive mock interviews, resume drafting, and personal branding tips.",
                "Confidence-boosting workshops on pitching ideas and design presentation.",
            ],
        },
    ];

    return (
        <section className="space-y-10">

            {/* Heading */}
            <div>
                <h2 className="text-[var(--text-1)] mb-6">
                    Placement Activities
                </h2>

                <p className="text-[var(--text-2)] max-w-4xl">
                    Through industry engagement, practical exposure,
                    and professional development initiatives, DYPSOA
                    equips students with the knowledge, confidence,
                    and skills required to build successful careers
                    in architecture and design.
                </p>
            </div>

            {/* Accordion */}
            <div className="space-y-6">

                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="bg-[var(--primary-bg)] rounded-3xl border border-gray-200 overflow-hidden"
                    >
                        <button
                            onClick={() =>
                                setOpenIndex(
                                    openIndex === index ? null : index
                                )
                            }
                            className="w-full flex items-center justify-between px-8 py-4 text-left"
                        >
                            <div className="flex items-center gap-5">
                                <div className="text-[var(--primary-bg)]">
                                    {activity.icon}
                                </div>

                                <h6 className="text-[var(--text-1)]">
                                    {activity.title}
                                </h6>
                            </div>

                            <FaChevronDown
                                className={`text-[var(--text-2)] transition-transform duration-300 ${openIndex === index
                                    ? "rotate-180"
                                    : ""
                                    }`}
                                size={18}
                            />
                        </button>

                        {openIndex === index && (
                            <div className="px-8 pb-8 animate-fadeIn">
                                <div className="h-px bg-gray-200 mb-6" />

                                <p className=" text-[var(--text-2)] mb-6">
                                    {activity.description}
                                </p>

                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h4 className="text-[var(--text-2)] uppercase mb-4">
                                        Key Benefits for Students
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activity.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mt-1">
                                                    ✓
                                                </span>
                                                <span className="text-[var(--text-2)]">
                                                    {highlight}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
}
