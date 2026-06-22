"use client";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaUserGraduate,
} from "react-icons/fa";

export default function ContactUsSection() {
    const contactCards = [
        {
            icon: <FaEnvelope />,
            title: "Support Email",
            line1: "info@dypatilarch.com",
            line2: "admissions@dypatilarch.com",
        },
        // {
        //     icon: <FaPhoneAlt />,
        //     title: "Phone Number",
        //     line1: "+91 20 6791 9400",
        //     line2: "+91 20 6791 9401",
        // },
        {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            line1: "Sr. No. 27/A/1/2c, Near Eco City,Varale, Talegaon Dabhade,Pune – 410507",
            line2: "Maharashtra, India",
        },
        {
            icon: <FaUserGraduate />,
            title: "Admission Team",
            line1: "8879170212 / 9422032286",
            line2: "020-35037902",
        },
    ];

    return (
        <section className="bg-[var(--primary-bg)] py-20">

            <div className="max-w-[1230px] mx-auto px-6">

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                    {contactCards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[var(--secondary-bg)] rounded-[var(--r-btn)] p-8 text-center shadow-sm"
                        >
                            <div className="flex justify-center text-3xl text-[var(--primary)] mb-2">
                                {item.icon}
                            </div>

                            <h6 className=" text-[var(--text-1)] mb-2">
                                {item.title}
                            </h6>

                            <p className="text-[var(--text-2)]">
                                {item.line1}
                            </p>

                            <p className="text-[var(--text-2)]">
                                {item.line2}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Form + Map */}
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div className="bg-[var(--primary)] rounded-[var(--r-btn)] p-6 md:p-8 shadow-lg">

                        <h2 className="text-white mb-6 ">
                            Get in Touch
                        </h2>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name*"
                                className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full placeholder-gray-500"
                            />

                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="tel"
                                    placeholder="Mobile Number*"
                                    className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full placeholder-gray-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Id*"
                                    className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full placeholder-gray-500"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <select
                                    className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-[#64748b] outline-none w-full"
                                    defaultValue=""
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            e.target.classList.remove('text-[#64748b]');
                                            e.target.classList.add('text-black');
                                        } else {
                                            e.target.classList.remove('text-black');
                                            e.target.classList.add('text-[#64748b]');
                                        }
                                    }}
                                >
                                    <option value="" disabled>Department</option>
                                    <option value="Architecture" className="text-black">Architecture</option>
                                    <option value="Technology" className="text-black">Technology</option>
                                    <option value="Management" className="text-black">Management</option>
                                    <option value="Diploma" className="text-black">Diploma</option>

                                </select>

                                <select
                                    className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-[#64748b] outline-none w-full"
                                    defaultValue=""
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            e.target.classList.remove('text-[#64748b]');
                                            e.target.classList.add('text-black');
                                        } else {
                                            e.target.classList.remove('text-black');
                                            e.target.classList.add('text-[#64748b]');
                                        }
                                    }}
                                >
                                    <option value="" disabled>Course</option>
                                    <option value="B.Arch" className="text-black">B.Arch</option>
                                    <option value="M.Arch" className="text-black">M.Arch</option>
                                </select>
                            </div>

                            <textarea
                                rows={3}
                                placeholder="Enter Your Message..."
                                className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full placeholder-gray-500"
                            />

                            <div className="flex items-center gap-3 text-white/80">
                                <input type="checkbox" />
                                <span>
                                    Save my name & email into browser
                                    for the next time comment
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-gray-100 text-[var(--primary)] py-2.5 rounded-[var(--r-btn)] transition"
                            >
                                Submit Now
                            </button>

                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-xl overflow-hidden min-h-[500px]">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.191778637715!2d73.68522897496872!3d18.74496888239267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b227939e1877%3A0xf71f17ffaf38f1de!2sDr.%20D%20Y%20Patil%20Technical%20Campus!5e0!3m2!1sen!2sin!4v1781862281923!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="border-0 w-full h-full"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}