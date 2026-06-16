"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
    {
        image: "/Home-page/home-slider1.jpg",
        subtitle: "Welcome To DY Patil School Of Architexture",
        title: "Building Brighter Futures Through Education",
    },
    {
        image: "/Home-page/home-slider2.jpg",
        subtitle: "World Class Learning",
        title: "Empowering Students For Future Success",
    },
    {
        image: "/Home-page/home-slider3.webp",
        subtitle: "Research & Innovation",
        title: "Leading The Way In Academic Excellence",
    },
];

export default function HeroSlider() {
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative h-screen overflow-hidden">
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl,
                    nextEl,
                }}
                direction="vertical"
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-screen bg-cover bg-center overflow-hidden"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 hero-overlay" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Stationary Content Overlay with Horizontal Animation */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 pointer-events-none">
                <div className="max-w-5xl w-full -translate-y-16 relative min-h-[350px] flex items-center justify-center">
                    {slides.map((slide, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none`}
                            >
                                <p
                                    className={`text-white text-xl mb-6 font-medium tracking-wide uppercase ${isActive ? "hero-subtitle-active" : "hero-text-inactive"
                                        }`}
                                >
                                    {slide.subtitle}
                                </p>

                                <h1
                                    className={`text-white text-5xl md:text-7xl font-bold leading-tight font-serif ${isActive ? "hero-title-active" : "hero-text-inactive"
                                        }`}
                                >
                                    {slide.title}
                                </h1>

                                <div
                                    className={`mt-8 ${isActive ? "hero-btn-active" : "hero-text-inactive"
                                        }`}
                                >
                                    <a
                                        href="#programs"
                                        className="inline-block bg-[#3E4095] hover:bg-[#2A2C6B] text-white text-sm md:text-base font-semibold px-8 py-3.5 transition-colors duration-300 ease-in-out uppercase rounded-2xl pointer-events-auto"
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
                ref={setPrevEl}
                className="hero-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#9E1B1B] hover:bg-[#7F1212] text-white w-12 h-12 flex items-center justify-center transition-colors cursor-pointer select-none"
            >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>

            <button
                ref={setNextEl}
                className="hero-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/85 hover:bg-black text-white w-12 h-12 flex items-center justify-center transition-colors cursor-pointer select-none"
            >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>

            {/* Bottom Cards */}
            {/* <div className="absolute bottom-2 left-2 right-2 z-20">
                <div className="grid md:grid-cols-3">
                    <div className="bg-[#1d222d] py-8 px-10 text-center border-t border-[#2d3748]/30">
                        <h3 className="text-white text-2xl md:text-3xl font-bold font-serif">
                            Admission Open
                        </h3>
                    </div>

                    <div className="bg-[#202633] py-8 text-center border-t border-[#2d3748]/30">
                        <h3 className="text-white text-2xl md:text-3xl font-bold font-serif">
                            Download Research Paper
                        </h3>
                    </div>

                    <div className="bg-[#1d222d] py-8 text-center border-t border-[#2d3748]/30">
                        <h3 className="text-white text-2xl md:text-3xl font-bold font-serif">
                            Join Events
                        </h3>
                    </div>
                </div>
            </div> */}
        </section>
    );
}