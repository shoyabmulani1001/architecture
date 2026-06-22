"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    rating: number;
    imgUrl: string;
}

interface TestimonialSliderProps {
    testimonials: Testimonial[];
}

export default function TestimonialSlider({
    testimonials,
}: TestimonialSliderProps) {
    return (
        <div className="relative">

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".testimonial-prev",
                    nextEl: ".testimonial-next",
                }}
                pagination={{
                    clickable: true,
                    el: ".testimonial-pagination",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id} className="!h-auto">

                        <div className="bg-[var(--secondary-bg)] border border-[var(--card-border)] rounded-[var(--r-lg-btn)] p-8 h-full">

                            <div className="flex justify-between items-start mb-6">

                                <div className="relative w-24 h-24 overflow-hidden rounded-tl-[var(--r-lg-btn)] rounded-br-[var(--r-lg)]">
                                    <Image
                                        src={item.imgUrl}
                                        alt={item.name}
                                        fill
                                        sizes="96px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <FaRegStar
                                            key={i}
                                            className="fill-[var(--primary)] text-[var(--primary)]"
                                        />
                                    ))}
                                </div>

                            </div>

                            <p className="text-[var(--text-2)] mb-8">
                                "{item.text}"
                            </p>

                            <div>
                                <h6 className="text-[var(--text-1)]">
                                    {item.name}
                                </h6>

                                <p className="text-[var(--text-2)]">
                                    {item.role}
                                </p>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex items-center justify-between mt-8">

                <div className="testimonial-pagination"></div>

                <div className="flex gap-2">

                    <button className="testimonial-prev w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer">
                        <FaChevronLeft className="text-[var(--text-1)]" />
                    </button>

                    <button className="testimonial-next w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer">
                        <FaChevronRight className="text-[var(--text-1)]" />
                    </button>

                </div>

            </div>

        </div>
    );
}