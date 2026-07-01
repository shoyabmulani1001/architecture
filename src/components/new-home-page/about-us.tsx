"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaGraduationCap,
    FaLightbulb,
    FaUsers,
    FaChartLine,
} from "react-icons/fa";

const features = [
    {
        icon: <FaGraduationCap size={30} />,
        title: "Studio Based",
        subtitle: "Learning",
    },
    {
        icon: <FaLightbulb size={30} />,
        title: "Design Led",
        subtitle: "Education",
    },
    {
        icon: <FaUsers size={30} />,
        title: "Industry",
        subtitle: "Exposure",
    },
    {
        icon: <FaChartLine size={30} />,
        title: "Future Ready",
        subtitle: "Architects",
    },
];

export default function AboutUsSection() {
    return (
        <section className="relative overflow-hidden bg-[var(--primary-bg)]">
            {/* Main Container */}

            <div className="relative z-10 mx-auto max-w-[1230px] px-6 lg:px-12">

                <div className="grid min-h-screen items-center gap-20 py-20 lg:grid-cols-2">

                    {/* ===========================
                LEFT CONTENT
          =========================== */}

                    <div>

                        {/* Institute Badge */}

                        <div className="mb-8 flex items-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-md">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--primary)"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <path d="M3 21h18" />
                                    <path d="M5 21V8l7-5 7 5v13" />
                                    <path d="M8 21v-6h8v6" />
                                    <path d="M9 10h.01M15 10h.01" />
                                </svg>

                            </div>

                            <div>

                                <p className="text-[var(--text-1)]">
                                    Dr. D. Y. Patil School of Architecture (DYPSOA)
                                </p>

                                <p className="text-[var(--primary)]">
                                    Talegaon, Pune
                                </p>

                            </div>

                        </div>
                        {/* Heading */}

                        <h2 className="max-w-xl text-[var(--text-1)]">

                            Design Spaces.
                            Inspire Lives.
                            <span className="text-[var(--primary)]">
                                Shape the Future.
                            </span>
                        </h2>

                        {/* Description */}

                        <p className="mt-6 max-w-2xl text-[var(--text-2)]">

                            Dr. D. Y. Patil School of Architecture (DYPSOA) empowers
                            aspiring architects through studio-based learning,
                            sustainability-focused education, and creative exploration.

                        </p>

                        <p className="mt-4 max-w-2xl text-[var(--text-2)]">

                            Our Bachelor and Master of Architecture programs combine
                            innovation, practical experience, advanced technology,
                            collaborative design studios, and industry engagement to
                            prepare future-ready professionals.

                        </p>

                        {/* CTA Buttons */}

                        <div className="mt-9 flex flex-wrap gap-5">

                            <Link
                                href="/admission"
                                className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-8 py-3 text-white shadow-sm transition-all duration-300 hover:shadow-md"
                            >
                                Apply Now

                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

                            </Link>

                        </div>
                    </div>

                    {/* ===========================
                RIGHT CONTENT
          =========================== */}

                    <div className="relative">
                        <div className="rounded-[var(--r-btn)] bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary)] p-[3px] shadow-md">

                            {/* Image Container */}

                            <div className="relative overflow-hidden rounded-[var(--r-btn)] bg-white">

                                <Image
                                    src="/Home-page/DYPIMED-About-Side-IMG.webp"
                                    alt="DYPSOA Students"
                                    width={900}
                                    height={700}
                                    priority
                                    className="h-[520px] w-full object-cover transition duration-700 hover:scale-[1.02]"
                                />
                            </div>

                        </div>

                        {/* Floating Feature Card */}

                        {/* <div className="absolute -bottom-20 left-1/2 w-[95%] -translate-x-1/2 rounded-[32px] bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

                            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

                                {features.map((feature, index) => (

                                    <div
                                        key={index}
                                        className="group flex flex-col items-center text-center transition duration-300 hover:-translate-y-2"
                                    >

                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF4EA] text-[#C97C3D] transition duration-300 group-hover:bg-[#C97C3D] group-hover:text-white">

                                            {feature.icon}

                                        </div>

                                        <h3 className="text-lg font-bold text-[#1F2A44]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {feature.subtitle}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div> */}

                    </div>

                </div>

            </div>

        </section>
    );
}