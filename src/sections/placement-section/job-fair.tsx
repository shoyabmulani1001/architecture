import Image from "next/image";
import { FiBriefcase, FiUsers, FiAward } from "react-icons/fi";

export default function JobFair() {
    const jobFairData = {
        title: "Job Fair 2024",
        date: "January 6, 2024",
        companies: "30+ Companies",

        introduction:
            "On January 6th, 2024, an extensive Job Fair was organized on the campus premises, offering a significant platform for students and job seekers to interact with potential employers. The event aimed to bridge the gap between aspiring professionals and esteemed companies across various sectors.",

        overview:
            "The Job Fair commenced at 9:00 AM and concluded at 5:00 PM, providing ample time for attendees to explore opportunities and engage with recruiters. The venue was meticulously arranged to accommodate the influx of participants and facilitate smooth interactions.",

        companiesDescription:
            "A notable feature of the event was the participation of more than 30 reputed companies representing diverse industries including technology, finance, healthcare, engineering, retail, and consulting. Each organization set up dedicated booths to engage with prospective candidates and showcase available career opportunities.",

        highlights: [
            {
                icon: <FiBriefcase size={24} />,
                title: "Diverse Opportunities",
                description:
                    "Companies from multiple sectors ensured a wide range of career opportunities for students with varied skills and interests.",
            },
            {
                icon: <FiUsers size={24} />,
                title: "Networking Opportunities",
                description:
                    "Students interacted with recruiters, industry professionals, alumni, and peers to build valuable professional connections.",
            },
            {
                icon: <FiAward size={24} />,
                title: "On-the-Spot Interviews",
                description:
                    "Several companies conducted immediate screening and interview rounds, accelerating the recruitment process.",
            },
        ],

        feedback:
            "Feedback from attendees was overwhelmingly positive, with many expressing appreciation for the opportunity to directly interact with recruiters and gain insights into various career paths. The interactive nature of the event facilitated meaningful conversations and allowed participants to showcase their skills and enthusiasm.",

        conclusion:
            "The Job Fair 2024 proved to be a resounding success, serving as a pivotal platform for both job seekers and recruiters. The diverse range of participating companies, coupled with networking opportunities and recruitment activities, made it a valuable experience for all attendees. Such initiatives continue to strengthen the connection between academia and industry while enhancing career prospects for students.",

        images: [
            "/placements/job-fair/Job-Fair-2024-1.webp",
            "/placements/job-fair/Job-Fair-2024-3.webp",
            "/placements/job-fair/Job-Fair-2024-4.webp",
            "/placements/job-fair/Job-Fair-2024-5.webp",
            "/placements/job-fair/Job-Fair-2024-6.webp",
            "/placements/job-fair/Job-Fair-2024-7.webp",
            "/placements/job-fair/Job-Fair-2024-8.webp",
            "/placements/job-fair/Job-Fair-2024-9.webp",
            "/placements/job-fair/Job-Fair-2024-10.webp",
        ],
    };

    return (
        <section className="space-y-10 md:space-y-12">

            {/* Heading */}
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black underline mb-6">
                    Job Fair
                </h2>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 max-w-5xl">
                    Creating opportunities, fostering industry connections,
                    and empowering students through meaningful career interactions.
                </p>
            </div>

            {/* Hero Card */}
            <div className="bg-gradient-to-r from-[#3E4095] to-[#5C5ED2] rounded-3xl p-6 md:p-10 lg:p-14 text-white">

                <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
                    {jobFairData.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                    <div>
                        <p className="opacity-80 mb-1 text-xs md:text-sm">
                            Event Date
                        </p>

                        <h4 className="text-lg md:text-2xl font-semibold">
                            {jobFairData.date}
                        </h4>
                    </div>

                    <div>
                        <p className="opacity-80 mb-1 text-xs md:text-sm">
                            Participation
                        </p>

                        <h4 className="text-lg md:text-2xl font-semibold">
                            {jobFairData.companies}
                        </h4>
                    </div>

                    <div>
                        <p className="opacity-80 mb-1 text-xs md:text-sm">
                            Focus Area
                        </p>

                        <h4 className="text-lg md:text-2xl font-semibold">
                            Career Opportunities
                        </h4>
                    </div>

                </div>

            </div>

            {/* Introduction */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10">

                <h3 className="text-xl md:text-3xl font-semibold text-black mb-4">
                    Introduction
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {jobFairData.introduction}
                </p>

            </div>

            {/* Event Overview */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10">

                <h3 className="text-xl md:text-3xl font-semibold text-black mb-4">
                    Event Overview
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                    {jobFairData.overview}
                </p>

                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {jobFairData.companiesDescription}
                </p>

            </div>

            {/* Highlights */}
            <div>

                <h3 className="text-2xl md:text-4xl font-bold text-black mb-6">
                    Event Highlights
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {jobFairData.highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#3E4095]/10 flex items-center justify-center text-[#3E4095] mb-5">
                                {item.icon}
                            </div>

                            <h4 className="text-xl md:text-2xl font-semibold text-black mb-3">
                                {item.title}
                            </h4>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

            {/* Feedback */}
            <div className="bg-[#F8F9FF] border border-[#D8DDFC] rounded-3xl p-6 md:p-10">

                <h3 className="text-xl md:text-3xl font-semibold text-black mb-4">
                    Attendee Feedback
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {jobFairData.feedback}
                </p>

            </div>

            {/* Photo Gallery */}
            <div>

                <h3 className="text-2xl md:text-4xl font-bold text-black mb-6">
                    Event Gallery
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {jobFairData.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-3xl border border-gray-200 group"
                        >
                            <Image
                                src={image}
                                alt={`Job Fair ${index + 1}`}
                                width={600}
                                height={450}
                                className="w-full h-[200px] md:h-[280px] object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}

                </div>

            </div>

            {/* Conclusion */}
            <div className="bg-[#3E4095] rounded-3xl p-6 md:p-10 lg:p-14 text-white">

                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                    Conclusion
                </h3>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
                    {jobFairData.conclusion}
                </p>

            </div>

        </section>
    );
}