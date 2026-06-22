import EventsSlider from "@/components/home-page/events";

export default function EventsSection() {
    const events = [
        {
            image: "/Home-page/Freshers-day-1.webp",
            date: "August 4, 2025",
            time: "09:00 AM - 03:40 PM",
            title: "Fresher's Day",
        },
        {
            image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
            date: "August 4, 2025",
            time: "09:00 AM - 03:40 PM",
            title: "Farewell Day",
        },
        {
            image: "/Home-page/founders-day-1.jpg",
            date: "August 4, 2025",
            time: "09:00 AM - 03:40 PM",
            title: "Founder's Day",
        },
        {
            image: "/Home-page/Freshers-day-1.webp",
            date: "September 10, 2025",
            time: "10:00 AM - 04:00 PM",
            title: "Annual Sports Meet",
        },
        {
            image: "/Home-page/Farewell-Ceremony-Studio-19.webp",
            date: "October 15, 2025",
            time: "11:00 AM - 05:00 PM",
            title: "Cultural Fest 'Goonj'",
        },
        {
            image: "/Home-page/founders-day-1.jpg",
            date: "December 5, 2025",
            time: "09:30 AM - 03:30 PM",
            title: "Alumni Meet",
        },
    ];

    return (
        <section className="bg-[var(--primary-bg)] py-20">
            <div className="max-w-[1230px] mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-9">

                    <div>
                        <h2 className="mb-4 text-[var(--text-1)]">
                            Latest Events
                        </h2>

                        <p className="text-[var(--text-2)]">
                            Stay connected with academic, cultural,
                            and professional events happening
                            throughout the year.
                        </p>
                    </div>

                    <button className="mt-4 md:mt-0 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-full transition-all">
                        View More Events
                    </button>

                </div>

                <EventsSlider events={events} />

            </div>
        </section>
    );
}