export default function PlacementCommittee() {
    const committeeData = {
        title: "Placement Committee",

        description: [
            "The Placement Committee at DY Patil School of Architecture (DYPSOA) consists of dedicated faculty members and placement coordinators committed to providing excellent career opportunities for students.",

            "The committee actively works towards bridging the gap between academia and industry by organizing campus recruitment drives, internship opportunities, industrial interactions, career guidance sessions, and professional skill development programs.",

            "With a student-centric approach, the committee continuously engages with leading organizations to ensure maximum placement opportunities and industry exposure for aspiring professionals.",

            "The committee also focuses on enhancing employability through aptitude training, soft skills development, mock interviews, resume-building workshops, and corporate readiness programs.",
        ],

        members: [
            {
                srNo: 1,
                name: "Dr. Meghana Bhilare",
                designation: "Chairperson",
            },
            {
                srNo: 2,
                name: "Prof. Shweta Anil Borse",
                designation: "Placement Officer",
            },
            {
                srNo: 3,
                name: "Dr. Ashwini Chavan",
                designation: "Faculty Coordinator",
            },
            {
                srNo: 4,
                name: "Dr. Preeti Sharma",
                designation: "Faculty Coordinator",
            },
            {
                srNo: 5,
                name: "Student Representatives",
                designation: "Student Coordinators",
            },
        ],
    };

    return (
        <section>
            <div className="space-y-10">

                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black underline mb-6">
                        {committeeData.title}
                    </h2>

                    <div className="space-y-4">
                        {committeeData.description.map((item, index) => (
                            <p
                                key={index}
                                className="text-sm md:text-base lg:text-lg leading-relaxed text-black"
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Committee Table */}
                <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">

                    <table className="w-full min-w-[600px] border-collapse">

                        <thead>
                            <tr className="bg-[#3E4095] text-white">

                                <th className="px-5 py-4 text-left font-semibold text-sm md:text-base border-b border-gray-200">
                                    Sr. No.
                                </th>

                                <th className="px-5 py-4 text-left font-semibold text-sm md:text-base border-b border-gray-200">
                                    Name of Committee Member
                                </th>

                                <th className="px-5 py-4 text-left font-semibold text-sm md:text-base border-b border-gray-200">
                                    Designation
                                </th>

                            </tr>
                        </thead>

                        <tbody>
                            {committeeData.members.map((member) => (
                                <tr
                                    key={member.srNo}
                                    className="hover:bg-gray-50 transition-colors border-b border-gray-150 last:border-b-0"
                                >
                                    <td className="px-5 py-4 text-black text-sm md:text-base font-medium">
                                        {member.srNo}
                                    </td>

                                    <td className="px-5 py-4 text-black text-sm md:text-base">
                                        {member.name}
                                    </td>

                                    <td className="px-5 py-4 text-black text-sm md:text-base">
                                        {member.designation}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </section>
    );
}