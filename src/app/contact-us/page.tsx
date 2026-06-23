import ContactUsSection from "@/sections/contactus-section/contact-us";

export default function ContactPage() {
    return (
        <>
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

                        <h1 className="mb-4">
                            Contact
                        </h1>

                        <p className="">
                            Education goes beyond textbooks and classrooms.
                            We believe in empowering students to explore
                            their passions, challenge conventions,
                            and build meaningful futures.
                        </p>

                    </div>
                </div>
            </section>

            <ContactUsSection />
        </>
    );
}