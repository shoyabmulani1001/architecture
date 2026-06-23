// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const leadership = [
//     {
//         name: "Prof. Rajaram T.Golgire",
//         role: "Dean",
//         designation: "Dean",
//         image: "/faculty/R.T.Golgire_sir.webp",
//         description:
//             "Leading the vision and mission of our school with a commitment to excellence in architecture education and research.",
//         teachingExperience: "17 yrs 8 Months",
//         industryExperience: "30 yrs",
//         department: "School of Architecture",
//         detailedBio:
//             "He is a Practicing Architect started practice as GOLGIRE AND ASSOCIATES from 1995 , Best Practicing Fast Tract Award winner of Pune Municipal Corporation , Completed more that 45 Project in pune region ( Residential , Commercial, Educational and Industrial ) , Published two books in Marathi ( Vastu Vishes, Plot Vishesh) ) for Puplic Land and Building legal awarness etc . having Qualification B.ARCH Grauatation from College of Architecture, Kolhapur, shivaji university in 1992 with 9th Rank , M.ARCH ( General Architecture) Graduation from Bhartividypeeth ,Dhankwqadi, Pune in 2010 , Expert Member of IIA, COA, AICTE, NCERT, FIV.,Panel Member as Examiner of Pune University, Bhartividypeeth, Shivaji university, Academic Experience is 17 Years 8 Month in DYPatil College of Architecture Akurdi Pune and DYPatil School Architecture Lohegaon, Pune.",
//         researchPublications: "2 PAPERS , 2 BOOKS FOR PUBLIC AWARNESS.",
//         keyPublications: "REALE STATE ISSUES FOR PUBLIC AWARENESS",
//         externalLinks: "vastu vishes and plot vishes vaibhavi prakashan pune",
//     },
//     {
//         name: "Prof. Anil Joshi",
//         role: "PROFESSOR DESIGN CHAIR",
//         designation: "Principal",
//         image: "/faculty/Prof-Anil-Joshi.webp",
//         description:
//             "Guiding academic initiatives and fostering a collaborative learning environment for future architects.",
//         teachingExperience: "20 yrs",
//         industryExperience: "25 yrs",
//         department: "School of Architecture",
//         detailedBio:
//             "His specialization lies in Architectural Construction and Project Management, as well as acoustical consulting. With a background in both B.Arch and M.Arch, Professor Joshi has actively participated in various research activities and conferences. Notably, he attended a Training Programme on “Earthquake Resistant Design and Construction” in March 2010 in Kolhapur, emphasizing safety and resilience in architectural practices. Additionally, he explored recent trends in green buildings and products during a National Seminar and Exhibition in February 2009.Professor Joshi’s commitment to education and professional development is evident through his participation in workshops and training programs. He engaged with topics such as the history of architecture, valuation of immovable properties, and energy conservation through climate-responsive architecture. His expertise extends to using AutoCAD, a fundamental tool in architectural design. In the realm of acoustics, Professor Joshi has made significant contributions.He presented research on “Acoustical Treatment for Enhancement of Better Teaching- Learning Process in Classrooms” at the National Conference on Emerging Trends in Engineering, Technology, and Architecture in 2011. His work emphasizes the importance of optimizing classroom acoustics for effective learning experiences.Furthermore, he explored “Adequate Loudness in Classrooms to Enhance Better Teaching - Learning Process & Acoustical Consideration” at a state - level conference on teaching building technology and services.This research highlights the impact of sound quality on educational environments.Another area of focus for Professor Joshi is occupant comfort.His study on “Optimization of Multi - Objective Planning Requirements of Building Envelope W.R.T.Wall Vis - À - Vis of Kolhapur for Occupant’s Thermal Comfort” delves into creating comfortable living spaces by considering architectural elements.Lastly, he investigated “Wood Wool Insulation Boards for Improving Acoustical Quality” during the 17th annual convention and seminar on modern materials for the building industry.This research contributes to enhancing acoustic environments within buildings",
//         researchPublications: "5 PAPERS, 1 BOOK ON DESIGN.",
//         keyPublications: "MODERN ARCHITECTURAL PRINCIPLES",
//         externalLinks: "Architectural Education Association of India",
//     },
// ];

