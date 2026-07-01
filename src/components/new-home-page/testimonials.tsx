"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        id: 1,
        name: "Omkar Randhave",
        course: "B.Arch • Final Year",
        batch: "Batch of 2025",
        image: "/Home-page/Testimonial-Omkar-R.webp",
        review:
            "DYPSOA has been a transformative experience. The faculty guidance, studio culture, and hands-on learning approach helped me discover my passion for architecture and become a confident designer.",
    },
    {
        id: 2,
        name: "Shatakshi Shah",
        course: "B.Arch • Third Year",
        batch: "Batch of 2026",
        image: "/Home-page/Testimonial-Shatakshi-S.webp",
        review:
            "The collaborative studio environment and real-world design projects prepared me for professional practice. Every semester gave me new opportunities to learn and grow.",
    },
    {
        id: 3,
        name: "Harsh Bardapurkar",
        course: "M.Arch • First Year",
        batch: "Batch of 2025",
        image: "/Home-page/Testimonial-Harsh-B.webp",
        review:
            "From workshops to site visits, DYPSOA provided exposure beyond the classroom. It shaped my design thinking and helped me build confidence in architectural research.",
    },
    {
        id: 4,
        name: "Tanu Kulkarni",
        course: "B.Arch • Fourth Year",
        batch: "Batch of 2024",
        image: "/Home-page/Testimonial-Tanu-K.webp",
        review:
            "The mentorship from faculty and opportunities to participate in national competitions motivated me to explore sustainable and innovative architectural solutions.",
    },
    {
        id: 5,
        name: "Omkar Randhave",
        course: "B.Arch • Final Year",
        batch: "Batch of 2025",
        image: "/Home-page/Testimonial-Omkar-R.webp",
        review:
            "DYPSOA has been a transformative experience. The faculty guidance, studio culture, and hands-on learning approach helped me discover my passion for architecture and become a confident designer.",
    },
    {
        id: 6,
        name: "Shatakshi Shah",
        course: "B.Arch • Third Year",
        batch: "Batch of 2026",
        image: "/Home-page/Testimonial-Shatakshi-S.webp",
        review:
            "The collaborative studio environment and real-world design projects prepared me for professional practice. Every semester gave me new opportunities to learn and grow.",
    },
    {
        id: 7,
        name: "Harsh Bardapurkar",
        course: "M.Arch • First Year",
        batch: "Batch of 2025",
        image: "/Home-page/Testimonial-Harsh-B.webp",
        review:
            "From workshops to site visits, DYPSOA provided exposure beyond the classroom. It shaped my design thinking and helped me build confidence in architectural research.",
    },
    {
        id: 8,
        name: "Tanu Kulkarni",
        course: "B.Arch • Fourth Year",
        batch: "Batch of 2024",
        image: "/Home-page/Testimonial-Tanu-K.webp",
        review:
            "The mentorship from faculty and opportunities to participate in national competitions motivated me to explore sustainable and innovative architectural solutions.",
    },
];

export default function StudentTestimonials() {
    return (
        <section className="relative overflow-hidden bg-[var(--primary-bg)] py-12 lg:py-16">
            {/* Decorative Architecture Background */}
            <div className="absolute right-0 bottom-0 opacity-[0.08] pointer-events-none hidden lg:block">
                <svg
                    width="620"
                    height="350"
                    viewBox="0 0 620 350"
                    fill="none"
                >
                    <path
                        d="M60 310H560V160L420 70L280 150L140 90L60 150V310Z"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <path d="M140 310V90" stroke="currentColor" strokeWidth="1" />
                    <path d="M280 310V150" stroke="currentColor" strokeWidth="1" />
                    <path d="M420 310V70" stroke="currentColor" strokeWidth="1" />
                    <path d="M60 230H560" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>

            <div className="max-w-[1230px] mx-auto px-5">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-9">
                    <div>
                        {/* <p className="uppercase tracking-[4px] text-[var(--primary)] text-sm mb-3">
                            Student Voices
                        </p> */}

                        <h2 className="text-[var(--text-1)] mb-4">
                            Student Testimonials
                        </h2>

                        <p className="text-[var(--text-2)] max-w-xl">
                            Hear from our students about their learning journey,
                            studio culture, practical exposure, and life at DYPSOA.
                        </p>
                    </div>

                    <div className="mt-4 lg:mt-0">
                        <button className="group flex items-center gap-3 text-[var(--text-1)] hover:text-[var(--primary)] transition cursor-pointer">
                            <span className="w-11 h-11 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                                <HiArrowLongRight />
                            </span>

                            <span className="">
                                More Student Stories
                            </span>
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: ".testimonials-prev",
                        nextEl: ".testimonials-next",
                    }}
                    spaceBetween={24}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },
                        640: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className="!h-auto flex">
                            <div className="bg-[var(--primary-bg)] border border-[var(--border-color)] rounded-[var(--r-btn)] p-5 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-sm group flex flex-col justify-between w-full">
                                <div>
                                    <RiDoubleQuotesL
                                        size={32}
                                        className="text-[var(--primary)] opacity-70 mb-2"
                                    />

                                    <p className="text-[var(--text-2)] mb-4 line-clamp-4">
                                        {item.review}
                                    </p>
                                </div>

                                <div className="border-t border-[var(--border-color)] pt-4 flex items-center justify-between gap-4">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border border-[var(--border-color)] flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="text-right">
                                        <h5 className="text-[var(--text-1)]">
                                            {item.name}
                                        </h5>

                                        <p className="text-[var(--primary)] mt-0.5">
                                            {item.course}
                                        </p>

                                        <p className="text-[var(--text-2)]">
                                            {item.batch}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-end mt-4">
                    <div className="flex gap-2">
                        <button className="testimonials-prev w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronLeft />
                        </button>

                        <button className="testimonials-next w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}