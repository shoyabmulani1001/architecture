import FacultySection from "@/sections/faculty-section/faculty-section";
import Image from "next/image";

export default function FacultyPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[280px] overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/Hero-Section/faculty.jpg')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 h-full max-w-[1230px] mx-auto px-6 flex items-center w-full">
                    <div className="text-left text-white max-w-3xl">

                        <h1 className="mb-4">
                            Faculty
                        </h1>

                        <p className="">
                            Our faculty of experienced educators,
                            architects, and researchers are committed
                            to academic excellence, innovation,
                            and real-world impact.
                        </p>

                    </div>
                </div>
            </section>

            <FacultySection />
        </>
    );
}