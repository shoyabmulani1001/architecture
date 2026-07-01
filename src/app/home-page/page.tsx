import Image from "next/image";
import Hero from "@/sections/home-page/hero-section";
import AboutUs from "@/sections/home-page/aboutUs-section";
import Programs from "@/sections/home-page/programs";
import CampusLife from "@/sections/home-page/campus-life";
import FoundersSection from "@/sections/home-page/founder-section";
import EventsSection from "@/sections/home-page/events-section";
import Testimonials from "@/sections/home-page/testimonials";
import ProgramsSection from "@/sections/home-page/programs2";
import StudentPlacements from "@/sections/home-page/student-placement";
import FAQAndCounsellor from "@/sections/home-page/faq-section";
import Collaboration from "@/sections/home-page/collaboration";
import CollaborationSection from "@/sections/home-page/collaboration-slider";
import LifeAtDYPSOASection from "@/sections/home-page/life-at";
import EventsSectionNew from "@/sections/home-page/events-new";

export default function FacultyPage() {
    return (
        <>
            {/* Hero Section */}
            <Hero />
            <CollaborationSection />
            <AboutUs />

            <Collaboration />
            {/* <FoundersSection /> */}
            {/* <Programs /> */}
            <ProgramsSection />
            <StudentPlacements />
            <EventsSectionNew />
            <EventsSection />
            <Testimonials />
            <CampusLife />
            <LifeAtDYPSOASection />
            <FAQAndCounsellor />
        </>
    );
}
