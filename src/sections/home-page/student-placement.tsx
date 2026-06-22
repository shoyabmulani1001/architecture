import PlacementSlider from "@/components/home-page/placement";

export default function StudentPlacements() {
    const placements = [
        {
            name: "Aarav Sharma",
            course: "M.Arch",
            batch: "2026",
            image: "/placements/placement-1.png",
            companyLogo: "/placements/jcb.png",
            featured: true,
        },
        {
            name: "Alif Shaikh",
            course: "M.Arch",
            batch: "2025",
            image: "/placements/placement-2.png",
            companyLogo: "/placements/aecom.webp",
            featured: true,
        },
        {
            name: "Shreyank Parab",
            course: "B.Arch",
            batch: "2025",
            image: "/placements/placement-3.png",
            companyLogo: "/placements/dpa.webp",
            featured: false,
        },
        {
            name: "Rahul Verma",
            course: "M.Arch",
            batch: "2025",
            image: "/placements/placement-1.png",
            companyLogo: "/placements/costco.png",
            featured: false,
        },
        {
            name: "Priyanka Patel",
            course: "B.Arch",
            batch: "2026",
            image: "/placements/placement-2.png",
            companyLogo: "/placements/aecom.webp",
            featured: false,
        },
        {
            name: "Rohan Deshmukh",
            course: "M.Arch",
            batch: "2025",
            image: "/placements/placement-3.png",
            companyLogo: "/placements/aecom.webp",
            featured: false,
        },
    ];

    return (
        <section className="bg-[var(--primary-bg)] py-20 overflow-hidden">
            <div className="max-w-[1230px] mx-auto px-6 lg:px-8">

                <div className="text-center mb-9">
                    <h2 className="mb-4 text-[var(--text-1)]">
                        Student Placements
                    </h2>

                    <p className="max-w-2xl mx-auto text-[var(--text-2)]">
                        Celebrating our students who transformed their education
                        into successful careers with top companies.
                    </p>
                </div>

                <PlacementSlider placements={placements} />

            </div>
        </section>
    );
}