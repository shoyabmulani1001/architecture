"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Placement {
    name: string;
    course: string;
    batch: string;
    image: string;
    companyLogo: string;
    featured: boolean;
}

interface PlacementSliderProps {
    placements: Placement[];
}

export default function PlacementSlider({
    placements,
}: PlacementSliderProps) {
    return (
        <div className="relative w-full">

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".placement-prev",
                    nextEl: ".placement-next",
                }}
                pagination={{
                    clickable: true,
                    el: ".placement-pagination",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="w-full"
            >
                {placements.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!h-auto"
                    >
                        <div className="bg-[var(--primary-bg)] rounded-[var(--r-btn)] border border-[var(--card-border)] hover:shadow-sm transition-all duration-300 h-full">

                            {/* Image */}
                            <div className="relative rounded-[var(--r-btn)] aspect-square overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />

                                {item.featured && (
                                    <div className="absolute top-4 left-4 w-3 h-3 rounded-[var(--r-btn)] bg-[var(--primary)]" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="px-5 py-4">
                                <h6 className="text-[var(--text-1)]">
                                    {item.name}
                                </h6>

                                <p className="text-[var(--text-2)] mt-1">
                                    {item.course}
                                </p>
                            </div>

                            {/* Company */}
                            <div className="border-t border-[var(--card-border)] px-5 py-3 flex items-center justify-between">

                                <span className="text-[var(--text-2)] uppercase">
                                    Placed At
                                </span>

                                <div className="h-[30px] w-[100px] flex items-center justify-end">
                                    <img
                                        src={item.companyLogo}
                                        alt="Company Logo"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">

                <div className="placement-pagination flex items-center gap-2" />

                <div className="flex items-center gap-2">

                    <button className="placement-prev w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <FaChevronLeft
                            size={14}
                            className="text-[var(--text-1)]"
                        />
                    </button>

                    <button className="placement-next w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <FaChevronRight
                            size={14}
                            className="text-[var(--text-1)]"
                        />
                    </button>

                </div>

            </div>
        </div>
    );
}