// const faculty = [
//     {
//         name: "Prof. Aparna Mhetras",
//         role: "Professor",
//         image: "/faculty/Aparna-Rahul-Mhetras.webp",
//         type: "barch",
//         teachingExperience: "15 yrs",
//         industryExperience: "5 yrs",
//         department: "School of Architecture",
//         detailedBio: "Specializes in landscape design, urban planning, and architectural research. She has guided numerous design dissertations and contributed to sustainable urban planning guidelines.",
//         researchPublications: "3 Papers in International Journals",
//         keyPublications: "Sustainable Urban Ecosystems",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Shital Golhar",
//         role: "ASSOCIATE PROFESSOR",
//         image: "/faculty/Shital-Golhar.webp",
//         type: "barch",
//         teachingExperience: "12 yrs",
//         industryExperience: "4 yrs",
//         department: "School of Architecture",
//         detailedBio: "Expert in building construction technology and sustainable environmental studies. She focuses on incorporating eco-friendly materials into vernacular architecture.",
//         researchPublications: "2 Papers on Eco-Materials",
//         keyPublications: "Vernacular Construction Guidelines",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Seema Paulzagade",
//         role: "ASSOCIATE PROFESSOR",
//         image: "/faculty/Seema-Paulzagade.webp",
//         type: "march",
//         teachingExperience: "14 yrs",
//         industryExperience: "6 yrs",
//         department: "School of Architecture",
//         detailedBio: "Focused on architectural design theory and conservation methodologies. She has worked on several heritage conservation projects in Maharashtra.",
//         researchPublications: "4 Papers on Heritage Preservation",
//         keyPublications: "Conservation of Historical Precincts",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Sanjita Maindargikar",
//         role: "ASSOCIATE PROFESSOR",
//         image: "/faculty/Sanjita-Maindargikar.webp",
//         type: "march",
//         teachingExperience: "13 yrs",
//         industryExperience: "3 yrs",
//         department: "School of Architecture",
//         detailedBio: "Passionate educator specializing in housing systems and community planning. Actively involved in organizing design studios and community development programs.",
//         researchPublications: "2 Papers on Affordable Housing",
//         keyPublications: "High-Density Community Design Principles",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Amit Ashok Shirke",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Amit-Ashok-Shirke.webp",
//         type: "barch",
//         teachingExperience: "9 yrs",
//         industryExperience: "8 yrs",
//         department: "School of Architecture",
//         detailedBio: "Interests lie in building services, digital architecture, and BIM workflows. He bridges the gap between digital modeling and real-world construction practices.",
//         researchPublications: "1 Paper on BIM Integration",
//         keyPublications: "BIM Workflows for Small Firms",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Swati Solunke",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Swati-Solunke.webp",
//         type: "barch",
//         teachingExperience: "8 yrs",
//         industryExperience: "2 yrs",
//         department: "School of Architecture",
//         detailedBio: "Dedicated to teaching basic design and history of architecture. She encourages students to explore foundational architectural expressions.",
//         researchPublications: "1 Paper on Architectural History",
//         keyPublications: "Historical Foundations of Design",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Pooja Soman",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Pooja-Godbole-Soman.webp",
//         type: "march",
//         teachingExperience: "7 yrs",
//         industryExperience: "5 yrs",
//         department: "School of Architecture",
//         detailedBio: "Specializes in urban design, spatial syntax, and public realm studies. She is interested in how public spaces affect social behavior and community integration.",
//         researchPublications: "2 Papers on Public Space Dynamics",
//         keyPublications: "Spatial Syntax in Urban Neighborhoods",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Sheetal Tiwari",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Sheetal-Tiwari.webp",
//         type: "barch",
//         teachingExperience: "6 yrs",
//         industryExperience: "4 yrs",
//         department: "School of Architecture",
//         detailedBio: "Teaches architectural drawing, interior design, and graphic presentation. She focuses on hand-drafting techniques and mixed-media architectural visualization.",
//         researchPublications: "1 Paper on Design Representation",
//         keyPublications: "Visual Graphics in Architecture",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Aditi Garg",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Aditi-Garg.webp",
//         type: "barch",
//         teachingExperience: "8 yrs",
//         industryExperience: "3 yrs",
//         department: "School of Architecture",
//         detailedBio: "Research focused on climate responsive architecture and energy simulation. She works on optimizing building envelopes for energy efficiency in tropical climates.",
//         researchPublications: "3 Papers on Energy Efficiency",
//         keyPublications: "Climate Responsive Passive Design",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Poorva Sawai",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Poorva-Sawai.webp",
//         type: "march",
//         teachingExperience: "7 yrs",
//         industryExperience: "4 yrs",
//         department: "School of Architecture",
//         detailedBio: "Passionate about history, design studios, and vernacular architecture. She encourages students to study local techniques and traditional craftsmanship.",
//         researchPublications: "2 Papers on Vernacular Systems",
//         keyPublications: "Traditional Craftsmanship in Design Studios",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Diksha Ranpise",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Prof-diksha-ranpsie.webp",
//         type: "march",
//         teachingExperience: "6 yrs",
//         industryExperience: "3 yrs",
//         department: "School of Architecture",
//         detailedBio: "Focuses on environmental design, site planning, and creative thinking. She guides students through environmental impact assessments and green building codes.",
//         researchPublications: "1 Paper on Green Building Codes",
//         keyPublications: "Site Planning and Ecosystem Integration",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Shruti Ingole",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Shruti-Ingole - Copy.webp",
//         type: "barch",
//         teachingExperience: "5 yrs",
//         industryExperience: "4 yrs",
//         department: "School of Architecture",
//         detailedBio: "Interested in architectural representation, digital tools, and design. She coordinates digital visualization laboratories and design studios.",
//         researchPublications: "1 Paper on Digital Pedagogy",
//         keyPublications: "Computational Tools in Design Studio",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Narendra Kalbhor",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/narendra_kalbhor - Copy.webp",
//         type: "barch",
//         teachingExperience: "7 yrs",
//         industryExperience: "5 yrs",
//         department: "School of Architecture",
//         detailedBio: "Teaches structural design, building materials, and estimation methods. He focuses on practical understanding of concrete technology and structural stability.",
//         researchPublications: "2 Papers on Concrete Technology",
//         keyPublications: "Structural Design for Architecture Students",
//         externalLinks: "Council of Architecture Registry",
//     },
//     {
//         name: "Prof. Priyanka Ghodke",
//         role: "ASSISTANT PROFESSOR",
//         image: "/faculty/Priyanka_Ghodke - Copy.webp",
//         type: "march",
//         teachingExperience: "6 yrs",
//         industryExperience: "3 yrs",
//         department: "School of Architecture",
//         detailedBio: "Academician specializing in interior design and spatial psychology. She explores how lighting, color theory, and spatial layout impact cognitive productivity.",
//         researchPublications: "2 Papers on Spatial Psychology",
//         keyPublications: "Cognitive Spaces in Academic Architecture",
//         externalLinks: "Council of Architecture Registry",
//     },
// ];

