"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-white select-none">
      {/* --- TOP BAR (Hidden on Mobile & Tablet) --- */}
      <div className="bg-[linear-gradient(to_right,#2d2f7f,#681e5d,#A43154,#DB2A31)] text-white">
        <div className="hidden lg:block mx-auto px-4 lg:px-8 h-12 flex items-center justify-between">
          <div className="h-full flex items-center justify-between w-full">
            {/* Welcome Text / Icon */}
            <div className="flex items-center gap-2 pl-[180px] lg:pl-[220px] xl:pl-[240px]">
              <span className="inline-flex items-center gap-2 font-[var(--font-weight-body)] text-[var(--body-size)] ">
                {/* Simple SVG Hat Icon matching image */}
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.18 13.04l6.82 3.72 6.82-3.72C17.7 15.17 15.03 16 12 16s-5.7-.83-6.82-2.96z" />
                </svg>
                Welcome To Dr. D Y Patil School of Architecture Varale, Talegaon
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center xl:gap-4 ml-auto sm:gap-4">
              {[
                "DTE CODE: 6245",
                "Accredited by NAAC with  'A'  Grade",
                "MH56",
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[var(--small-size)] font-[var(--font-weight-body)] opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <div className="relative mx-auto px-4 lg:px-8 h-[90px] bg-white flex items-center justify-between">
        {/* Left Aligned Hanging Ribbon Logo Badge */}
        <div className="shrink-0 z-20">
          <Link href="/" className="logo">
            <img
              src="/Logo/logo.png"
              alt="logo"
              className="lg:w-44 w-28 h-36 lg:h-52 md:w-32 md:h-36 md:mt-20 lg:mt-12 mt-18"
            />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-10 text-left xl:mr-32 2xl:mr-[210px] min-[2200px]:mr-[1250px] lg:mr-8 ml-auto ">
          <Link href="/">
            <span
              className="text-[var(--text-1)] hover:text-[#3E4095] transition-colors"
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
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-[var(--text-1)] hover:text-[#3E4095] inline-flex items-center gap-1">
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
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                About DYPSOA
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Our Inspiration
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Vision & Mission
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Director's Desk
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Key Features
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Committees
              </Link>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-[var(--text-1)] inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Academics
              <svg
                className="w-3 h-3"
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
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                B.Arch
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                M.Arch
              </Link>
            </div>
          </div>

          {/* Dropdown 3 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-[var(--text-1)] inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Placement
              <svg
                className="w-3 h-3"
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
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/placement-page"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                About Placement
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Committees
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Activities
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Updates
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Our Recruiters
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Placement Gallery
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Career Support
              </Link>
            </div>
          </div>

          <Link href="/faculty-page">
            <span
              className="text-[var(--text-1)] hover:text-[#3E4095] transition-colors"
              style={{
                fontSize: "var(--body-size)",
                lineHeight: "var(--body-line-height)",
                fontWeight: "var(--font-weight-body)",
              }}
            >
              Faculty
            </span>
          </Link>

          {/* Dropdown 5 */}
          <div className="relative group cursor-pointer py-2">
            <span className="text-[var(--link-size)] font-[var(--font-weight-body)] text-[var(--text-1)] inline-flex items-center gap-1 hover:text-[#3E4095] transition-colors">
              Events & News
              <svg
                className="w-3 h-3"
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
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-[var(--r-btn)] border border-[var(--card-border)] py-2 min-w-[200px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Upcoming Events
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Workshops
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Guest Lectures
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                Conference
              </Link>
              <Link
                href="/vision"
                className="block px-4 py-2 text-[var(--small-size)] text-[var(--text-2)] hover:bg-[var(--secondary-bg)]"
              >
                News & Updates
              </Link>
            </div>
          </div>

          <Link href="/contact-us">
            <span
              className="text-[var(--text-1)] hover:text-[#3E4095] transition-colors"
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
        <div className="flex items-center gap-4 ml-auto lg:ml-0 shrink-0 z-20">
          {/* Apply Now CTA Button - Visible only on Desktop screens (hidden on Mobile & Tablet) */}
          <Link
            href="/apply"
            className="hidden lg:flex btn-md bg-[#3E4095] hover:bg-[#2A2C6B] text-white px-6 py-3 rounded-[var(--r-lg)] items-center gap-2 transition-colors shadow-sm text-center"
            style={{ fontSize: "var(--btn-md-size)" }}
          >
            Apply Now
            <svg
              className="w-4 h-4 stroke-[2.5]"
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
          {/* className="flex lg:hidden p-2  transition-colors focus:outline-none" */}
          {/* 3-Dash Mobile Hamburger Toggle Icon Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col lg:hidden  "
          >
            <div className="bg-white flex flex-col gap-2">
              <span className="h-1 bg-black rounded-full block w-12 "></span>{" "}
              <span className="h-1 bg-black rounded-full block w-12 "></span>{" "}
              <span className="h-1 bg-black rounded-full block w-12 "></span>{" "}
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE ACCORDION DRAWER --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-white border-t border-[var(--card-border)] shadow-xl z-50 transition-all">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-[var(--link-size)] py-1 border-b border-gray-50"
            >
              Home
            </Link>
            <div className="text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between text-[#8a1529]">
              About Us <span>+</span>
            </div>
            <div className="text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between">
              Pages <span>+</span>
            </div>
            <div className="text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between">
              Academics <span>+</span>
            </div>
            <div className="text-[var(--link-size)] py-1 border-b border-gray-50 flex justify-between">
              Blog <span>+</span>
            </div>
            <Link
              href="/faculty-page"
              className="text-[var(--link-size)] py-1 border-b border-gray-50 block"
            >
              Faculty
            </Link>
            <Link
              href="/contact-us"
              className="text-[var(--link-size)] py-1"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}