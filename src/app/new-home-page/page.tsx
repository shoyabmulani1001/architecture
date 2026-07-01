import LifeAtDYPSOA from "@/components/new-home-page/life-at";
import AboutUsPageSection from "@/sections/new-home-page/about-us";
import EventsSection from "@/sections/new-home-page/events";
import FAQAndCounsellor from "@/sections/new-home-page/faq";
import HeroSection from "@/sections/new-home-page/hero-section";
import PlacementSection from "@/sections/new-home-page/placement";
import PlacementSection2 from "@/sections/new-home-page/placement2";
import ProgramsSection from "@/sections/new-home-page/programs";
import TestimonialsSection from "@/sections/new-home-page/testimonials";

export default function HomePageNew() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />
            <AboutUsPageSection />
            <ProgramsSection />
            <PlacementSection />
            <PlacementSection2 />
            <EventsSection />
            <TestimonialsSection />
            <LifeAtDYPSOA />
            <FAQAndCounsellor />

        </>
    );
}
