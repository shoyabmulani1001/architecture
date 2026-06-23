import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// import PlacementHero from "@/sections/placement-new/placement-hero";

import PlacementInteractiveTabs from "@/components/placement/placement-interactive-tabs";
import PlacementUpdates from "@/sections/placement-new/placement-update1";

export const metadata: Metadata = {
    title:
        "Placements & Career Development | DY Patil School of Architecture Pune",

    description:
        "Explore placements, career support, internships, industry collaborations, recruiters, placement activities, student success stories, placement statistics, job fairs, and career opportunities at DY Patil School of Architecture Pune.",

    keywords: [
        "Architecture College Pune",
        "Architecture Placements",
        "B.Arch Placements",
        "M.Arch Placements",
        "Architecture Career Opportunities",
        "Architecture Internship",
        "Architecture Recruiters",
        "Best Architecture College in Pune",
        "Top Architecture College in Maharashtra",
        "DYPSOA Placements",
        "Career Development",
        "Campus Placements",
        "Student Success Stories",
        "Architecture Job Fair",
        "Architecture Training and Placement",
        "Architecture Education India",
    ],

    openGraph: {
        title:
            "Placements & Career Development | DY Patil School of Architecture Pune",
        description:
            "Discover placement opportunities, industry exposure, internships, and career support initiatives at DYPSOA.",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "/placement",
    },
};


const placementUpdates = [
    {
        id: 1,
        image: "/placements/Placed-Student-Sahil-K.webp",
    },
    {
        id: 2,
        image: "/placements/Placed-Student-Harshada-B.webp",
    },
    {
        id: 3,
        image: "/placements/Placed-Student-Mahesh-M.webp",
    },
    {
        id: 4,
        image: "/placements/Placed-Student-Piyush-N.webp",
    },
    {
        id: 5,
        image: "/placements/Placed-Student-Samiksha-P.webp",
    },
    {
        id: 6,
        image: "/placements/Placed-Student-Saniya-P.webp",
    },
    {
        id: 7,
        image: "/placements/Placed-Student-Sanket-N.webp",
    },
    {
        id: 8,
        image: "/placements/Placed-Student-Saurabh-B.webp",
    },
    {
        id: 9,
        image: "/placements/Placed-Student-Saurabh-P.webp",
    },
    {
        id: 10,
        image: "/placements/Placed-Student-Somnath-T.webp",
    },
];


export default function PlacementPage() {
    return (
        <>
            <section
                className="relative min-h-[280px] flex items-end pb-8"
                style={{
                    backgroundImage:
                        "url('/Hero-Section/hero-image.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="w-full max-w-[1230px] mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-white mb-3">
                            Placements
                        </h1>

                        <p className="text-white/90 text-lg leading-relaxed font-normal">
                            At DYPSOA, we are committed to helping students transform their academic journey into successful professional careers through comprehensive career development and placement support initiatives.
                        </p>

                        <div className="w-24 h-1 bg-[var(--primary)] mt-6" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#fafafa]">
                <div className="max-w-[1230px] mx-auto px-4 lg:px-8">

                    <div className="space-y-24">
                        {/* <section id="career-support">
                            <CareerSupport />
                        </section> */}

                        {/* Interactive Tabbed Sections below Career Support */}
                        <PlacementInteractiveTabs />

                        {/* <section id="about-placement">
                            <PlacementUpdates />
                        </section> */}




                        <section className="space-y-8">

                            {/* Header */}
                            <div className="mb-9">
                                <h2 className=" text-[var(--text-1)] mb-4">
                                    Placement Updates
                                </h2>

                                <p className="text-[var(--text-2)] max-w-4xl">
                                    Celebrating the achievements of our students who have
                                    successfully secured placement opportunities through
                                    campus recruitment drives, internships, and industry
                                    collaborations.
                                </p>
                            </div>

                            {/* Placement Gallery */}
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                                {placementUpdates.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group bg-[var(--primary-bg)] rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative aspect-square overflow-hidden">

                                            <Image
                                                src={item.image}
                                                alt={`Placement Update ${item.id}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* CTA Section */}
                            {/* <div className="bg-[var(--primary)] rounded-3xl p-10 lg:p-14 text-center text-[var(--primary-bg)]">

                                <span className="uppercase opacity-80">
                                    Admissions Open
                                </span>

                                <h3 className="mt-4 mb-5">
                                    Build Your Future with DYPSOA
                                </h3>

                                <p className="max-w-3xl mx-auto opacity-90 mb-8">
                                    Join a vibrant learning environment where academic
                                    excellence meets industry exposure. Gain access to
                                    internships, expert mentorship, and career-focused
                                    opportunities that prepare you for professional success.
                                </p>

                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center bg-[] text-[#3E4095] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
                                >
                                    Enquire Now
                                </Link>

                            </div> */}

                        </section>


                    </div>

                </div>
            </section>
        </>
    );
}