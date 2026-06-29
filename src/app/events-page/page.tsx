import EventsSection from "@/sections/events/events";
import Image from "next/image";

export default function EventsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[280px] overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/Hero-Section/hero-image.jpeg')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 h-full max-w-[1230px] mx-auto px-6 flex items-center w-full">
                    <div className="text-left text-white max-w-3xl">

                        <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                           Events & Activities
                        </h1>

                        <p className="text-lg text-gray-200">
                            Discover vibrant campus events, architectural exhibitions, 
                            guest lectures, cultural festivals, and student workshops at DYPSOA.
                        </p>

                    </div>
                </div>
            </section>

            <EventsSection />
        </>
    );
}