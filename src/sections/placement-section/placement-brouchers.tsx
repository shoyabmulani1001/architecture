import { FiDownload, FiArrowRight, FiFileText, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

export default function PlacementBrochure() {
    const brochures = [
        {
            degree: "Bachelor of Architecture (B.Arch)",
            shortDesc: "Official placement guide for the 5-year B.Arch program detailing design studios, construction tech projects, and the mandatory 16-week professional internship portfolio.",
            link: "/brochures/dypsoa-barch-placement-brochure.pdf",
            stats: "5-Year UG Program",
        },
        {
            degree: "Master of Architecture (M.Arch)",
            shortDesc: "Official placement guide for the 2-year M.Arch program detailing advanced research thesis portfolios, urban design layouts, and environmental architecture projects.",
            link: "/brochures/dypsoa-march-placement-brochure.pdf",
            stats: "2-Year PG Program",
        }
    ];

    const quickStats = [
        { icon: <FiUsers className="text-[#3E4095]" size={24} />, value: "100%", label: "Placement Assistance" },
        { icon: <FiAward className="text-[#3E4095]" size={24} />, value: "150+", label: "Industry Partners" },
        { icon: <FiTrendingUp className="text-[#3E4095]" size={24} />, value: "16 Weeks", label: "Mandatory Internships" },
    ];

    return (
        <section className="space-y-10 animate-fadeIn">

            {/* Header */}
            <div className="border-b border-gray-100 pb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                    Placement Brochure
                </h2>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 max-w-4xl">
                    Access our official placement brochures for the current academic year. Recruiters can explore curriculum outcomes, students' portfolios, and past internship profiles for both our undergraduate and postgraduate cohorts.
                </p>
            </div>

            {/* Quick Placement Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {quickStats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white border border-gray-150 rounded-2xl p-5 shadow-sm">
                        <div className="p-3 bg-indigo-50 rounded-xl">
                            {stat.icon}
                        </div>
                        <div>
                            <div className="text-lg md:text-xl font-bold text-black">{stat.value}</div>
                            <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Compact Cards Grid (Stack on mobile, rows on larger screens) */}
            <div className="space-y-5">
                {brochures.map((brochure, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition">
                        <div className="flex items-start gap-4">
                            <div className="p-3 md:p-4 bg-indigo-50 rounded-xl text-[#3E4095] shrink-0">
                                <FiFileText size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="inline-block text-xs font-semibold text-[#3E4095] tracking-wide uppercase">
                                    {brochure.stats}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-black">
                                    {brochure.degree}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm max-w-2xl leading-relaxed">
                                    {brochure.shortDesc}
                                </p>
                            </div>
                        </div>

                        <Link
                            href={brochure.link}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 bg-[#3E4095] text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-[#34367f] transition shrink-0"
                        >
                            <FiDownload size={16} />
                            Download Brochure
                        </Link>
                    </div>
                ))}
            </div>

            {/* Info and CTA Split Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">

                {/* Additional Placement Details */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                        Recruitment & Placement Process
                    </h3>
                    <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                        <p>
                            DYPSOA offers a streamlined recruitment process designed to match the specific needs of design firms and developers with our highly-skilled students. Our training and placement office provides extensive workspace, digital presentation tools, and coordination support for recruitment sessions.
                        </p>
                        <p>
                            Through our dedicated portfolio presentation sessions, recruiters can access design portfolios, working drawings, thesis details, and academic transcripts directly.
                        </p>
                    </div>
                </div>

                {/* Recruiter Relations CTA */}
                <div className="bg-[#3E4095] rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between gap-6">
                    <div>
                        <span className="text-xs uppercase tracking-wider opacity-85 font-bold">
                            Recruiter Relations
                        </span>

                        <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4">
                            Connect with Our Talent
                        </h3>

                        <p className="text-xs md:text-sm leading-relaxed opacity-90">
                            Are you looking to hire innovative minds, skilled designers, and dedicated professionals for your practice or firm? Partner with us today.
                        </p>
                    </div>

                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center gap-2 bg-white text-[#3E4095] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition w-full lg:w-auto"
                    >
                        Contact Placement Cell
                        <FiArrowRight />
                    </Link>
                </div>

            </div>

        </section>
    );
}