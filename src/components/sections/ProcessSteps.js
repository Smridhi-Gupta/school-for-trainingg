// import React from "react";
// import Image from "next/image";
// import icon1 from "./../../assets/Home-career-journey/career-1.png";
// import icon2 from "./../../assets/Home-career-journey/career-2.png";
// import icon3 from "./../../assets/Home-career-journey/career-3.png";
// import icon4 from "./../../assets/Home-career-journey/career-4.png";
// import icon5 from "./../../assets/Home-career-journey/career-5.png";
// import icon6 from "./../../assets/Home-career-journey/career-6.png";

// const steps = [
//   {
//     id: 1,
//     title: "Plan Your Path",
//     desc: "Not sure where to begin? Our advisors help you identify your strengths and match them with career-aligned tech programs.",
//     icon: icon1,
//   },
//   {
//     id: 2,
//     title: "Enroll & Access",
//     desc: "Sign up in minutes. Get full access to live classes, lab environments, and a structured learning schedule.",
//     icon: icon2,
//   },
//   {
//     id: 3,
//     title: "Live Classes, Real Practice",
//     desc: "Engaging, instructor-led sessions twice a week — backed by hands-on labs, assignments, and real case studies.",
//     icon: icon3,
//   },
//   {
//     id: 4,
//     title: "Internship With Impact",
//     desc: "Work on real projects with real teams. Our partner companies give you a real-world internship experience that counts.",
//     icon: icon4,
//   },
//   {
//     id: 5,
//     title: "Crack the Hiring Code",
//     desc: "Resume rewrites, mock interviews, job strategy — we prep you not just to apply, but to stand out and succeed.",
//     icon: icon5,
//   },
//   {
//     id: 6,
//     title: "Land the Role",
//     desc: "We work with you until you’re hired — leveraging industry contacts, job boards, and referrals to place you where you belong.",
//     icon: icon6,
//   },
// ];

// const ProcessSteps = () => {
//   return (
//     <section className="bg-white py-24">
//       <div className="container mx-auto px-40">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h3 className="text-sm font-semibold text-[#0F3069] uppercase tracking-wide">
//             From Learner to Leader
//           </h3>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3069] mt-2">
//             Your 6-Phase Career Journey
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg font-medium">
//             A structured roadmap designed to guide you from the very beginning
//             of your journey to a successful career.
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="grid md:grid-cols-3 gap-12">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="relative bg-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center hover:shadow-2xl hover:border-[#FF6575] transition transform hover:-translate-y-2"
//             >
//               {/* Floating Icon */}
//               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center shadow-lg overflow-hidden">
//                 <Image
//                   src={step.icon}
//                   alt={step.title + " Icon"}
//                   className="object-contain"
//                   width={40}
//                   height={40}
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl md:text-2xl font-bold text-[#0F3069] mt-8 mb-4">
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-base leading-relaxed font-medium">
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSteps;

import React from "react";

const steps = [
  {
    id: 1,
    title: "Plan Your Path",
    desc: "Not sure where to begin? Our advisors help you identify your strengths and match them with career-aligned tech programs.",
  },
  {
    id: 2,
    title: "Enroll & Access",
    desc: "Sign up in minutes. Get full access to live classes, lab environments, and a structured learning schedule.",
  },
  {
    id: 3,
    title: "Live Classes, Real Practice",
    desc: "Engaging, instructor-led sessions twice a week — backed by hands-on labs, assignments, and real case studies.",
  },
  {
    id: 4,
    title: "Internship With Impact",
    desc: "Work on real projects with real teams. Our partner companies give you a real-world internship experience that counts.",
  },
  {
    id: 5,
    title: "Crack the Hiring Code",
    desc: "Resume rewrites, mock interviews, job strategy — we prep you not just to apply, but to stand out and succeed.",
  },
  {
    id: 6,
    title: "Land the Role",
    desc: "We work with you until you’re hired — leveraging industry contacts, job boards, and referrals to place you where you belong.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-8">
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left side: Subheading + Heading */}
            <div className="text-left">
              <h3 className="text-sm font-semibold text-[#FF6575] uppercase tracking-wide">
                From Learner to Leader
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3069] mt-2">
                Your 6-Phase Career Journey
              </h2>
            </div>

            {/* Right side: Paragraph + Button */}
            <div className="text-left">
              <p className="text-gray-600 text-base font-medium max-w-md">
                A structured roadmap designed to guide you from the very
                beginning of your journey to a successful career.
              </p>
              <div className="mt-4">
                <button className="bg-[#FF6575] hover:bg-[#e45061] text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Steps in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center hover:shadow-xl hover:border-[#FF6575] transition transform hover:-translate-y-2"
            >
              {/* Title */}
              <h3 className="text-2xl md:text-xl font-bold text-[#0F3069] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-md leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
