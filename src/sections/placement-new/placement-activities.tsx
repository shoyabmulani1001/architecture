import PlacementActivityTabs from "@/components/placement/placement-activity-tabs";

export default function PlacementActivities() {
    const activities = [
        {
            title: "Industry Expert Sessions",
            description: "...",
            highlights: ["...", "...", "..."],
        },
        {
            title: "Internships",
            description: "...",
            highlights: ["...", "...", "..."],
        },
        {
            title: "Pre-Placement Training",
            description: "...",
            highlights: ["...", "...", "..."],
        },
    ];

    return (
        <section className="space-y-10">
            <div>
                <h2 className="text-[var(--text-1)] mb-6">
                    Placement Activities
                </h2>

                <p className="text-[var(--text-2)] max-w-4xl">
                    Through industry engagement, practical exposure,
                    and professional development initiatives...
                </p>
            </div>

            <PlacementActivityTabs activities={activities} />
        </section>
    );
}