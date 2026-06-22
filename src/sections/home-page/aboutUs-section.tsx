import Image from "next/image";
import Link from "next/link";
import {
    FaCheck,
    FaKeyboard,
    FaUsers,
    FaSearchPlus,
} from "react-icons/fa";

import AboutAccordion from "@/components/home-page/about-us";

export default function AboutUs() {
    const cardsData = [
        {
            id: 1,
            title: "Experiential Learning Pedagogy",
            icon: (
                <FaKeyboard className="text-[var(--primary)] text-xl" />
            ),
            content:
                "DYPSOA aims at molding responsible professionals and laying a strong foundation. We encourage Workshops, Seminars, National & International study tours, site visits, Interaction with prominent Architects, Interdisciplinary subjects.",
        },
        {
            id: 2,
            title: "Esteemed Mentoring Minds",
            icon: (
                <FaUsers className="text-[var(--primary)] text-xl" />
            ),
            content:
                "Faculty at DYPSOA exhibits invaluable experience for students’ pragmatic learning. They create a student-centric environment and are entirely motivated to strengthen the academic & non-academic achievements of students by imparting industry essential knowledge.",
        },
        {
            id: 3,
            title: "Research Excellence",
            icon: (
                <FaSearchPlus className="text-[var(--primary)] text-xl" />
            ),
            content:
                "DYPSOA projects its research excellence through various activities like National Students Conference, on ‘Research in Architecture’, consultancy project, research journal, consultancy projects, etc. under the guidance of a visionary leadership.",
        },
        {
            id: 4,
            title: "DYPSOA Advantage",
            icon: (
                <FaCheck className="text-[var(--primary)] text-xl" />
            ),
            points: [
                "Endless Learning & Growth Opportunities",
                "Holistic Nurturing to Develop as an Innovator",
                "Range of Innovative Teaching and Learning Methods",
                "Supportive Campus Community & State-of-the Art Facilities",
                "Full-Time International Faculty as Mentors",
                "Qualified Faculty Approved by Council of Architecture (COA)",
                "Strong Visiting Faculty Program from Industry & Academics",
                "Flexible, Enriching and Knowledge-oriented Curriculum",
                "International Linkages for Joint Projects with Leading Universities",
                "Industry Live Projects, Internships and Placements",
                "Hands-on Experiential Learning and Real-World Experiences",
                "Studio and Workshop Practice, Critical Reflection & Experimentation",
            ],
        },
    ];

    return (
        <section className="bg-[#f7f5f2] py-20 overflow-hidden">
            <div className="max-w-[1230px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Images */}
                    <div className="relative">

                        <div className="overflow-hidden rounded-[var(--r-lg-btn)] border-[6px] border-white shadow-lg">
                            <Image
                                src="/Home-page/collage.jpeg"
                                alt="Campus"
                                width={700}
                                height={450}
                                className="w-full h-[300px] object-cover"
                            />
                        </div>

                        <div className="overflow-hidden rounded-[var(--r-lg-btn)] border-[6px] border-white shadow-lg mt-8">
                            <Image
                                src="/Home-page/about-std.jpg"
                                alt="Students"
                                width={700}
                                height={450}
                                className="w-full h-[320px] object-cover"
                            />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-40 h-40 flex items-center justify-center shadow-xl">
                                <Image
                                    src="/Logo/logo.png"
                                    alt="DYPSOA"
                                    width={140}
                                    height={140}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Right Content */}
                    <div>

                        <div className="mb-5">
                            <h2 className="text-[var(--text-1)] mb-3">
                                Experience the Difference
                                <br />
                                at DYPSOA
                            </h2>

                            <p className="text-[var(--text-2)]">
                                Founded with a vision of academic excellence,
                                DYPIMED empowers students through innovative
                                education, industry-focused learning, and a
                                commitment to professional growth and success.
                            </p>
                        </div>

                        {/* Accordion */}
                        <AboutAccordion cardsData={cardsData} />

                        {/* Button */}
                        <div className="mt-4 flex justify-center lg:justify-start">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <span
                                    className="text-white"
                                    style={{
                                        fontSize: "var(--body-size)",
                                        lineHeight:
                                            "var(--body-line-height)",
                                        fontWeight:
                                            "var(--font-weight-body)",
                                    }}
                                >
                                    More About Us
                                </span>

                                <span className="text-white">
                                    ✣
                                </span>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}