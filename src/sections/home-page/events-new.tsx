import UpcomingEvents from "@/components/home-page/events-new";

export default function EventsSectionNew() {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <UpcomingEvents />
            </div>
        </section>
    );
}
