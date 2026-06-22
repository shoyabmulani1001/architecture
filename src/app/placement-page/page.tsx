import PlacementHero from "@/sections/placement-section/placement-hero";
import PlacementSidebar from "@/sections/placement-section/placement-sidebar";

import AboutPlacement from "@/sections/placement-section/about-placement";
import PlacementCommittee from "@/sections/placement-section/placement-committe";
import CareerSupport from "@/sections/placement-section/career-support";
import PlacementActivities from "@/sections/placement-section/placement-activities";
import PlacementBrochure from "@/sections/placement-section/placement-brouchers";
// import PlacementUpdates from "@/sections/placement-section/placement-update";
import PlacementUpdates1 from "@/sections/placement-section/placement-update1";
import PlacementStatus from "@/sections/placement-section/placement-status";
import OurRecruiters from "@/sections/placement-section/our-recruters";
import StudentVerification from "@/sections/placement-section/student-verification";
import JobFair from "@/sections/placement-section/job-fair";

export const metadata = {
    title:
        "Placements | DY Patil School of Architecture Pune",

    description:
        "Explore placements, recruiters, internships, career support, placement statistics, student achievements and job fairs at DY Patil School of Architecture Pune.",

    keywords: [
        "Architecture Placements",
        "DYPSOA Placements",
        "Architecture College Pune",
        "Architecture Recruiters",
        "Career Support",
        "Job Fair",
        "Internships",
        "Placement Activities",
    ],
};

export default function PlacementPage() {
    return (
        <>
            <PlacementHero currentTab="Placements" />

            <section className="py-20 bg-[#fafafa]">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">

                    <div className="grid lg:grid-cols-[380px_1fr] gap-10">

                        <PlacementSidebar />

                        <div className="space-y-24">

                            <section id="about-placement">
                                <AboutPlacement />
                            </section>

                            <section id="placement-committee">
                                <PlacementCommittee />
                            </section>

                            <section id="career-support">
                                <CareerSupport />
                            </section>

                            <section id="placement-activities">
                                <PlacementActivities />
                            </section>

                            <section id="placement-brochure">
                                <PlacementBrochure />
                            </section>

                            {/* <section id="placement-updates">
                                <PlacementUpdates />
                            </section> */}

                            <section id="placement-updates1">
                                <PlacementUpdates1 />
                            </section>

                            <section id="placement-status">
                                <PlacementStatus />
                            </section>

                            <section id="our-recruiters">
                                <OurRecruiters />
                            </section>

                            <section id="student-verification">
                                <StudentVerification />
                            </section>

                            <section id="job-fair">
                                <JobFair />
                            </section>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}