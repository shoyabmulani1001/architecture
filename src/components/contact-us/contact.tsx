"use client";

export default function ContactForm() {
    return (
        <div className="bg-[var(--secondary-bg)] rounded-[var(--r-btn)] p-6 md:p-8 shadow-sm">

            <h2 className="text-[var(--text-1)] mb-6">
                Get in Touch
            </h2>

            <form className="space-y-4">

                <input
                    type="text"
                    placeholder="Full Name*"
                    className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full !placeholder-black"
                />

                <div className="grid md:grid-cols-2 gap-5">
                    <input
                        type="tel"
                        placeholder="Mobile Number*"
                        className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full !placeholder-black"
                    />

                    <input
                        type="email"
                        placeholder="Email Id*"
                        className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full !placeholder-black"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                    {/* <select
                        className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Department
                        </option>
                        <option value="Architecture">Architecture</option>
                        <option value="Technology">Technology</option>
                        <option value="Management">Management</option>
                        <option value="Diploma">Diploma</option>
                    </select> */}

                    <select
                        className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Course
                        </option>
                        <option value="B.Arch">B.Arch</option>
                        <option value="M.Arch">M.Arch</option>
                    </select>

                </div>

                {/* <textarea
                    rows={3}
                    placeholder="Enter Your Message..."
                    className="bg-white border-none rounded-[var(--r-btn)] px-5 py-2.5 text-black outline-none w-full !placeholder-black"
                /> */}

                <div className="flex items-center gap-3 text-[var(--text-1)] ">
                    <input type="checkbox" />
                    <span>
                        Save my name & email into browser for the next time comment
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-2.5 rounded-[var(--r-btn)] transition"
                >
                    Submit Now
                </button>

            </form>
        </div>
    );
}