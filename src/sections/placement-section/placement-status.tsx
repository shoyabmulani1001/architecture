export default function PlacementStatus() {
    const placementData = [
        {
            particular: "No. of outgoing students",
            y2021: "156",
            y2022: "149",
            y2023: "143",
            y2024: "135",
        },
        {
            particular: "No. of placed students",
            y2021: "121",
            y2022: "106",
            y2023: "102",
            y2024: "98",
        },
        {
            particular: "No. of students opted for Higher Education",
            y2021: "1",
            y2022: "1",
            y2023: "2",
            y2024: "NA",
        },
        {
            particular: "No. of Entrepreneurs",
            y2021: "2",
            y2022: "2",
            y2023: "3",
            y2024: "NA",
        },
        {
            particular: "Total",
            y2021: "124",
            y2022: "109",
            y2023: "107",
            y2024: "98*",
            isTotal: true,
        },
    ];

    const chartData = [
        {
            year: "2021-22",
            outgoing: 156,
            placed: 121,
        },
        {
            year: "2022-23",
            outgoing: 149,
            placed: 106,
        },
        {
            year: "2023-24",
            outgoing: 143,
            placed: 102,
        },
        {
            year: "2024-25",
            outgoing: 135,
            placed: 98,
        },
    ];

    const maxVal = 160;

    return (
        <section className="space-y-12">

            {/* Heading */}
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black underline mb-6">
                    Placement Status of DYPSOA
                </h2>

                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-5xl">
                    DYPSOA is committed to preparing students for
                    successful professional careers through academic
                    excellence, industry collaborations, internships,
                    expert mentoring, and placement support initiatives.
                    Our consistent placement performance reflects our
                    dedication to student success and industry readiness.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-3xl border border-gray-200 shadow-sm">

                <table className="w-full min-w-[600px] border-collapse">

                    <thead>
                        <tr className="bg-[#3E4095] text-white">

                            <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm lg:text-base font-semibold">
                                Particulars
                            </th>

                            <th className="px-4 py-4 md:px-6 md:py-5 text-center text-xs md:text-sm lg:text-base font-semibold">
                                2021-22
                            </th>

                            <th className="px-4 py-4 md:px-6 md:py-5 text-center text-xs md:text-sm lg:text-base font-semibold">
                                2022-23
                            </th>

                            <th className="px-4 py-4 md:px-6 md:py-5 text-center text-xs md:text-sm lg:text-base font-semibold">
                                2023-24
                            </th>

                            <th className="px-4 py-4 md:px-6 md:py-5 text-center text-xs md:text-sm lg:text-base font-semibold">
                                2024-25
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {placementData.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                            >
                                <td
                                    className={`px-4 py-4 md:px-6 md:py-5 text-black text-xs md:text-sm lg:text-base ${row.isTotal
                                        ? "font-bold"
                                        : ""
                                        }`}
                                >
                                    {row.particular}
                                </td>

                                <td
                                    className={`px-4 py-4 md:px-6 md:py-5 text-center text-black text-xs md:text-sm lg:text-base ${row.isTotal
                                        ? "font-bold"
                                        : ""
                                        }`}
                                >
                                    {row.y2021}
                                </td>

                                <td
                                    className={`px-4 py-4 md:px-6 md:py-5 text-center text-black text-xs md:text-sm lg:text-base ${row.isTotal
                                        ? "font-bold"
                                        : ""
                                        }`}
                                >
                                    {row.y2022}
                                </td>

                                <td
                                    className={`px-4 py-4 md:px-6 md:py-5 text-center text-black text-xs md:text-sm lg:text-base ${row.isTotal
                                        ? "font-bold"
                                        : ""
                                        }`}
                                >
                                    {row.y2023}
                                </td>

                                <td
                                    className={`px-4 py-4 md:px-6 md:py-5 text-center text-black text-xs md:text-sm lg:text-base ${row.isTotal
                                        ? "font-bold"
                                        : ""
                                        }`}
                                >
                                    {row.y2024}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* Custom Bar Chart Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h3 className="text-lg md:text-2xl font-bold text-black">
                            Annual Placement Trends
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm mt-1">
                            Comparison of outgoing students vs. successfully placed graduates
                        </p>
                    </div>

                    {/* Chart Legend */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs md:text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-[#3E4095]" />
                            <span className="text-gray-700">Outgoing Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-emerald-500" />
                            <span className="text-gray-700">Placed Students</span>
                        </div>
                    </div>
                </div>

                {/* Chart Area */}
                <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <div className="relative h-[300px] min-w-[500px] md:min-w-0 border-b border-gray-200 flex items-end justify-between pt-6 px-2 md:px-12">
                        {/* Y-axis gridlines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-gray-400">
                            <div className="w-full border-t border-dashed border-gray-100 pt-1">160</div>
                            <div className="w-full border-t border-dashed border-gray-100 pt-1">120</div>
                            <div className="w-full border-t border-dashed border-gray-100 pt-1">80</div>
                            <div className="w-full border-t border-dashed border-gray-100 pt-1">40</div>
                            <div className="w-full" />
                        </div>

                        {/* Bars Grid */}
                        <div className="relative z-10 w-full flex justify-around items-end h-full">
                            {chartData.map((data, index) => {
                                const outgoingHeight = `${(data.outgoing / maxVal) * 100}%`;
                                const placedHeight = `${(data.placed / maxVal) * 100}%`;

                                return (
                                    <div key={index} className="flex flex-col items-center gap-3 w-1/4 h-full justify-end">
                                        <div className="flex items-end gap-1.5 md:gap-5 h-[220px] w-full justify-center">
                                            {/* Outgoing Bar */}
                                            <div className="relative group flex flex-col items-center h-full justify-end">
                                                {/* Tooltip */}
                                                <div className="absolute -top-10 scale-0 group-hover:scale-100 bg-[#3E4095] text-white text-xs font-semibold px-2.5 py-1 rounded transition-all duration-200 shadow-md z-20 pointer-events-none whitespace-nowrap">
                                                    {data.outgoing} Students
                                                </div>
                                                <div
                                                    style={{ height: outgoingHeight }}
                                                    className="w-5 sm:w-8 md:w-12 bg-[#3E4095] rounded-t-lg transition-all duration-500 group-hover:opacity-90 cursor-pointer shadow-sm"
                                                />
                                            </div>

                                            {/* Placed Bar */}
                                            <div className="relative group flex flex-col items-center h-full justify-end">
                                                {/* Tooltip */}
                                                <div className="absolute -top-10 scale-0 group-hover:scale-100 bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded transition-all duration-200 shadow-md z-20 pointer-events-none whitespace-nowrap">
                                                    {data.placed} Placed ({Math.round((data.placed / data.outgoing) * 100)}%)
                                                </div>
                                                <div
                                                    style={{ height: placedHeight }}
                                                    className="w-5 sm:w-8 md:w-12 bg-emerald-500 rounded-t-lg transition-all duration-500 group-hover:opacity-90 cursor-pointer shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        {/* Year Label */}
                                        <span className="text-xs md:text-sm font-semibold text-black mt-2">
                                            {data.year}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Content */}
            <div className="bg-[#3E4095] rounded-3xl p-6 md:p-10 text-white">

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Building Successful Careers
                </h3>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90">
                    Through dedicated placement support, industry
                    engagement programs, internship opportunities,
                    expert sessions, and career development initiatives,
                    DYPSOA continues to empower students to achieve
                    professional excellence. Our focus remains on
                    creating future-ready architects capable of making
                    meaningful contributions to the built environment
                    and design industry.
                </p>

            </div>

        </section>
    );
}