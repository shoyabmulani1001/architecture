"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
    {
        image: "/Home-page/hero-1.jpg",
        subtitle: "Welcome To DY Patil School Of Architexture",
        title: "Building Brighter Futures Through Education",
    },
    {
        image: "/Home-page/hero-2.png",
        subtitle: "Bachelor of Architecture (B.Arch)",
        title: "Empowering Students For Future Success",
    },
    {
        image: "/Home-page/hero-3.webp",
        subtitle: "Master of Architecture (M.Arch)",
        title: "Leading The Way In Academic Excellence",
    },
];

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative h-[100dvh] bg-[var(--primary-bg)] overflow-hidden">
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: ".hero-prev-btn",
                    nextEl: ".hero-next-btn",
                }}
                direction="horizontal"
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[100dvh] w-full overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center hero-bg-image"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            />
                            <div className="absolute inset-0 bg-black/60 hero-overlay" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Stationary Content Overlay with Horizontal Animation */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 pointer-events-none">
                <div className="max-w-5xl w-full -translate-y-8 sm:-translate-y-16 relative min-h-[350px] flex items-center justify-center">
                    {slides.map((slide, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                            >
                                <p className={`text-white mb-6 uppercase ${isActive ? "hero-subtitle-active" : "hero-text-inactive"}`}>
                                    {slide.subtitle}
                                </p>
                                <h1 className={`text-white ${isActive ? "hero-title-active" : "hero-text-inactive"}`}>
                                    {slide.title}
                                </h1>
                                <div className={`mt-8 ${isActive ? "hero-btn-active" : "hero-text-inactive"}`}>
                                    <a
                                        href="#programs"
                                        className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3.5 transition-colors duration-300 ease-in-out uppercase rounded-[var(--r-lg-btn)] pointer-events-auto"
                                    >
                                        View Programs
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Custom Navigation Buttons */}
            <button
                className="hero-prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-transparent text-white w-20 h-20 flex items-center justify-center cursor-pointer select-none opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Previous Slide"
            >
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>

            <button
                className="hero-next-btn absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-transparent text-white w-20 h-20 flex items-center justify-center cursor-pointer select-none opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Next Slide"
            >
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>
        </section>
    );
}