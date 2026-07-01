import UpcomingEvents from "@/components/home-page/events-new";

export default function EventsSection() {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <div className="max-w-[1230px] mx-auto px-6">

                <UpcomingEvents />

            </div>
        </section>
    );
}