"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

interface CampusLifeSliderProps {
    slides: string[];
}

export default function CampusLifeSlider({
    slides,
}: CampusLifeSliderProps) {
    return (
        <div className="relative">

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: ".campus-prev",
                    nextEl: ".campus-next",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {slides.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[350px] rounded-[var(--r-lg-btn)] overflow-hidden">
                            <Image
                                src={image}
                                alt={`Campus Life ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="campus-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center cursor-pointer">
                <FaChevronLeft />
            </button>

            <button className="campus-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center cursor-pointer">
                <FaChevronRight />
            </button>

        </div>
    );
}