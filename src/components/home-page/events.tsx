"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Event {
    image: string;
    date: string;
    time: string;
    title: string;
}

interface EventsSliderProps {
    events: Event[];
}

export default function EventsSlider({
    events,
}: EventsSliderProps) {
    return (
        <div className="relative">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: ".events-prev",
                    nextEl: ".events-next",
                }}
                pagination={{
                    clickable: true,
                    el: ".events-pagination",
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop
                spaceBetween={24}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {events.map((event, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[var(--secondary-bg)] rounded-[var(--r-btn)] overflow-hidden h-full">

                            <div className="p-3">
                                <div className="relative h-[220px] rounded-[var(--r-btn)] overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="px-6 pb-3">
                                <div className="flex items-center gap-3 text-[var(--text-2)] mb-2">
                                    <small>{event.date}</small>
                                    <span className="w-3 h-[1px] bg-[var(--card-border)]"></span>
                                    <small>{event.time}</small>
                                </div>

                                <div className="border-t border-[var(--card-border)] mb-3"></div>

                                <h6 className="mb-4 text-[var(--text-1)]">
                                    {event.title}
                                </h6>

                                <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-2 rounded-[var(--r-btn)] transition-all">
                                    View Details
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex items-center justify-between mt-8">

                <div className="events-pagination"></div>

                <div className="flex gap-2">

                    <button className="events-prev w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer">
                        <FaChevronLeft className="text-[var(--text-1)]" />
                    </button>

                    <button className="events-next w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] text-[var(--text-1)] flex items-center justify-center cursor-pointer">
                        <FaChevronRight className="text-[var(--text-1)]" />
                    </button>

                </div>

            </div>

        </div>
    );
}