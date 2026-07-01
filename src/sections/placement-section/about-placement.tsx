import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutPlacement() {
    const placementData = {
        coordinator: {
            name: "Dr. Aditi Garg",
            designation: "Architexture TPO",
            experience: "6 Years",
            image: "/faculty/Aditi-Garg.webp",
        },

        title:
            "Training & Placement Cell – Building Careers with Purpose",

        description: [
            "At DYPSOA, the Training & Placement Cell serves as a central pillar in preparing students to become industry-ready professionals. Through a strategic blend of academic rigor, corporate exposure, and skill development initiatives, we ensure that our students confidently meet the evolving demands of today's competitive global market.",

            "Our Cell operates with a structured approach that includes industry-oriented training programs, communication and leadership development sessions, guest lectures, management activities, live projects, and continuous mentorship. By fostering long-standing associations with leading organizations and leveraging a strong alumni network, we create impactful opportunities for internships and final placements across diverse sectors.",
        ],

        aimTitle: "Aim of Training & Placement Cell",

        aims: [
            "To provide 100% placement support to aspirants by offering training, dedicated resources and best career opportunities.",

            "To enhance the employability skills of students, enabling them to perform effectively in corporate environments.",

            "To prepare aspirants to meet dynamic corporate expectations and professional standards.",

            "To strengthen industry–academia partnerships and encourage alumni involvement for knowledge sharing and growth.",

            "To help each student acquire new skills, refine existing capabilities, and evolve into a confident, competent, and future-ready professional.",
        ],

        conclusion:
            "We take pride in our consistent placement successes and our commitment to excellence. Through focused training, dynamic leadership, and value-driven guidance, the Training & Placement Cell at DYPSOA remains unwavering in its mission—empowering students not only to secure rewarding opportunities but to build impactful, sustainable careers.",
    };

    return (
        <section>
            <div className="space-y-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10 lg:gap-12">

                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-fit border border-gray-200 max-w-sm mx-auto md:max-w-none w-full">
                        <Image
                            src={placementData.coordinator.image}
                            alt={placementData.coordinator.name}
                            width={400}
                            height={500}
                            className="w-full h-[280px] object-cover"
                        />

                        <div className="p-5 md:p-7">
                            <h6 className="text-[var(--text-1)] mb-2 font-bold">
                                {placementData.coordinator.name}
                            </h6>

                            <p className="text-base md:text-lg text-[var(--text-1)]">
                                {placementData.coordinator.designation}
                            </p>

                            <p className="text-base md:text-lg text-[var(--text-1)] mt-1">
                                Experience - {placementData.coordinator.experience}
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-4">
                        <h4 className="text-[var(--text-1)] font-bold text-2xl md:text-3xl mb-4">
                            {placementData.title}
                        </h4>

                        {placementData.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[var(--text-1)] leading-relaxed text-sm md:text-base"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Aim Section */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-1)] mb-6">
                        {placementData.aimTitle}
                    </h3>

                    <div className="space-y-4">
                        {placementData.aims.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <FaCheckCircle
                                    size={18}
                                    className="text-[var(--primary)] mt-1.5 shrink-0"
                                />

                                <p className="text-[var(--text-1)] text-sm md:text-base leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-[var(--text-1)] text-sm md:text-base leading-relaxed">
                        {placementData.conclusion}
                    </p>
                </div>
            </div>
        </section>
    );
}