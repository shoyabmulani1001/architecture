"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

interface Course {
    id: number;
    title: string;
    degree: string;
    description: string;
    href: string;
    duration: string;
}

const courses: Course[] = [
    {
        id: 1,
        title: "B.Arch",
        degree: "Bachelor of Architecture",
        description: "A 5-year undergraduate program focused on architectural design, sustainability, construction technology, and professional practice.",
        href: "/courses/barch",
        duration: "5 Years",
    },
    {
        id: 2,
        title: "M.Arch",
        degree: "Master of Architecture",
        description: "A 2-year postgraduate program emphasizing advanced design, research, urban development, and innovation in architecture.",
        href: "/courses/march",
        duration: "2 Years",
    },
];

export default function CoursesSection() {
    return (
        <section className="bg-[var(--primary-bg)] py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-9 text-center">
                    <h2 className="mb-4 text-[var(--text-1)]">Architecture Courses</h2>
                    <p className="mx-auto max-w-2xl text-[var(--text-2)]">
                        Build your career through creative thinking, innovative design, sustainable architecture, and professional excellence.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="group rounded-[var(--r-btn)] border border-gray-200 bg-[var(--primary-bg)] hover:shadow-sm transition-all duration-300"
                        >
                            <div className="flex flex-col gap-4 p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-[var(--text-1)]">{course.title}</h3>
                                        <p className="mt-1 text-[var(--primary)] text-sm">{course.degree}</p>
                                    </div>
                                    <Link
                                        href={course.href}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[var(--text-1)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]"
                                    >
                                        <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-2)] text-sm leading-relaxed">
                                    {course.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-2">
                                    <Link
                                        href={course.href}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                                    >
                                        Explore Program
                                        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                    <div className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                                        {course.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}