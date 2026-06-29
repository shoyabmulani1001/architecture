import AccreditationSlider from "@/components/home-page/collaboration-slider";

export default function AccreditationSection() {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <div className="max-w-[1230px] mx-auto px-6">

                <AccreditationSlider />

            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-purple-700 to-indigo-900" />
        </section>
    );
}