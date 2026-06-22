import TestimonialSlider from "@/components/home-page/testimonials";

export default function GraduateFeedback() {
    const testimonials = [
        {
            id: 1,
            name: "Marry Jaen",
            role: "Marketing Coordinator",
            text: "The university helped me secure internships, guided my research and gave me experiences that shaped my professional path.",
            rating: 5,
            imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        },
        {
            id: 2,
            name: "Annette Black",
            role: "Medical Assistant",
            text: "The multicultural environment, mentorship, and student support services helped me thrive both academically and personally.",
            rating: 5,
            imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        },
        {
            id: 3,
            name: "Alen Walker",
            role: "Manager",
            text: "One of the best learning experiences with supportive faculty and excellent exposure.",
            rating: 5,
            imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        },
        {
            id: 4,
            name: "John Smith",
            role: "Designer",
            text: "The faculty support and practical learning opportunities helped me gain confidence in my career path.",
            rating: 5,
            imgUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
        },
        {
            id: 5,
            name: "Sophia Lee",
            role: "Developer",
            text: "Amazing experience, excellent professors and a truly great learning environment.",
            rating: 5,
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        },
    ];

    return (
        <section className="bg-[var(--primary-bg)] py-20">
            <div className="max-w-[1230px] mx-auto px-6">

                <div className="text-center mb-9 ">
                    <h2 className="mb-4 text-[var(--text-1)]">
                        Graduate Feedback
                    </h2>

                    <p className="text-[var(--text-2)] max-w-2xl mx-auto">
                        A look into how our students grow,
                        transform and develop skills to make
                        an impact.
                    </p>
                </div>

                <TestimonialSlider testimonials={testimonials} />

            </div>
        </section>
    );
}