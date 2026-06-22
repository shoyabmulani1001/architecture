const placementLinks = [
    {
        title: "About Placement",
        href: "#about-placement",
    },
    {
        title: "Placement Committee",
        href: "#placement-committee",
    },
    {
        title: "Career Support",
        href: "#career-support",
    },
    {
        title: "Placement Activities",
        href: "#placement-activities",
    },
    {
        title: "Placement Brochure",
        href: "#placement-brochure",
    },
    {
        title: "Placement Updates",
        href: "#placement-updates1",
    },
    // {
    //     title: "Placement Updates1",
    //     href: "#placement-updates1",
    // },
    {
        title: "Placement Status",
        href: "#placement-status",
    },
    {
        title: "Our Recruiters",
        href: "#our-recruiters",
    },
    {
        title: "Student Verification",
        href: "#student-verification",
    },
    {
        title: "Job Fair",
        href: "#job-fair",
    },
];

export default function PlacementSidebar() {
    return (
        <aside className="sticky top-32 h-fit">
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

                <div className="bg-[var(--primary-bg)] p-6">
                    <h4 className="text-[var(--text-1)]">
                        Placements
                    </h4>
                </div>

                <nav>
                    {placementLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block px-6 py-3 text-black border-b border-gray-100 hover:bg-[#3E4095] hover:text-white transition-all duration-300"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

            </div>
        </aside>
    );
}