"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaGraduationCap,
    FaCheck,
    FaArrowRight,
} from "react-icons/fa";

export default function AcademicPrograms() {
    const programs = [
        {
            title: "B.Arch",
            description:
                "Bachelor of Architecture (B.Arch) is a comprehensive program.",
            image: "/Home-page/b.arch-image.png",
            features: [
                "Architectural Design Studios",
                "Building Construction & Materials",
                "Urban Planning & Sustainable Design",
            ],
        },
        {
            title: "M.Arch",
            description:
                "Master of Architecture (M.Arch) is an advanced program.",
            image: "/Home-page/m.arch-image.png",
            features: [
                "Advanced Architectural Research",
                "Sustainable & Smart Building Design",
                "Urban Development & Planning",
            ],
        },
    ];

    return (
        <section className="relative bg-white py-20 overflow-hidden">
            {/* Decorative Icon */}
            {/* <div className="absolute left-10 top-52 opacity-10 hidden xl:block">
                <FaGraduationCap className="text-white text-[120px]" />
            </div> */}

            <div className="max-w-[1230px] mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-9">
                    <div>
                        {/* <div className="flex items-center gap-2 mb-5">
                            <FaGraduationCap className="text-[#b1072e] text-sm" />
                            <span className="uppercase text-white font-semibold tracking-wide text-sm">
                                Programs & Study
                            </span>
                        </div> */}

                        <h2 className="text-[var(--text-1)] mb-4">
                            Academics & Programs
                        </h2>
                    </div>
                    {/* 
                    <Link
                        href="/programs"
                        className="mt-8 lg:mt-0 bg-[#b1072e] hover:bg-[#970625] transition-all text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold w-fit"
                    >
                        Explore All Programs
                        <FaArrowRight size={14} />
                    </Link> */}
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-[var(--r-lg-btn)] p-4"
                        >
                            <div className="grid md:grid-cols-[260px_1fr] gap-6">
                                {/* Image */}
                                <div className="relative h-[320px] rounded-[var(--r-lg-btn)] overflow-hidden">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between py-2">
                                    <div>
                                        <h3 className="text-[var(--text-1)] mb-3">
                                            {program.title}
                                        </h3>

                                        <p className="text-[var(--text-2)] mb-5">
                                            {program.description}
                                        </p>

                                        <div className="space-y-2.5 mb-5">
                                            {program.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-3"
                                                >
                                                    <FaCheck className="text-[#3E4095]" />
                                                    <small className="text-[var(--text-2)]">
                                                        {feature}
                                                    </small>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-fit px-6 py-2.5 border border-[#4b5366] rounded-full text-white bg-[#3E4095] hover:bg-[#3E4095] hover:text-white transition-all">
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}