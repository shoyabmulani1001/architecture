import {
    FiMail,
    FiPhone,
    FiFileText,
    FiAlertCircle,
} from "react-icons/fi";

export default function StudentVerification() {
    const verificationData = {
        email: "verification@dypsoa.edu.in",
        phone: "+91 98765 43210",
    };

    return (
        <section className="space-y-12">

            {/* Heading */}
            <div>
                <h2 className="text-5xl font-bold text-black underline mb-6">
                    Student Verification
                </h2>

                <p className="text-xl leading-9 text-gray-700 max-w-5xl">
                    DYPSOA provides an official student verification service
                    for employers, educational institutions, government
                    organizations, and authorized agencies seeking to verify
                    academic records, enrollment status, or degree credentials
                    of current and former students.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-[1.4fr_420px] gap-8">

                {/* Process */}
                <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

                    <div className="flex items-center gap-3 mb-8">
                        <FiFileText
                            size={26}
                            className="text-[#3E4095]"
                        />

                        <h3 className="text-3xl font-semibold text-black">
                            Verification Process
                        </h3>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-gray-700">

                        <p>
                            Organizations and agencies requesting
                            student verification are required to submit
                            an official request along with supporting
                            documents and relevant information.
                        </p>

                        <p>
                            Verification requests should include the
                            student's full name, enrollment details,
                            graduation year, and purpose of verification
                            to ensure accurate processing.
                        </p>

                        <p>
                            Once all required information is received,
                            the institution will review and process the
                            request in accordance with academic policies
                            and verification procedures.
                        </p>

                        <p>
                            Verification responses are generally issued
                            within a few working days depending on the
                            complexity and completeness of the request.
                        </p>

                    </div>
                </div>

                {/* Contact Card */}
                <div className="bg-[#3E4095] rounded-3xl p-10 text-white">

                    <h3 className="text-3xl font-bold mb-8">
                        Verification Contact
                    </h3>

                    <div className="space-y-8">

                        <div className="flex gap-4">
                            <FiMail
                                size={22}
                                className="mt-1 shrink-0"
                            />

                            <div>
                                <p className="font-semibold mb-1">
                                    Email
                                </p>

                                <a
                                    href={`mailto:${verificationData.email}`}
                                    className="opacity-90 break-all"
                                >
                                    {verificationData.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FiPhone
                                size={22}
                                className="mt-1 shrink-0"
                            />

                            <div>
                                <p className="font-semibold mb-1">
                                    Phone
                                </p>

                                <a
                                    href={`tel:${verificationData.phone}`}
                                    className="opacity-90"
                                >
                                    {verificationData.phone}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Important Notice */}
            <div className="bg-[#F8F9FF] border border-[#D7DDFE] rounded-3xl p-8">

                <div className="flex gap-4">

                    <FiAlertCircle
                        size={24}
                        className="text-[#3E4095] mt-1 shrink-0"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-black mb-3">
                            Important Information
                        </h3>

                        <p className="text-lg leading-8 text-gray-700">
                            Verification requests must be submitted by
                            authorized organizations only. Incomplete
                            requests may result in processing delays.
                            The institution reserves the right to seek
                            additional documentation whenever necessary
                            to ensure the authenticity and accuracy of
                            the verification process.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}