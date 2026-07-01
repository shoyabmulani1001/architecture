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

// In this version, each student placement card is represented by a single pre-designed image
// containing the student's portrait, name, company details, package, etc.
const placementData = [
    {
        id: 1,
        name: "Mr. Sahil Kamble",
        // This is the path to the full pre-designed card image
        cardImage: "/placements/Placed-Student-Harshada-B.webp",
    },
    {
        id: 2,
        name: "Ms. Harshada Bhurte",
        cardImage: "/placements/Placed-Student-Samiksha-P.webp",
    },
    {
        id: 3,
        name: "Mr. Mahesh Murkut",
        cardImage: "/placements/Placed-Student-Sahil-K.webp",
    },
    {
        id: 4,
        name: "Ms. Sneha Patil",
        cardImage: "/placements/Placed-Student-Piyush-N.webp",
    },
    {
        id: 5,
        name: "Mr. Rahul Pawar",
        cardImage: "/placements/Placed-Student-Mahesh-M.webp",
    },
];

export default function PlacementSection2() {
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

                {/* Swiper Slider */}
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
                                <div className="relative aspect-square overflow-hidden rounded-[var(--r-btn)] border border-gray-200 bg-[var(--primary-bg)] transition-all duration-500 hover:-translate-y-1 hover:shadow-sm">
                                    {/* Full Card Image */}
                                    <Image
                                        src={item.cardImage}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-750 group-hover:scale-103"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={item.id <= 3}
                                    />
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
