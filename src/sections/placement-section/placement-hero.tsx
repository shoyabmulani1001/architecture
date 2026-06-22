"use client";

interface PlacementHeroProps {
    currentTab: string;
}

export default function PlacementHero({
    currentTab,
}: PlacementHeroProps) {
    return (
        <section
            className="relative min-h-[280px] flex items-end pb-8"
            style={{
                backgroundImage:
                    "url('/Hero-Section/contact-us.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="w-full max-w-[1230px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl text-left">
                    <h1 className="text-white mb-3">
                        Placements
                    </h1>

                    <p className="text-white/90 text-lg leading-relaxed font-normal">
                        At DYPSOA, we are committed to helping students transform their academic journey into successful professional careers through comprehensive career development and placement support initiatives.
                    </p>

                    <div className="w-24 h-1 bg-[var(--primary)] mt-6" />
                </div>
            </div>
        </section>
    );
}