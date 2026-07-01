import React from 'react';
import Image from 'next/image';

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
        <section className="bg-white font-sans">
            <div className="max-w-[1230px] mx-auto">

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
                            {/* Custom SVG matching the design's circled arrow */}
                            <circle cx="12" cy="12" r="10" className="fill-[var(--primary)]" />
                            <path d="M10 16l4-4-4-4v8z" className="fill-white" />
                        </svg>
                    </a>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group flex flex-col sm:flex-row gap-6 items-start pb-8 border-b border-gray-200/60 hover:border-[var(--primary)] transition-colors duration-300"
                        >
                            {/* Event Image */}
                            <div className="relative w-full sm:w-[220px] h-[140px] flex-shrink-0 overflow-hidden rounded-[var(--r-btn)] bg-gray-100">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-7xl) 220px, 100vw"
                                />
                            </div>

                            {/* Event Details */}
                            <div className="flex flex-col justify-between h-full pt-1">
                                <div>
                                    <h5 className="text-[var(--text-1)] mb-3 mt-2">
                                        {event.title}
                                    </h5>

                                    {/* Meta Details Row */}
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1  mb-2">
                                        <small className="text-[var(--text-2)]">{event.location}</small>
                                        {/* <small className="text-[var(--primary)] ">·</small> */}

                                    </div>
                                    <small className="text-[var(--text-2)]">{event.time}</small>
                                    {/* <small className="text-[var(--text-2)]">{event.desc}</small> */}
                                </div>

                                {/* Read Details Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline uppercase mb-2"
                                >
                                    Read Details
                                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" className="fill-[var(--primary)]" />
                                        <path d="M10 15l3-3-3-3v6z" className="fill-white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}