// const visitingFaculty = [
//     {
//         name: "Prof. Arun G. Atre",
//         role: "VISITING FACULTY",
//         image: "/faculty/Arun-Atre.webp",
//     },

// ];

// const nonTeachingFaculty = [
//     {
//         name: "Mr. Mayuresh Lanjekar",
//         role: "LIBRARIAN",
//         image: "/faculty/Mayuresh-A-Lanjekar.webp",
//     },
//     {
//         name: "Ms. Poonam Kotkar",
//         role: "OFFICE SUPERINTENDENT",
//         image: "/faculty/teacher-51.png",
//     },
//     {
//         name: "Mr. Prashant Jadhav",
//         role: "HEAD CLERK",
//         image: "/faculty/Prashant-Jadhav.webp",
//     },
//     {
//         name: "Mr. Digambar Patil",
//         role: "HEAD CLERK",
//         image: "/faculty/Digambar-Patil.webp",
//     },
//     {
//         name: "Mr. Kartik Rathod",
//         role: "Admission Counselor",
//         image: "/faculty/kartik-rathod.webp",
//     },
// ];

// export default function FacultySection() {
//     const [activeTab, setActiveTab] = useState<"all" | "barch" | "march">("all");
//     const [selectedMember, setSelectedMember] = useState<any | null>(null);

//     const filteredFaculty = faculty.filter((item) => {
//         if (activeTab === "all") return true;
//         return item.type === activeTab;
//     });

//     return (
//         <section className="bg-[var(--primary-bg)] py-20">

//             <div className="max-w-[1230px] mx-auto px-6">

//                 {/* Leadership */}
//                 <div className="mb-24">

//                     <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">

//                         <div>
//                             <h4 className="text-[var(--text-1)]">
//                                 Leadership
//                             </h4>

//                             <p className="text-[var(--text-2)] max-w-lg">
//                                 Meet the academic leaders guiding our vision, fostering innovation,
//                                 and shaping the future of architectural education.
//                             </p>
//                         </div>

//                     </div>

//                     <div className="grid lg:grid-cols-2 gap-20">
//                         {leadership.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="group transition-all duration-300"
//                             >
//                                 <div className="grid md:grid-cols-[180px_1fr] gap-6">

