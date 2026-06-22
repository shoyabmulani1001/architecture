import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaClock,
    FaUserGraduate,
    FaBuilding,
    FaAward,
    FaUsers,
    FaDraftingCompass,
    FaGlobe,
} from "react-icons/fa";

const programs = [
    {
        title: "B.Arch",
        subtitle: "Bachelor of Architecture",
        image: "/Home-page/B.Arch.jpg",
        description:
            "A 5-year undergraduate program that builds a strong foundation in design, technology, sustainability and professional practice.",
        duration: "5 Years",
        intake: "80 Seats",
        eligibility: "10+2 PCM",
    },
    {
        title: "M.Arch",
        subtitle: "Master of Architecture",
        image: "/Home-page/M.Arch.jpg",
        description:
            "A 2-year postgraduate program focused on advanced design thinking, research, innovation and specialized architectural practices.",
        duration: "2 Years",
        intake: "20 Seats",
        eligibility: "B.Arch",
    },
];

export default function ProgramsSection() {
    return (
        <section className="py-16 md:py-20 bg-[var(--primary-bg)]">
            <div className="max-w-[1230px] mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-9">
                    <div>
                        {/* <p className="uppercase text-[var(--text-1)] mb-2">
                            Programs Offered
                        </p> */}

                        <h2 className="text-[var(--text-1)] mb-4">
                            Programs Offered.
                        </h2>

                        <p className="text-[var(--text-2)]">
                            Explore our architecture programs crafted to nurture
                            creativity, innovation and leadership.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[var(--r-lg-btn)] border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-[220px]">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-[var(--text-1)]">{program.title}</h3>

                                <p className="text-[var(--text-2)] text-sm mt-1">
                                    {program.subtitle}
                                </p>

                                <div className="w-full h-[1px] bg-slate-300 my-1"></div>

                                <p className="text-[var(--text-2)]">
                                    {program.description}
                                </p>

                                {/* Button */}
                                <Link
                                    href="/programs"
                                    className="inline-flex items-center gap-2 mt-6 text-[var(--primary)] group"
                                >
                                    Explore {program.title}
                                    <FaArrowRight className="group-hover:translate-x-1 transition-all" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}