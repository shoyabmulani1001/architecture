"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const placementData = [
    {
        id: 1,
        name: "Mr. Sahil Kamble",
        company: "UNIKAIHATSU SOFTWARE Pvt. Ltd.",
        role: "Software Engineer",
        package: "₹6.5 LPA",
        image: "/placements/BArch5.jpg",
        logo: "/Logo/full-logo.jpeg",
    },
    {
        id: 2,
        name: "Ms. Harshada Bhurte",
        company: "Interface 11",
        role: "UI/UX Designer",
        package: "₹5.2 LPA",
        image: "/placements/BArch6.jpg",
        logo: "/Logo/full-logo.jpeg",
    },
    {
        id: 3,
        name: "Mr. Mahesh Murkut",
        company: "Indimart Ltd.",
        role: "Marketing Executive",
        package: "₹4.8 LPA",
        image: "/placements/BArch9.jpg",
        logo: "/Logo/full-logo.jpeg",
    },
    {
        id: 4,
        name: "Ms. Sneha Patil",
        company: "Infosys",
        role: "System Engineer",
        package: "₹7.0 LPA",
        image: "/placements/BArch10.jpg",
        logo: "/Logo/full-logo.jpeg",
    },
    {
        id: 5,
        name: "Mr. Rahul Pawar",
        company: "TCS",
        role: "Software Developer",
        package: "₹6.8 LPA",
        image: "/placements/MArch1.jpg",
        logo: "/Logo/full-logo.jpeg",
    },
];

export default function PlacementSection() {
    return (
        <section className="relative overflow-hidden py-12 lg:py-16 bg-[var(--primary-bg)]">

            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[var(--primary)]/5 blur-[150px]" />

            </div>

            <div className="max-w-[1230px] mx-auto px-5">

                {/* Section Heading */}

                <div className="text-center max-w-3xl mx-auto mb-9">
                    <h2 className="text-[var(--text-1)] mb-4">

                        Our <span className="text-[var(--primary)]">Placement</span> Success

                    </h2>

                    <p className="text-[var(--text-2)] max-w-2xl mx-auto">

                        Celebrating the achievements of our talented students who have
                        secured placements in leading organizations through campus recruitment.

                    </p>

                </div>

                {/* Swiper Starts in Part 2 */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".placement-prev",
                        nextEl: ".placement-next",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {placementData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="group pb-12">

                                <div className="relative overflow-hidden rounded-[var(--r-btn)] bg-[var(--primary-bg)] border border-gray-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-sm">

                                    {/* Decorative Corner */}

                                    <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-gradient-to-bl from-[var(--primary)] via-[var(--primary)]/60 to-transparent opacity-20"></div>

                                    {/* Institute Logo */}

                                    <div className="absolute top-5 left-5 z-20">
                                        <Image
                                            src={item.logo}
                                            alt="Institute Logo"
                                            width={150}
                                            height={45}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Student Image */}
                                    <div className="pt-14 flex justify-center">
                                        <div className="relative">
                                            <div className="relative w-36 h-36 rounded-full border-4 border-[var(--primary)] overflow-hidden bg-white shadow-sm">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            {/* Gold Dots */}
                                            <span className="absolute left-0 top-1/2 -translate-x-3 w-2 h-2 rounded-full bg-[var(--primary)]" />
                                            <span className="absolute right-0 top-1/2 translate-x-3 w-2 h-2 rounded-full bg-[var(--primary)]" />
                                        </div>
                                    </div>

                                    {/* Gold Ribbon */}
                                    <div className="relative -mt-4 flex justify-center z-20">
                                        <div className="relative bg-[var(--primary)] px-6 py-1.5 text-white font-medium uppercase text-xs tracking-wide shadow-sm">
                                            {item.name}
                                            <span className="absolute left-[-14px] top-0 border-y-[13px] border-r-[14px] border-y-transparent border-r-[var(--primary)]" />
                                            <span className="absolute right-[-14px] top-0 border-y-[13px] border-l-[14px] border-y-transparent border-l-[var(--primary)]" />
                                        </div>
                                    </div>

                                    {/* Congratulations */}
                                    <div className="text-center px-6 mt-2 pb-4">
                                        <h3
                                            className="text-[var(--text-1)]"
                                            style={{ fontFamily: "cursive" }}
                                        >
                                            Congratulations!
                                        </h3>

                                        <div className="flex justify-center gap-1.5 mt-2 mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                                        </div>

                                        <p className="text-[var(--text-2)]">
                                            Selected as <strong>{item.role}</strong>
                                            <br />
                                            at <strong>{item.company}</strong>
                                        </p>

                                        {/* Package */}
                                        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--secondary-bg)] border border-gray-200 px-4 py-1.5">
                                            <span className="uppercase text-[var(--text-2)]">
                                                Package
                                            </span>
                                            <span className="text-[var(--primary)]">
                                                {item.package}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Decorative Dots */}

                                    <div className="absolute bottom-0 right-0 h-36 w-36 opacity-20">

                                        <svg
                                            viewBox="0 0 120 120"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {Array.from({ length: 9 }).map((_, row) =>
                                                Array.from({ length: 9 }).map((_, col) => (
                                                    <circle
                                                        key={`${row}-${col}`}
                                                        cx={10 + col * 12}
                                                        cy={10 + row * 12}
                                                        r="1.4"
                                                        fill="currentColor"
                                                    />
                                                ))
                                            )}
                                        </svg>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Navigation Buttons */}
                <div className="flex justify-end mt-2">
                    <div className="flex gap-2">
                        <button className="placement-prev w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronLeft />
                        </button>
                        <button className="placement-next w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}