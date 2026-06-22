import Image from "next/image";
import Link from "next/link";

export default function PlacementUpdates() {
    const placementUpdates = [
        {
            id: 1,
            image: "/placements/Placed-Student-Sahil-K.webp",
        },
        {
            id: 2,
            image: "/placements/Placed-Student-Harshada-B.webp",
        },
        {
            id: 3,
            image: "/placements/Placed-Student-Mahesh-M.webp",
        },
        {
            id: 4,
            image: "/placements/Placed-Student-Piyush-N.webp",
        },
        {
            id: 5,
            image: "/placements/Placed-Student-Samiksha-P.webp",
        },
        {
            id: 6,
            image: "/placements/Placed-Student-Saniya-P.webp",
        },
        {
            id: 7,
            image: "/placements/Placed-Student-Sanket-N.webp",
        },
        {
            id: 8,
            image: "/placements/Placed-Student-Saurabh-B.webp",
        },
        {
            id: 9,
            image: "/placements/Placed-Student-Saurabh-P.webp",
        },
        {
            id: 10,
            image: "/placements/Placed-Student-Somnath-T.webp",
        },
    ];

    return (
        <section className="space-y-8">

            {/* Header */}
            <div className="mb-9">
                <h2 className=" text-[var(--text-1)] mb-4">
                    Placement Updates
                </h2>

                <p className="text-[var(--text-2)] max-w-4xl">
                    Celebrating the achievements of our students who have
                    successfully secured placement opportunities through
                    campus recruitment drives, internships, and industry
                    collaborations.
                </p>
            </div>

            {/* Placement Gallery */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {placementUpdates.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-[var(--primary-bg)] rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative aspect-square overflow-hidden">

                            <Image
                                src={item.image}
                                alt={`Placement Update ${item.id}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                        </div>
                    </div>
                ))}

            </div>

            {/* CTA Section */}
            <div className="bg-[var(--primary)] rounded-3xl p-10 lg:p-14 text-center text-[var(--primary-bg)]">

                <span className="uppercase opacity-80">
                    Admissions Open
                </span>

                <h3 className="mt-4 mb-5">
                    Build Your Future with DYPSOA
                </h3>

                <p className="max-w-3xl mx-auto opacity-90 mb-8">
                    Join a vibrant learning environment where academic
                    excellence meets industry exposure. Gain access to
                    internships, expert mentorship, and career-focused
                    opportunities that prepare you for professional success.
                </p>

                <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center bg-[] text-[#3E4095] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
                >
                    Enquire Now
                </Link>

            </div>

        </section>
    );
}