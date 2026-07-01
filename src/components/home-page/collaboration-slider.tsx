"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const approvedBy = [
    { src: "/Home-page/coa.png", alt: "COA" },
    { src: "/Home-page/ugc-logo.png", alt: "UGC" },
    { src: "/Home-page/coa.png", alt: "COA" },
    { src: "/Home-page/ugc-logo.png", alt: "UGC" },
];

const memberOf = [
    { src: "/Home-page/IIA-LOGO.png", alt: "IIA" },
    { src: "/Home-page/IGBC-logo.png", alt: "IGBC" },
    { src: "/Home-page/MASA-LOGO-new.png", alt: "MASA" },
    // { src: "/Home-page/Taylors-Logo_new.jpg", alt: "Taylor's" },
];

const collaboration = [
    { src: "/Home-page/CDSA-logo-with-Name-transperant-2.png", alt: "CDSA" },
    { src: "/Home-page/logo-builders-association-of-India-.png", alt: "BAI" },
    { src: "/Home-page/Taylors-Logo_new.jpg", alt: "Taylor's" },
];

export default function AccreditationSlider() {
    return (
        <div className="grid lg:grid-cols-3 bg-[var(--primary-bg)] grid-cols-1 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* Approved By */}
            <div className="px-4 lg:px-6 text-center py-4 lg:py-0">
                <h4 className="text-[var(--text-1)] mb-4">
                    Approved by
                </h4>
                <div className="max-w-[340px] mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={800}
                        className="w-full py-2"
                    >
                        {approvedBy.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="h-28 flex items-center justify-center transition-all duration-300">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={180}
                                        height={120}
                                        className="object-contain max-h-24 w-auto duration-300"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Member Of */}
            <div className="px-4 lg:px-6 text-center py-4 lg:py-0">
                <h4 className="text-[var(--text-1)] mb-4">
                    Member of
                </h4>
                <div className="max-w-[340px] mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3200,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={800}
                        className="w-full py-2"
                    >
                        {memberOf.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="h-28 flex items-center justify-center transition-all duration-300">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={180}
                                        height={120}
                                        className="object-contain max-h-24 w-auto duration-300"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Collaboration With */}
            <div className="px-4 lg:px-6 text-center py-4 lg:py-0">
                <h4 className="text-[var(--text-1)] mb-4">
                    Collaborations with
                </h4>
                <div className="max-w-[340px] mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3400,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={800}
                        className="w-full py-2"
                    >
                        {collaboration.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="h-28 flex items-center justify-center transition-all duration-300">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={180}
                                        height={120}
                                        className="object-contain max-h-24 w-auto duration-300"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}