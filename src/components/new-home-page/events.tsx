"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/navigation";

const events = [
    {
        id: 1,
        title: 'Research & Innovation Expo',
        location: 'DYPSOA Convention Hall',
        time: '09:45 AM – End',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: '/Home-page/culturals-day-2.jpg', // Replace with your actual image paths
    },
    {
        id: 2,
        title: 'Alumni Talk Series',
        location: 'DYPSOA Convention Hall',
        time: '11:45 AM – End',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: '/Home-page/Freshers-day-1.webp',
    },
    {
        id: 3,
        title: 'Internship & Job Placement',
        location: 'DYPSOA Convention Hall',
        time: '10:45 AM – End',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: '/Home-page/founders-day-1.jpg',
    },
    {
        id: 4,
        title: 'Student Talent Show',
        location: 'DYPSOA Convention Hall',
        time: '09:45 AM – End',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: '/Home-page/Farewell-Ceremony-Studio-19.webp',
    },
];

export default function UpcomingEvents() {
    return (
        <section className="bg-white font-sans py-12 lg:py-16">
            <div className="max-w-[1230px] mx-auto px-5">

                {/* Header Section */}
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-6 mb-9">
                    <h2 className="text-[var(--text-1)]">
                        Upcoming Events<span className="text-[var(--primary)]">.</span>
                    </h2>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-[var(--primary)] hover:opacity-80 transition-opacity uppercase"
                    >
                        See All Events
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H8V10h3V7h2v3h3v2h-3v4z" className="hidden" />
                            <circle cx="12" cy="12" r="10" className="fill-[var(--primary)]" />
                            <path d="M10 16l4-4-4-4v8z" className="fill-white" />
                        </svg>
                    </a>
                </div>

                {/* Events Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: ".events-prev",
                        nextEl: ".events-next",
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
                    className="w-full"
                >
                    {events.map((event) => (
                        <SwiperSlide key={event.id} className="!h-auto flex">
                            <div className="group h-full pb-3 w-full">
                                <div className="relative h-full rounded-[var(--r-btn)] overflow-hidden bg-[var(--primary-bg)] border border-gray-200 hover:shadow-sm flex flex-col justify-between">
                                    {/* Image */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col justify-between flex-1 text-left">
                                        <div>
                                            <h5 className="text-[var(--text-1)] mb-2 font-semibold">
                                                {event.title}
                                            </h5>

                                            {/* Meta Details Row */}
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-xs text-[var(--text-2)]">
                                                <span>{event.location}</span>
                                                <span className="text-[var(--primary)]">•</span>
                                                <span>{event.time}</span>
                                            </div>
                                        </div>

                                        {/* Read Details Link */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline uppercase text-xs font-semibold"
                                        >
                                            Read Details
                                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" className="fill-[var(--primary)]" />
                                                <path d="M10 15l3-3-3-3v6z" className="fill-white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-end mt-4">
                    <div className="flex gap-2">
                        <button className="events-prev w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronLeft />
                        </button>

                        <button className="events-next w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--primary)] hover:text-white">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}