"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { HiOutlineBuildingOffice2, HiOutlineMusicalNote, HiOutlineComputerDesktop, HiOutlineSparkles } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const lifeData = [
    {
        id: 1,
        title: "Freshers Day",
        icon: <HiOutlineBuildingOffice2 size={24} />,
        image: "/Home-page/Freshers-day-1.webp",
        description:
            "Celebrate Indian traditions by wearing cultural attire and sharing memorable moments with the DYPSOA family.",
    },
    {
        id: 2,
        title: "Founder's Day",
        icon: <HiOutlineMusicalNote size={24} />,
        image: "/Home-page/founders-day-1.jpg",
        description:
            "Experience music, dance, drama and performances that showcase creativity and student talent.",
    },
    {
        id: 3,
        title: "Farewell Fest",
        icon: <HiOutlineComputerDesktop size={24} />,
        image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
        description:
            "Coding competitions, AI workshops, robotics and innovation challenges for future architects.",
    },
    {
        id: 4,
        title: "Cultural Day",
        icon: <HiOutlineSparkles size={24} />,
        image: "/Home-page/culturals-day-2.jpg",
        description:
            "Welcome the new batch with fun games, cultural performances and unforgettable campus memories.",
    },
    {
        id: 5,
        title: "Sports Week",
        icon: <HiOutlineSparkles size={24} />,
        image: "/Home-page/sports-day-11.jpeg",
        description:
            "Exciting indoor and outdoor competitions promoting teamwork, fitness and sportsmanship.",
    },
];

export default function LifeAtDYPSOA() {
    return (
        <section className="relative overflow-hidden py-12 lg:py-16 bg-[var(--primary-bg)]">
            {/* Background Glow */}


            <div className="max-w-7xl mx-auto px-5">

                {/* Section Heading */}

                <div className="max-w-3xl mx-auto text-center mb-9">
                    <h2 className="text-[var(--text-1)] mb-4">
                        Life @ DYPSOA
                    </h2>

                    <p className="text-[var(--text-2)] max-w-2xl mx-auto">
                        Discover memorable experiences, vibrant celebrations,
                        student activities and unforgettable campus moments that
                        make life at DYPSOA exciting every single day.
                    </p>

                </div>



                {/* Swiper Starts in Part 2 */}

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".life-prev",
                        nextEl: ".life-next",
                    }}
                    spaceBetween={28}
                    loop
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 22,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 28,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {lifeData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="group h-full pt-10 pb-3">

                                {/* Card */}

                                <div className="relative h-full rounded-[var(--r-btn)] overflow-visible bg-[var(--primary-bg)] border border-gray-200  hover:shadow-sm">

                                    {/* Image */}

                                    <div className="relative h-48 overflow-hidden rounded-t-[var(--r-btn)]">

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Overlay */}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

                                    </div>

                                    {/* Floating Icon */}

                                    <div className="absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2">

                                        <div className="w-14 h-14 rounded-full bg-[var(--primary-bg)] border border-[var(--border-color)] shadow-lg flex items-center justify-center text-[var(--primary)] ">

                                            {item.icon}

                                        </div>

                                    </div>

                                    {/* Content */}

                                    <div className="pt-10 px-6 pb-6 text-center">

                                        <h4 className="text-[var(--text-1)] mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">

                                            {item.title}

                                        </h4>

                                        {/* Small Accent Line */}

                                        <div className="w-14 h-[2px] bg-[var(--primary)] mx-auto mb-3 opacity-70"></div>

                                        <p className="text-[var(--text-2)] line-clamp-3">

                                            {item.description}

                                        </p>

                                    </div>

                                    {/* Hover Border */}

                                    {/* <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[var(--primary)]/30 transition-all duration-500 pointer-events-none" /> */}

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-end mt-4">
                    <div className="flex gap-2">
                        <button className="life-prev w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronLeft />
                        </button>

                        <button className="life-next w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}