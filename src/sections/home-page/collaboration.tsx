import CollaborationTabs from "@/components/home-page/collaboration";

export default function CollaborationSection() {
    const sections = {
        approved: {
            title: "Approved By",
            logos: [
                {
                    src: "/Home-page/coa.png",
                    alt: "COA",
                },
                {
                    src: "/Home-page/ugc-logo.png",
                    alt: "UGC",
                },
            ],
        },

        member: {
            title: "Member Of",
            logos: [
                {
                    src: "/Home-page/IIA-LOGO.png",
                    alt: "IIA",
                },
                {
                    src: "/Home-page/IGBC-logo.png",
                    alt: "IGBC",
                },
                {
                    src: "/Home-page/MASA-LOGO-new.png",
                    alt: "MASA",
                },
            ],
        },

        collaborations: {
            title: "Collaborations",
            logos: [
                {
                    src: "/Home-page/Taylors-Logo_new.jpg",
                    alt: "Taylor's University",
                },
                {
                    src: "/Home-page/logo-builders-association-of-India-.png",
                    alt: "Builders Association",
                },
                {
                    src: "/Home-page/CDSA-logo-with-Name-transperant-2.png",
                    alt: "CDSA",
                },
            ],
        },
    };

    return (
        <section className="bg-[var(--secondary-bg)] py-20">
            <div className="max-w-[1230px] mx-auto px-6">

                <div className="text-center mb-9">
                    <h2 className="mt-4 text-[var(--text-1)]">
                        Accreditation & Collaborations
                    </h2>

                    <p className="text-[var(--text-2)] max-w-2xl mx-auto">
                        Building excellence through academic recognition,
                        professional memberships, and global collaborations.
                    </p>
                </div>

                <CollaborationTabs sections={sections} />

            </div>
        </section>
    );
}