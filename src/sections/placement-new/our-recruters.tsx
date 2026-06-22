import Image from "next/image";

export default function OurRecruiters() {
    const recruiters = [
        {
            name: "AECOM",
            logo: "/placements/aecom.webp",
        },
        {
            name: "Aedas",
            logo: "/placements/aedas.webp",
        },
        {
            name: "DP Architects",
            logo: "/placements/dpa.webp",
        },
        {
            name: "Nikken Sekkei",
            logo: "/placements/nikken.webp",
        },
        {
            name: "Samoo Architects",
            logo: "/placements/samoo.webp",
        },
        {
            name: "JCB",
            logo: "/placements/jcb.png",
        },
        {
            name: "Studio Nexus Architects",
            logo: "",
        },
        {
            name: "UrbanScape Design",
            logo: "",
        },
        {
            name: "Vision Architects",
            logo: "",
        },
        {
            name: "Skyline Planners",
            logo: "",
        },
        {
            name: "Axis Design Studio",
            logo: "",
        },
        {
            name: "BuildCraft Associates",
            logo: "",
        },
        {
            name: "Habitat Consultants",
            logo: "",
        },
        {
            name: "Forma Architects",
            logo: "",
        },
        {
            name: "Space Matrix Studio",
            logo: "",
        },
        {
            name: "Urban Edge Design",
            logo: "",
        },
        {
            name: "Apex Infrastructure",
            logo: "",
        },
        {
            name: "Blueprint Collective",
            logo: "",
        },
    ];

    const stats = [
        {
            value: "50+",
            label: "Top Design Studios",
        },
        {
            value: "100%",
            label: "Internship Assistance",
        },
        {
            value: "95%",
            label: "Placement Rate",
        },
        {
            value: "30+",
            label: "MOU Collaborations",
        },
    ];

    return (
        <section className="space-y-14">

            {/* Heading */}
            <div>
                <h2 className="text-5xl font-bold text-[var(--text-1)] underline mb-6">
                    Our Prominent Recruiters
                </h2>

                <p className="text-xl leading-9 text-gray-700 max-w-5xl">
                    DYPSOA maintains strong relationships with leading
                    national and international architectural firms, urban planning
                    agencies, construction conglomerates, and interior design studios.
                    These associations provide our students with opportunities for
                    internships, live project experience, and job placements.
                </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-3xl p-8 text-center"
                    >
                        <h3 className="text-5xl font-bold text-[#3E4095] mb-3">
                            {item.value}
                        </h3>

                        <p className="text-[var(--text-1)] font-medium">
                            {item.label}
                        </p>
                    </div>
                ))}

            </div>

            {/* Recruiters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {recruiters.map((company, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-3xl p-8 flex items-center justify-center h-[160px] select-none"
                    >
                        {!company.logo ? (
                            <div className="text-center font-bold tracking-wider text-base text-gray-700 uppercase font-mono px-4">
                                {company.name}
                            </div>
                        ) : (
                            <div className="relative w-full h-20">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>
                ))}

            </div>

            {/* Bottom Content */}
            <div className="bg-gradient-to-r from-[#3E4095] to-[#5658b9] rounded-3xl p-10 lg:p-14 text-white">

                <h3 className="text-4xl font-bold mb-5">
                    Industry Connections That Build Careers
                </h3>

                <p className="text-lg leading-9 opacity-95">
                    Through meaningful industry partnerships and
                    recruiter engagement initiatives, DYPSOA helps
                    students gain practical exposure, professional
                    networking opportunities, and access to diverse
                    career pathways. Our recruiters value innovation,
                    technical competence, and creative problem-solving,
                    making DYPSOA graduates highly sought-after
                    professionals.
                </p>

            </div>

        </section>
    );
}

