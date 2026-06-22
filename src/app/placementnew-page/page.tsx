import type { Metadata } from "next";

import PlacementHero from "@/sections/placement-new/placement-hero";

import PlacementInteractiveTabs from "@/sections/placement-new/placement-interactive-tabs";
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

export default function PlacementPage() {
    return (
        <>
            <PlacementHero />

            <section className="py-20 bg-[#fafafa]">
                <div className="max-w-[1230px] mx-auto px-4 lg:px-8">

                    <div className="space-y-24">
                        {/* <section id="career-support">
                            <CareerSupport />
                        </section> */}

                        {/* Interactive Tabbed Sections below Career Support */}
                        <PlacementInteractiveTabs />

                        <section id="about-placement">
                            <PlacementUpdates />
                        </section>

                    </div>

                </div>
            </section>
        </>
    );
}