import {
    FiBriefcase,
    FiUsers,
    FiFileText,
    FiMessageSquare,
    FiTrendingUp,
} from "react-icons/fi";

export default function CareerSupport() {
    const services = [
        {
            icon: <FiBriefcase size={28} />,
            title: "Placement Assistance",
            description:
                "Dedicated support for internships, campus placements, and career opportunities through industry partnerships.",
        },
        {
            icon: <FiFileText size={28} />,
            title: "Resume Building",
            description:
                "Professional guidance to create impactful resumes and portfolios that highlight academic and practical achievements.",
        },
        {
            icon: <FiMessageSquare size={28} />,
            title: "Interview Preparation",
            description:
                "Mock interviews, aptitude preparation, and communication skill development to build confidence.",
        },
        {
            icon: <FiUsers size={28} />,
            title: "Industry Mentorship",
            description:
                "Learn from experienced professionals through mentoring sessions, workshops, and expert talks.",
        },
        {
            icon: <FiTrendingUp size={28} />,
            title: "Career Guidance",
            description:
                "Personalized career counseling to help students identify suitable career paths and opportunities.",
        },
    ];

    const process = [
        "Skill Assessment",
        "Career Planning",
        "Training & Workshops",
        "Industry Interaction",
        "Placements & Career Growth",
    ];

    return (
        <section className="space-y-16">

            {/* Header */}
            <div>
                <h2 className=" text-text-[var(--text-1)] mb-6">
                    Career Support
                </h2>

                <p className="text-[var(--text-2)]  max-w-5xl">
                    At DYPSOA, we are committed to helping students
                    transform their academic journey into successful
                    professional careers through comprehensive career
                    development and placement support initiatives.
                </p>
            </div>

            {/* Overview */}
            <div className="bg-[var(--primary-bg)] border border-gray-200 rounded-3xl p-10 shadow-sm">

                <h3 className="text-text-[var(--text-1)] mb-5">
                    Empowering Future Professionals
                </h3>

                <p className="text-[var(--text-2)]  max-w-5xl">
                    Our Career Support Cell works closely with students,
                    industry experts, recruiters, and alumni to provide
                    guidance, training, and opportunities that prepare
                    students for the evolving demands of the professional
                    world. From resume development to placement
                    preparation, we ensure students receive holistic
                    support throughout their career journey.
                </p>

            </div>

            {/* Services */}
            <div>

                <h3 className="text-text-[var(--text-1)] mb-8">
                    Career Support Services
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[var(--primary-bg)] border border-gray-200 rounded-3xl p-8 hover:shadow-md transition"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-5">
                                {service.icon}
                            </div>

                            <h4 className="text-text-[var(--text-1)] mb-4">
                                {service.title}
                            </h4>

                            <p className="text-[var(--text-2)] ">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

            {/* Career Path */}
            <div>

                <h3 className="text-4xl font-bold text-text-[var(--text-1)] mb-8">
                    Career Development Journey
                </h3>

                <div className="grid md:grid-cols-5 gap-4">

                    {process.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F9FF] border border-[#D8DDFC] rounded-2xl p-6 text-center"
                        >
                            <span className="text-[#3E4095] text-sm font-semibold">
                                STEP {index + 1}
                            </span>

                            <h4 className="mt-3 text-lg font-semibold text-text-[var(--text-1)]">
                                {step}
                            </h4>
                        </div>
                    ))}

                </div>

            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#3E4095] to-[#5A5CC7] rounded-3xl p-12 text-white">

                <h3 className="text-4xl font-bold mb-5">
                    Start Building Your Career Today
                </h3>

                <p className="text-lg leading-9 max-w-4xl opacity-90 mb-8">
                    Gain access to career guidance, placement support,
                    industry mentorship, and professional development
                    opportunities that help you achieve your goals.
                </p>

                <a
                    href="/contact-us"
                    className="inline-flex items-center bg-[var(--primary-bg)] text-[#3E4095] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                    Connect With Us
                </a>

            </div>

        </section>
    );
}