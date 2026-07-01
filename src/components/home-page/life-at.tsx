"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const lifeData = [
    {
        id: 1,
        title: "Freshers Day",
        image: "/Home-page/Freshers-day-1.webp",
        date: "25 January 2026",
        description:
            "Relive your favourite childhood memories with games, fun activities and colourful celebrations.",
    },
    {
        id: 2,
        title: "Farewell Ceremony",
        image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
        date: "18 February 2026",
        description:
            "An energetic cultural festival filled with music, dance performances and unforgettable moments.",
    },
    {
        id: 3,
        title: "Founder's Day",
        image: "/Home-page/founders-day-1.jpg",
        date: "8 March 2026",
        description:
            "Celebrate Indian traditions by wearing cultural attire and participating in exciting events.",
    },
    {
        id: 4,
        title: "Culturals Day",
        image: "/Home-page/culturals-day-2.jpg",
        date: "20 April 2026",
        description:
            "Experience the excitement of athletic competitions and team spirit throughout the campus.",
    },
    {
        id: 5,
        title: "Tech Fest",
        image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
        date: "10 May 2026",
        description:
            "Coding competitions, robotics, AI workshops and innovative project exhibitions.",
    },
];

export default function LifeAtDYPSOASection() {
    return (
        <section className="relative overflow-hidden bg-[var(--primary-bg)] py-12">



            <div className="relative z-10 mx-auto max-w-[1230px] px-2">

                {/* Heading */}

                <div className="mb-9 text-center">

                    <h2 className="text-[var(--text-1)] mb-4">
                        Life @ DYPSOA
                    </h2>

                    <p className="mx-auto max-w-3xl text-[var(--text-2)]">
                        Discover memorable experiences, vibrant celebrations,
                        student activities and unforgettable campus moments that
                        make life at DYPSOA exciting every single day.
                    </p>

                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: ".life-prev",
                        nextEl: ".life-next",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={24}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1439: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {lifeData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="group h-[280px] flex flex-col overflow-hidden rounded-[var(--r-btn)] bg-white border border-gray-200">

                                {/* Image (80% of card height) */}
                                <div className="relative h-[80%] w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0" />

                                    {/* Date Badge */}
                                    {/* <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-purple-700 shadow-lg">
                                        {item.date}
                                    </div> */}

                                    {/* Title on Image */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h6 className="text-xl font-bold leading-snug text-white">
                                            {item.title}
                                        </h6>
                                    </div>
                                </div>

                                {/* Content (20% of card height) */}
                                <div className="h-[20%] w-full px-4 py-3 flex items-center justify-center">
                                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600 text-center line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* Navigation (Moved to Bottom Right) */}
                <div className="mt-4 flex items-center justify-end gap-2">

                    <button className="life-prev w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <FaChevronLeft
                            size={14}
                            className="text-[var(--text-1)]"
                        />
                    </button>

                    <button className="life-next w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <FaChevronRight
                            size={14}
                            className="text-[var(--text-1)]"
                        />
                    </button>

                </div>

                {/* Bottom Decoration */}
                {/* <div className="mt-16 flex justify-center">
                    <div className="h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500" />
                </div> */}
            </div>

            {/* Swiper Custom Styles */}
            <style jsx global>{`
        .swiper {
          padding-bottom: 60px;
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #c4b5fd;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            #6a38ff 0%,
            #9f5cff 100%
          );
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
        </section>
    );
}