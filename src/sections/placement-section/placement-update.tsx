import Image from "next/image";

export default function PlacementUpdates() {
    const placements = [
        {
            id: 1,
            name: "Priya Sharma",
            course: "B.Arch",
            company: "Studio Arc Design",
            role: "Junior Architect",
            package: "₹6.5 LPA",
            image: "/placements/BArch10.jpg",
        },
        {
            id: 2,
            name: "Rahul Patil",
            course: "B.Arch",
            company: "Urban Space Architects",
            role: "Architect Trainee",
            package: "₹5.2 LPA",
            image: "/placements/BArch5.jpg",
        },
        {
            id: 3,
            name: "Sneha Kulkarni",
            course: "M.Arch",
            company: "Design Studio India",
            role: "Design Associate",
            package: "₹7.8 LPA",
            image: "/placements/MArch1.jpg",
        },
        {
            id: 4,
            name: "Aditya Deshmukh",
            course: "B.Arch",
            company: "Creative Habitat",
            role: "Architect",
            package: "₹6.0 LPA",
            image: "/placements/BArch6.jpg",
        },
    ];

    return (
        <section className="space-y-12">

            <div>
                <h2 className="text-5xl font-bold text-black mb-5">
                    Placement Updates
                </h2>

                <p className="text-xl text-gray-700 max-w-4xl leading-9">
                    Celebrating the achievements of our students
                    who have successfully transformed their
                    education into rewarding professional careers.
                </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {placements.map((student) => (
                    <div
                        key={student.id}
                        className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative h-[200px] overflow-hidden">
                            <Image
                                src={student.image}
                                alt={student.name}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="p-5">

                            <span className="inline-block px-3 py-1 rounded-full bg-[#3E4095]/10 text-[#3E4095] text-xs font-semibold mb-3">
                                {student.course}
                            </span>

                            <h3 className="text-xl font-bold text-black mb-2">
                                {student.name}
                            </h3>

                            <div className="space-y-1 text-sm text-gray-700">
                                <p>
                                    <strong>Role:</strong>{" "}
                                    {student.role}
                                </p>

                                <p>
                                    <strong>Company:</strong>{" "}
                                    {student.company}
                                </p>

                                <p>
                                    <strong>Package:</strong>{" "}
                                    {student.package}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
}