//                                     <div className="relative h-[220px] overflow-hidden rounded-[var(--r-lg-btn)] bg-[var(--secondary-bg)]">
//                                         <Image
//                                             src={item.image}
//                                             alt={item.name}
//                                             fill
//                                             className="object-cover transition duration-500"
//                                         />
//                                     </div>

//                                     <div className="flex flex-col justify-center items-start">

//                                         {/* <p className="uppercase text-[var(--text-2)] mb-1">
//                                             {item.designation}
//                                         </p> */}

//                                         <h6 className=" text-[var(--text-1)]">
//                                             {item.name}
//                                         </h6>

//                                         <p className="text-[var(--text-2)] mt-0.5">
//                                             {item.role}
//                                         </p>

//                                         <p className="mt-4 text-[var(--text-2)] line-clamp-3">
//                                             {item.description}
//                                         </p>

//                                         <button
//                                             onClick={() => setSelectedMember(item)}
//                                             className="mt-4 uppercase text-[var(--primary)] hover:underline inline-flex items-center gap-1"
//                                         >
//                                             Know More <span>→</span>
//                                         </button>
//                                     </div>

//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Faculty Heading */}
//                 <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">

//                     <div>
//                         <h4 className="text-[var(--text-1)]">
//                             Our  Faculty
//                         </h4>

//                         <p className="text-[var(--text-2)] max-w-lg">
//                             Meet our dedicated faculty members who bring expertise,
//                             experience, and passion to shape future architects.
//                         </p>
//                     </div>

//                 </div>

//                 {/* Tabs */}
//                 <div className="flex gap-10 border-b border-gray-200 mb-10">
//                     <button
//                         onClick={() => setActiveTab("all")}
//                         className={`pb-4 border-b-2 transition ${activeTab === "all"
//                             ? "text-[var(--text-1)] border-[var(--text-1)]"
//                             : "text-[var(--text-2)] border-transparent hover:text-[var(--text-1)]"
//                             }`}
//                     >
//                         All Faculty
//                     </button>

//                     <button
//                         onClick={() => setActiveTab("barch")}
//                         className={`pb-4 border-b-2 transition ${activeTab === "barch"
//                             ? "text-[var(--text-1)] border-[var(--text-1)]"
//                             : "text-[var(--text-2)] border-transparent hover:text-[var(--text-1)]"
//                             }`}
//                     >
//                         B.Arch Faculty
//                     </button>

//                     <button
//                         onClick={() => setActiveTab("march")}
//                         className={`pb-4 border-b-2 transition ${activeTab === "march"
//                             ? "text-[var(--text-1)] border-[var(--text-1)]"
//                             : "text-[var(--text-2)] border-transparent hover:text-[var(--text-1)]"
//                             }`}
//                     >
//                         M.Arch Faculty
//                     </button>
//                 </div>

//                 {/* Faculty Grid */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">

//                     {filteredFaculty.map((item, index) => (
//                         <div
//                             key={index}
//                             className="group cursor-pointer"
//                             onClick={() => setSelectedMember(item)}
//                         >
//                             <div className="relative h-[220px] overflow-hidden rounded-[var(--r-lg-btn)] bg-gray-100 mb-3">
//                                 <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     fill
//                                     className="object-cover transition duration-500 group-hover:scale-105"
//                                 />
//                             </div>

//                             <div>
//                                 <h6 className="text-[var(--text-1)]">
//                                     {item.name}
//                                 </h6>

//                                 <p className="uppercase text-[var(--text-2)] mt-1">
//                                     {item.role}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {activeTab === "all" && (
//                     <>
//                         {/* Visiting Faculty Section */}
//                         <div className="my-12">
//                             <div className="flex items-center gap-4 mb-9">
//                                 <h4 className=" text-[var(--text-1)]">
//                                     Visiting Faculty
//                                 </h4>
//                             </div>

//                             <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
//                                 {visitingFaculty.map((item, index) => (
//                                     <div
//                                         key={index}
//                                         className="group cursor-pointer"
//                                         onClick={() => setSelectedMember(item)}
//                                     >
//                                         <div className="relative h-[220px] overflow-hidden rounded-[var(--r-btn)] mb-3">
//                                             <Image
//                                                 src={item.image}
//                                                 alt={item.name}
//                                                 fill
//                                                 className="object-cover transition duration-500"
//                                             />
//                                         </div>

//                                         <div>
//                                             <h6 className="text-[var(--text-1)]">
//                                                 {item.name}
//                                             </h6>

//                                             <p className="text-[var(--text-2)] mt-1">
//                                                 {item.role}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Non-Teaching Faculty Section */}
//                         <div className="my-12">
//                             <div className="flex items-center gap-4 mb-9">
//                                 <h4 className=" text-[var(--text-1)]">
//                                     Non-Teaching Staff
//                                 </h4>
//                             </div>

