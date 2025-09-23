// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// // Import images as variables
// import program1 from "./../../assets/programs-offer/program-1.webp";
// import program2 from "./../../assets/programs-offer/program-2.webp";
// import program3 from "./../../assets/programs-offer/program-3.webp";
// import program4 from "./../../assets/programs-offer/program-4.webp";
// import program5 from "./../../assets/programs-offer/program-5.webp";

// const courses = [
//   {
//     id: 1,
//     slug: "qa-automation",
//     title: "Full Stack QA Engineering",
//     weeks: "16 Weeks",
//     desc: "Manual + automation + frameworks — everything from basics to advanced testing tools. ",
//     img: program1,
//   },
//   {
//     id: 2,
//     slug: "cybersecurity",
//     title: "Cybersecurity Engineering",
//     weeks: "20 Weeks",
//     desc: "Threat detection, defense strategies, and hands-on security protocols. ",
//     img: program2,
//   },
//   {
//     id: 3,
//     slug: "ai-business-analytics",
//     title: "Business & Data Analytics: Integrated with AI",
//     weeks: "16 Weeks",
//     desc: "Analyze and visualize data using AI tools, drive insights, and help businesses make data-driven decisions. From spreadsheets to machine learning — become a data-informed decision maker.",
//     img: program3,
//   },
//   {
//     id: 4,
//     slug: "Introduction to AI",
//     title: "Intro to Artificial Intelligence",
//     weeks: "12 Weeks",
//     desc: "Learn how AI works, where it’s going, and how to start using it now.",
//     img: program4,
//   },
//   {
//     id: 5,
//     slug: "computer-fundamentals",
//     title: "Basic computer training",
//     weeks: "12 Weeks",
//     desc: "A complete foundation for tech beginners. Get the basics, get confident.",
//     img: program5,
//   },
// ];

// const ChooseCourse = () => {
//   return (
//     <section className="bg-gray-50 py-16 px-20">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
//             IT Training
//           </h3>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
//             Programs We Offer
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Designed for students, career-switchers, and professionals aiming to
//             upskill fast.
//           </p>
//         </div>

//         {/* Zig-Zag Layout */}
//         <div className="space-y-16">
//           {courses.map((course, idx) => (
//             <div
//               key={course.id}
//               className={`grid md:grid-cols-2 gap-8 items-center ${
//                 idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
//               }`}
//             >
//               {/* Image */}
//               <div className="w-full h-56 rounded-lg shadow-md border border-gray-200 overflow-hidden relative">
//                 <Image
//                   src={course.img}
//                   alt={course.title}
//                   className="object-cover object-to"
//                   fill
//                 />
//               </div>

//               {/* Card */}
//               <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {course.title}
//                 </h3>
//                 <p className="text-green-600 font-semibold mb-2">
//                   {course.weeks}
//                 </p>
//                 <p className="text-gray-600 mb-4">{course.desc}</p>

//                 {/* ✅ Course Link */}
//                 <Link href={`/courseDetails`}>
//                   <button className="bg-gray-800 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 transition">
//                     View Course
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChooseCourse;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import courses from "./../../db/courses.json";



// const courses = [
//   {
//     id: 1,
//     slug: "qa-automation",
//     title: "Full Stack QA Engineering",
//     weeks: "16 Weeks",
//     desc: "Manual + automation + frameworks — everything from basics to advanced testing tools. ",
//     img: program1,
//   },
//   {
//     id: 2,
//     slug: "cybersecurity",
//     title: "Cybersecurity Engineering",
//     weeks: "20 Weeks",
//     desc: "Threat detection, defense strategies, and hands-on security protocols. ",
//     img: program2,
//   },
//   {
//     id: 3,
//     slug: "ai-business-analytics",
//     title: "Business & Data Analytics: Integrated with AI",
//     weeks: "16 Weeks",
//     desc: "Analyze and visualize data using AI tools, drive insights, and help businesses make data-driven decisions. From spreadsheets to machine learning — become a data-informed decision maker.",
//     img: program3,
//   },
//   {
//     id: 4,
//     slug: "Introduction to AI",
//     title: "Intro to Artificial Intelligence",
//     weeks: "12 Weeks",
//     desc: "Learn how AI works, where it’s going, and how to start using it now.",
//     img: program4,
//   },
//   {
//     id: 5,
//     slug: "computer-fundamentals",
//     title: "Basic computer training",
//     weeks: "12 Weeks",
//     desc: "A complete foundation for tech beginners. Get the basics, get confident.",
//     img: program5,
//   },
// ];

const ChooseCourse = () => {
  console.log(courses);
  return (
    <section className="bg-gray-50 py-16 px-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            IT Training
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Programs We Offer
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Designed for students, career-switchers, and professionals aiming to
            upskill fast.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="space-y-16">
          {courses.courses.map((course, idx) => (
            <div
              key={course.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full h-56 rounded-lg shadow-md border border-gray-200 overflow-hidden relative">
                <Image
                  src={course.img}
                  alt={course.title}
                  className="object-cover object-top"
                  fill
                />
              </div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {course.weeks}
                </p>
                <p className="text-gray-600 mb-4">{course.subtitle}</p>

                {/* ✅ Course Link */}
                <Link href={`/courseDetails/${course.title}`}>
                  <button className="bg-gray-800 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 transition">
                    View Course
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCourse;
