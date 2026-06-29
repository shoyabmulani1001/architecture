"use client";

import { useState } from "react";
import Image from "next/image";

const events = [
  {
    id: 1,
    image: "/Home-page/induction-day-09.jpg",
    location: "DYPSOA Campus, Pune",
    date: "August 10, 2025",
    time: "09:30 AM - 04:00 PM",
    title: "Academic Induction & Student Orientation Program",
  },
  {
    id: 2,
    image: "/Home-page/Freshers-day-1.webp",
    location: "Main Auditorium",
    date: "September 15, 2025",
    time: "10:00 AM - 05:00 PM",
    title: "Annual Freshers Welcome & Cultural Gala",
  },
  {
    id: 3,
    image: "/Home-page/culturals-day-2.jpg",
    location: "Amphitheatre & Exhibition Hall",
    date: "October 20, 2025",
    time: "09:00 AM - 06:00 PM",
    title: "Architectural Design Fest & Creative Exhibition",
  },
  {
    id: 4,
    image: "/Home-page/sports-day-11.jpeg",
    location: "Sports Complex",
    date: "November 5, 2025",
    time: "08:30 AM - 04:30 PM",
    title: "Annual Inter-College Sports Meet & Athletics",
  },
  {
    id: 5,
    image: "/Home-page/founders-day-1.jpg",
    location: "Convention Center",
    date: "December 12, 2025",
    time: "10:00 AM - 03:30 PM",
    title: "Founders Day & Academic Excellence Honor Ceremony",
  },
  {
    id: 6,
    image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
    location: "Design Studio 19",
    date: "April 25, 2026",
    time: "11:00 AM - 05:00 PM",
    title: "Graduating Batch Farewell & Portfolio Showcase",
  },
  {
    id: 7,
    image: "/Home-page/induction-day-09.jpg",
    location: "Seminar Hall 1",
    date: "May 14, 2026",
    time: "10:00 AM - 04:00 PM",
    title: "National Architectural Symposium & Research Conference",
  },
  {
    id: 8,
    image: "/Home-page/culturals-day-2.jpg",
    location: "Exhibition Center",
    date: "June 02, 2026",
    time: "09:00 AM - 05:00 PM",
    title: "Sustainable Building Workshop & Green Technology Expo",
  },
  {
    id: 9,
    image: "/Home-page/Freshers-day-1.webp",
    location: "Main Auditorium",
    date: "July 18, 2026",
    time: "11:00 AM - 04:30 PM",
    title: "Annual Alumni Meet & Industry Interaction Session",
  },
  {
    id: 10,
    image: "/Home-page/founders-day-1.jpg",
    location: "Design Studio 12",
    date: "August 22, 2026",
    time: "09:30 AM - 03:30 PM",
    title: "Urban Design Workshop & Smart City Planning Seminar",
  },
  {
    id: 11,
    image: "/Home-page/sports-day-11.jpeg",
    location: "Workshop Lab",
    date: "September 09, 2026",
    time: "10:00 AM - 05:00 PM",
    title: "Model Making Competition & Craftsmanship Workshop",
  },
  {
    id: 12,
    image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
    location: "Art Gallery",
    date: "October 15, 2026",
    time: "10:30 AM - 06:00 PM",
    title: "Photography & Vernacular Architecture Exhibition",
  },
];

export default function EventsSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggleEvents = () => {
    if (visibleCount >= events.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => Math.min(prev + 6, events.length));
    }
  };

  return (
    <section className="bg-[var(--primary-bg)] py-16">
      <div className="mx-auto max-w-[1230px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.slice(0, visibleCount).map((event) => (
            <div
              key={event.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden rounded-t-xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 rounded bg-[var(--primary)] px-3.5 py-1.5 text-xs font-semibold text-white">
                  {event.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Date */}
                <div className="flex flex-wrap items-center text-sm text-[#4B5563]">
                  <span>{event.date}</span>

                  <span className="mx-3 h-[2px] w-4 bg-gray-300"></span>

                  <span>{event.time}</span>
                </div>

                <div className="my-3 border-t border-gray-200"></div>

                {/* Title */}
                <h5 className="text-[#111827]">
                  {event.title}
                </h5>

                {/* Button */}
                <button className="mt-4 rounded-md border border-gray-300 bg-white px-4 py-2 text-[var(--text-1)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleToggleEvents}
            className="rounded-md bg-[var(--primary)] px-8 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:opacity-90 hover:shadow-md"
          >
            {visibleCount >= events.length ? "Show Less Events" : "View More Events"}
          </button>
        </div>
      </div>
    </section>
  );
}