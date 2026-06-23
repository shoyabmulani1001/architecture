
"use client";

import { useState } from "react";
import PlacementActivities from "@/sections/placement-new/placement-activities";
import PlacementBrochure from "@/sections/placement-new/placement-brouchers";
import PlacementStatus from "@/sections/placement-new/placement-status";
import OurRecruiters from "@/sections/placement-new/our-recruters";
import StudentVerification from "@/sections/placement-new/student-verification";
import JobFair from "@/sections/placement-new/job-fair";
import AboutPlacement from "@/sections/placement-new/about-placement";

export default function PlacementInteractiveTabs() {
    const [activeTab, setActiveTab] = useState("about-placement");

    const tabs = [
        { id: "about-placement", label: "About Placement" },
        { id: "placement-activities", label: "Placement Activities" },
        { id: "placement-brochure", label: "Placement Brochure" },
        { id: "placement-status", label: "Placement Status" },
        { id: "our-recruiters", label: "Our Recruiters" },
        // { id: "student-verification", label: "Student Verification" },
        // { id: "job-fair", label: "Job Fair" },
    ];

    const getTabClassName = (tabId: string) => {
        const isTabEnabled = tabs.some((t) => t.id === tabId);
        if (!isTabEnabled) return "hidden";

        if (activeTab === tabId) {
            return "block animate-fadeIn";
        } else {
            return "block lg:hidden";
        }
    };

    return (
        <div className="space-y-12">
            {/* Horizontal Tab Bar - Hidden on mobile/tablet, visible on desktop (lg and above) */}
            <div className="hidden lg:block overflow-x-auto scrollbar-none sticky top-20 z-30 py-2">
                <nav className="flex justify-start md:justify-center px-3 py-2 space-x-2 min-w-max bg-[var(--primary-bg)] backdrop-blur-md rounded-2xl border border-[var(--primary-bg)] shadow-sm max-w-fit mx-auto">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-5 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                                    ? "bg-[#3E4095] text-white shadow-sm shadow-indigo-900/15 scale-105"
                                    : "text-[var(--text-1)] hover:text-[var(--text-2)] hover:bg-white/50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Tab Contents - CSS hidden/block display toggle for SEO crawlability */}
            <div className="relative space-y-16 lg:space-y-0">
                <div className={getTabClassName("about-placement")}>
                    <AboutPlacement />
                </div>
                <div className={getTabClassName("placement-activities")}>
                    <PlacementActivities />
                </div>
                <div className={getTabClassName("placement-brochure")}>
                    <PlacementBrochure />
                </div>

                <div className={getTabClassName("placement-status")}>
                    <PlacementStatus />
                </div>
                <div className={getTabClassName("our-recruiters")}>
                    <OurRecruiters />
                </div>
                <div className={getTabClassName("student-verification")}>
                    <StudentVerification />
                </div>
                <div className={getTabClassName("job-fair")}>
                    <JobFair />
                </div>
            </div>
        </div>
    );
}