//                             <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
//                                 {nonTeachingFaculty.map((item, index) => (
//                                     <div
//                                         key={index}
//                                         className="group cursor-pointer"
//                                         onClick={() => setSelectedMember(item)}
//                                     >
//                                         <div className="relative h-[220px] overflow-hidden rounded-[var(--r-btn)] bg-gray-100 mb-3">
//                                             <Image
//                                                 src={item.image}
//                                                 alt={item.name}
//                                                 fill
//                                                 className="object-cover transition duration-500"
//                                             />
//                                         </div>

//                                         <div>
//                                             <h6 className="text-[var(--text-1)]">
//                                                 {item.name}
//                                             </h6>

//                                             <p className="text-[var(--text-2)] mt-1">
//                                                 {item.role}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </>
//                 )}

//             </div>

//             {/* Popup Modal */}
//             {selectedMember && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//                     <div className="relative bg-white rounded-[var(--r-btn)] shadow-2xl max-w-4xl w-full overflow-hidden transition-all transform scale-100 animate-fadeIn h-[500px] max-h-[90vh]">
//                         {/* Close button */}
//                         <button
//                             onClick={() => setSelectedMember(null)}
//                             className="absolute top-4 right-4 z-10 p-2 text-[var(--text-1)] hover:text-[var(--primary)] transition bg-white/80 rounded-full"
//                         >
//                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>

//                         <div className="grid md:grid-cols-[340px_1fr] h-full">
//                             <div className="relative h-[300px] md:h-full bg-gray-100">
//                                 <Image
//                                     src={selectedMember.image}
//                                     alt={selectedMember.name}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div className="p-8 flex flex-col h-full overflow-y-auto">
//                                 <h3 className="text-[var(--text-1)]">
//                                     {selectedMember.name}
//                                 </h3>
//                                 <p className="text-[var(--primary)] uppercase mt-1">
//                                     {selectedMember.role}
//                                 </p>
//                                 <div className="w-12 h-[2px] bg-[var(--text-1)] my-4 shrink-0"></div>

//                                 <div className="flex flex-col gap-6 text-[var(--text-2)]">
//                                     {/* Top Info Grid */}
//                                     <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-5">
//                                         <div>
//                                             <p className="text-[var(--text-1)]">Designation:</p>
//                                             <p className="text-[var(--text-2)]">{selectedMember.role}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-[var(--text-1)]">Department:</p>
//                                             <p className="text-[var(--text-2)]">{selectedMember.department || "School of Architecture"}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-[var(--text-1)]">Teaching Experience:</p>
//                                             <p className="text-[var(--text-2)]">{selectedMember.teachingExperience || selectedMember.experience || "N/A"}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-[var(--text-1)]">Industry Experience:</p>
//                                             <p className="text-[var(--text-2)]">{selectedMember.industryExperience || "N/A"}</p>
//                                         </div>
//                                     </div>

//                                     {/* Detailed Biography */}
//                                     {(selectedMember.detailedBio || selectedMember.description) && (
//                                         <div className="border-b border-gray-100 pb-5">
//                                             <p className="text-[var(--text-2)]">
//                                                 {selectedMember.detailedBio || selectedMember.description}
//                                             </p>
//                                         </div>
//                                     )}

//                                     {/* Research Publications */}
//                                     {selectedMember.researchPublications && (
//                                         <div className="border-b border-gray-100 pb-5">
//                                             <p className="text-[var(--text-1)]">Research Publications:</p>
//                                             <p className="text-[var(--text-2)]">
//                                                 {selectedMember.researchPublications}
//                                             </p>
//                                         </div>
//                                     )}

//                                     {/* Key Publications */}
//                                     {selectedMember.keyPublications && (
//                                         <div className="border-b border-gray-100 pb-5">
//                                             <p className="text-[var(--text-1)] mb-1">Key Publications:</p>
//                                             <p className="text-[var(--text-2)]">
//                                                 {selectedMember.keyPublications}
//                                             </p>
//                                         </div>
//                                     )}

//                                     {/* External Links */}
//                                     {selectedMember.externalLinks && (
//                                         <div>
//                                             <p className="text-[var(--text-1)] mb-1">External Links:</p>
//                                             <p className="text-[var(--text-2)] italic">
//                                                 {selectedMember.externalLinks}
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }






import FacultyComponent from "@/components/faculty/faculty";

export default function FacultySection() {
    return <FacultyComponent />;
}
