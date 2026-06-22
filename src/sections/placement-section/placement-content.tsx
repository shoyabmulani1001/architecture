import AboutPlacement from "./about-placement";
import CareerSupport from "./career-support";
import JobFair from "./job-fair";
import OurRecruiters from "./our-recruters";
import PlacementActivities from "./placement-activities";
import PlacementBrochure from "./placement-brouchers";
import PlacementCommittee from "./placement-committe";
import PlacementStatus from "./placement-status";
import PlacementUpdates from "./placement-update";
import PlacementUpdates1 from "./placement-update1";
import StudentVerification from "./student-verification";

interface PlacementContentProps {
    activeTab: string;
}

export default function PlacementContent({
    activeTab,
}: PlacementContentProps) {
    switch (activeTab) {
        case "about-placement":
            return <AboutPlacement />;

        case "placement-committee":
            return <PlacementCommittee />;

        case "placement-brochure":
            return <PlacementBrochure />;

        case "placement-activities":
            return <PlacementActivities />;

        case "placement-updates1":
            return <PlacementUpdates />;
        // case "placement-updates1":
        //     return <PlacementUpdates1 />;

        case "placement-status":
            return <PlacementStatus />;
        case "our-recruiters":
            return <OurRecruiters />;

        case "student-verification":
            return <StudentVerification />;
        case "job-fair":
            return <JobFair />;
        case "career-support":
            return <CareerSupport />;


        default:
            return (
                <div className="bg-white p-10 rounded-xl shadow">
                    <h2 className="text-3xl font-bold">
                        Coming Soon
                    </h2>
                </div>
            );
    }
}