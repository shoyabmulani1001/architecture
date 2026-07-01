"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
    const [mobilePlacementOpen, setMobilePlacementOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full  bg-white  ">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 bg-white">
                <div className="flex flex-col lg:flex-row items-center justify-between py-4">

                    {/* Banner Image */}
                    <div className="shrink-0">
                        <Image
                            src="/Logo/full-logo.jpeg"
                            alt="Dr. D. Y. Patil School of Architecture"
                            width={1500}
                            height={140}
                            priority
                            className="max-h-[140px] w-auto object-contain"
                        />
                    </div>

                    {/* Right Side Information */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-32">

                        {/* NAAC Accreditation */}
                        {/* <div className="text-center">
                            <p className="text-[#3E4095] text-base lg:text-lg font-medium">
                                NAAC
                            </p>

                            <p className="text-[#3E4095] text-base lg:text-lg font-medium">
                                Accreditation
                            </p>

                            <h6 className="text-[#3E4095] text-3xl lg:text-4xl font-bold">
                                A Grade
                            </h6>
                        </div> */}

                        {/* Admission Inquiry */}
                        <div className="text-center">
                            <h6 className="text-[var(--primary)]">
                                Admission Inquiry
                            </h6>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[var(--primary)]">
                                <p>+91 9359004652</p>
                                <p>+91 7666720378</p>
                                <p>+91 7822099218</p>
                                <p>+91 XXXXXXXXXX</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-auto justify-center sm:justify-start">
                            <Link
                                href="#"
                                className="flex-1 sm:flex-none bg-[var(--primary)] hover:bg-[var(--primary-hover)] transition-all duration-300 text-white px-6 py-3 rounded-[var(--r-btn)] text-center whitespace-nowrap"
                            >
                                B.Arch ERP
                            </Link>

                            <Link
                                href="/contact"
                                className="flex-1 sm:flex-none bg-[var(--primary)] hover:bg-[var(--primary-hover)] transition-all duration-300 text-white px-6 py-3 rounded-[var(--r-btn)] flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                {/* <IoLocationSharp className="text-xl" /> */}
                                M.Arch ERP
                            </Link>
                        </div>

                    </div>
                </div>


            </div>
            {/* Navigation Bar Row */}
            {isScrolled && <div className="h-18 w-full" />}
            <div className={`w-full bg-[var(--primary)] shadow-md transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 z-50" : "relative"
                }`}>
                <div className={`max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between relative transition-all duration-300 ${isScrolled ? "h-[80px]" : "h-18"}`}>

                    {/* Hanging Logo Shield */}
                    <div
                        className={`absolute left-4 top-2 z-30 transition-all duration-300 origin-top ${isScrolled
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
                            }`}
                        style={{ height: "140px" }}
                    >
                        <Link href="/">
                            <img
                                src="/Logo/logo.png"
                                alt="logo"
                                className="w-44 h-44 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu Links */}
                    <nav className={`hidden lg:flex items-center lg:gap-4 xl:gap-10 min-[1280px]:max-[1350px]:gap-4 transition-all duration-300 ${isScrolled ? "ml-56 min-[1280px]:max-[1350px]:ml-40" : "ml-30"}`}>
                        <Link href="/">
                            <span
                                className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                                style={{
                                    fontSize: "var(--body-size)",
                                    lineHeight: "var(--body-line-height)",
                                    fontWeight: "var(--font-weight-body)",
                                }}
                            >
                                Home
                            </span>
                        </Link>

                        {/* Dropdown 1 */}
                        <div className="relative group cursor-pointer py-2">
                            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white hover:text-gray-200 inline-flex items-center gap-1">
                                About Us
                                <svg
                                    className="w-3 h-3 transform group-hover:rotate-180 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px] z-50 text-gray-800">
                                <Link
                                    href="/about"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    About DYPSOA
                                </Link>
                                <Link
                                    href="/management-page"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Our Management
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Our Inspiration
                                </Link>
                                <Link
                                    href="/about"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Vision & Mission
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Director's Desk
                                </Link>
                                <Link
                                    href="/about"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Key Features
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Committees
                                </Link>
                            </div>
                        </div>

                        {/* Dropdown 2 */}
                        <div className="relative group cursor-pointer py-2">
                            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white inline-flex items-center gap-1 hover:text-gray-200 transition-colors">
                                Academics
                                <svg
                                    className="w-3 h-3 transform group-hover:rotate-180 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px] z-50 text-gray-800">
                                <Link
                                    href="/about"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    B.Arch
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    M.Arch
                                </Link>
                            </div>
                        </div>


                        <Link href="/placementnew-page">
                            <span
                                className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                                style={{
                                    fontSize: "var(--body-size)",
                                    lineHeight: "var(--body-line-height)",
                                    fontWeight: "var(--font-weight-body)",
                                }}
                            >
                                Placement
                            </span>
                        </Link>

                        {/* Dropdown 3 */}
                        <div className="relative group cursor-pointer py-2">
                            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white inline-flex items-center gap-1 hover:text-gray-200 transition-colors">
                                Placement
                                <svg
                                    className="w-3 h-3 transform group-hover:rotate-180 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[220px] z-50 text-gray-800">
                                <Link
                                    href="/placement-page#about-placement"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    About Placement
                                </Link>
                                <Link
                                    href="/placement-page#placement-committee"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Placement Committee
                                </Link>
                                <Link
                                    href="/placement-page#career-support"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Career Support
                                </Link>
                                <Link
                                    href="/placement-page#placement-activities"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Placement Activities
                                </Link>
                                <Link
                                    href="/placement-page#placement-brochure"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Placement Brochure
                                </Link>
                                <Link
                                    href="/placement-page#placement-updates"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Placement Updates
                                </Link>
                                <Link
                                    href="/placement-page#placement-status"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Placement Status
                                </Link>
                                <Link
                                    href="/placement-page#our-recruiters"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Our Recruiters
                                </Link>
                                <Link
                                    href="/placement-page#student-verification"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Student Verification
                                </Link>
                                <Link
                                    href="/placement-page#job-fair"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Job Fair
                                </Link>
                            </div>
                        </div>

                        {/* Dropdown 4 */}
                        <div className="relative group cursor-pointer py-2">
                            <Link href="/faculty-page">
                                <span
                                    className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                                    style={{
                                        fontSize: "var(--body-size)",
                                        lineHeight: "var(--body-line-height)",
                                        fontWeight: "var(--font-weight-body)",
                                    }}
                                >
                                    Faculty
                                </span>
                            </Link>

                        </div>
                        {/* Dropdown 4 */}
                        <div className="relative group cursor-pointer py-2">
                            <Link href="/events-page">
                                <span
                                    className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                                    style={{
                                        fontSize: "var(--body-size)",
                                        lineHeight: "var(--body-line-height)",
                                        fontWeight: "var(--font-weight-body)",
                                    }}
                                >
                                    Events
                                </span>
                            </Link>

                        </div>

                        {/* Dropdown 5 */}
                        {/* <div className="relative group cursor-pointer py-2">
                            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-white inline-flex items-center gap-1 hover:text-gray-200 transition-colors">
                                Events & News
                                <svg
                                    className="w-3 h-3 transform group-hover:rotate-180 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px] z-50 text-gray-800">
                                <Link
                                    href="/about"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Upcoming Events
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2  text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Workshops
                                </Link>
                                <Link
                                    href="/about"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Guest Lectures
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    Conference
                                </Link>
                                <Link
                                    href="/vision"
                                    className="block px-4 py-2 text-[var(--text-1)] text-[var(--link-size)] hover:bg-[var(--secondary-bg)]"
                                >
                                    News & Updates
                                </Link>
                            </div>
                        </div> */}

                        <Link href="/contact-us">
                            <span
                                className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                                style={{
                                    fontSize: "var(--body-size)",
                                    lineHeight: "var(--body-line-height)",
                                    fontWeight: "var(--font-weight-body)",
                                }}
                            >
                                Contact
                            </span>
                        </Link>
                    </nav>

                    {/* Right Action Utilities Container */}
                    <div className="flex items-center gap-4 ml-auto lg:ml-0 shrink-0 z-20 py-2">
                        {/* Apply Now CTA Button - Visible only on Desktop screens */}
                        <Link
                            href="/apply"
                            className="hidden lg:flex items-center gap-2 bg-white hover:bg-gray-100 px-5 py-2 rounded-[var(--r-btn)] transition-colors shadow-sm"
                        >
                            <p className="text-[var(--primary)]"
                                style={{
                                    fontSize: "var(--body-size)",
                                    lineHeight: "var(--body-line-height)",
                                    fontWeight: "var(--font-weight-heading)",
                                }}
                            >
                                Apply Now
                            </p>

                            <svg
                                className="w-4 h-4 stroke-[2.5] text-[var(--primary)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                        {/* Mobile Hamburger Toggle Icon Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col lg:hidden p-2 text-white hover:text-gray-200 focus:outline-none"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span className="h-0.5 bg-white rounded-full block w-6"></span>
                                <span className="h-0.5 bg-white rounded-full block w-6"></span>
                                <span className="h-0.5 bg-white rounded-full block w-6"></span>
                            </div>
                        </button>
                    </div>

                    {/* --- MOBILE ACCORDION DRAWER --- */}
                    {isOpen && (
                        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[var(--card-border)] shadow-xl z-50 transition-all text-gray-800 max-h-[calc(100vh-80px)] overflow-y-auto">
                            <div className="px-6 py-4 flex flex-col gap-4">
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--link-size)] py-1 border-b border-gray-50 font-[var(--font-weight-body)] text-[var(--text-1)]"
                                >
                                    Home
                                </Link>

                                {/* About Us Accordion */}
                                <div>
                                    <button
                                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                                        className="w-full text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between items-center text-[var(--text-1)] font-[var(--font-weight-body)] cursor-pointer"
                                    >
                                        About Us <span>{mobileAboutOpen ? "−" : "+"}</span>
                                    </button>
                                    {mobileAboutOpen && (
                                        <div className="pl-4 flex flex-col gap-2.5 mt-2.5 mb-1.5">
                                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">About DYPSOA</Link>
                                            <Link href="/management-page" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Our Management</Link>
                                            <Link href="/vision" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Our Inspiration</Link>
                                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Vision & Mission</Link>
                                            <Link href="/vision" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Director's Desk</Link>
                                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Key Features</Link>
                                            <Link href="/vision" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Committees</Link>
                                        </div>
                                    )}
                                </div>

                                {/* Academics Accordion */}
                                <div>
                                    <button
                                        onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                                        className="w-full text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between items-center text-[var(--text-1)] font-[var(--font-weight-body)] cursor-pointer"
                                    >
                                        Academics <span>{mobileAcademicsOpen ? "−" : "+"}</span>
                                    </button>
                                    {mobileAcademicsOpen && (
                                        <div className="pl-4 flex flex-col gap-2.5 mt-2.5 mb-1.5">
                                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">B.Arch</Link>
                                            <Link href="/vision" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">M.Arch</Link>
                                        </div>
                                    )}
                                </div>

                                {/* Placement main link */}
                                <Link
                                    href="/placementnew-page"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--link-size)] py-1 border-b border-gray-50 font-[var(--font-weight-body)] text-[var(--text-1)]"
                                >
                                    Placement
                                </Link>

                                {/* Placement Details Accordion */}
                                <div>
                                    <button
                                        onClick={() => setMobilePlacementOpen(!mobilePlacementOpen)}
                                        className="w-full text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between items-center text-[var(--text-1)] font-[var(--font-weight-body)] cursor-pointer"
                                    >
                                        Placement Sections <span>{mobilePlacementOpen ? "−" : "+"}</span>
                                    </button>
                                    {mobilePlacementOpen && (
                                        <div className="pl-4 flex flex-col gap-2.5 mt-2.5 mb-1.5">
                                            <Link href="/placement-page#about-placement" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">About Placement</Link>
                                            <Link href="/placement-page#placement-committee" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Placement Committee</Link>
                                            <Link href="/placement-page#career-support" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Career Support</Link>
                                            <Link href="/placement-page#placement-activities" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Placement Activities</Link>
                                            <Link href="/placement-page#placement-brochure" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Placement Brochure</Link>
                                            <Link href="/placement-page#placement-updates" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Placement Updates</Link>
                                            <Link href="/placement-page#placement-status" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Placement Status</Link>
                                            <Link href="/placement-page#our-recruiters" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Our Recruiters</Link>
                                            <Link href="/placement-page#student-verification" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Student Verification</Link>
                                            <Link href="/placement-page#job-fair" onClick={() => setIsOpen(false)} className="text-[var(--link-size)] text-[var(--text-2)] hover:text-[var(--primary)]">Job Fair</Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href="/faculty-page"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--link-size)] py-1 border-b border-gray-50 block font-[var(--font-weight-body)] text-[var(--text-1)]"
                                >
                                    Faculty
                                </Link>
                                <Link
                                    href="/contact-us"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--link-size)] py-1 font-[var(--font-weight-body)] text-[var(--text-1)]"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}