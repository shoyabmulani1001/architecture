import Link from "next/link";

export default function Home() {
  const pageLinks = [
    { name: "Home Page", href: "/home-page" },
    { name: "New Home Page", href: "/new-home-page" },
    { name: "Faculty Page", href: "/faculty-page" },
    { name: "Events Page", href: "/events-page" },
    { name: "Placement Page", href: "/placement-page" },
    { name: "Placement New Page", href: "/placementnew-page" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <main className="min-h-screen py-20 px-6 bg-[var(--primary-bg)] flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-100">
        <h1 className="text-3xl font-bold text-[var(--text-1)] mb-8 text-center border-b pb-4">
          All Pages Directory
        </h1>
        
        <div className="flex flex-col gap-6">
          {pageLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-xl font-medium text-[var(--text-1)] hover:text-[var(--primary)] transition-colors block p-2 rounded-lg hover:bg-gray-50">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}