// "use client";
// import React from "react";

// const achievements = [
//   {
//     number: "3000+",
//     label: "Trained and Thriving",
//   },
//   {
//     number: "90%",
//     label: "Course Completion Rate",
//   },
//   {
//     number: "80%",
//     label: "Students Land Jobs Within 6 Months",
//   },
//   {
//     number: "10,000+",
//     label: "Hours of Live Instruction Delivered",
//   },
// ];

// const Achievements = () => {
//   return (
//     <section className="bg-gray-50 py-20 px-6 md:px-20">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <p className="text-gray-500 font-semibold uppercase tracking-wide">
//           Real projects, real companies, real experience
//         </p>
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
//           What Sets Us Apart
//         </h2>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//         {achievements.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl hover:scale-105 
//                        transform transition-all duration-300 border border-gray-200"
//           >
//             <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">
//               {item.number}
//             </h3>
//             <p className="text-gray-600 mt-2 font-medium">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;




"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 20; // ms
    const steps = Math.ceil(duration / incrementTime);
    const increment = end / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function Achievements() {
  return (
    <section className="bg-[#0d2b66] text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div>
          <p className="text-[#FF6575] font-semibold mb-2">HAVE A LOOK</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Take The Next Step <br /> Toward Your Personal <br /> And
            Professional Goals
          </h2>
          <p className="text-gray-300 mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est.
          </p>
          <button className="bg-[#FF6575] text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-600 transition">
            START LEARNING NOW
          </button>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-[#FF6575] font-semibold mb-2">SOME FUN FACT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Great Achievement
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white text-[#0d2b66] p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-[#FF6575]">
                <Counter end={3000} suffix="K+" />
              </h3>
              <p className="mt-2 text-sm font-medium">Trained and Thriving</p>
            </div>
            <div className="bg-white text-[#0d2b66] p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-[#FF6575]">
                <Counter end={90} suffix="%" />
              </h3>
              <p className="mt-2 text-sm font-medium">Course Completion Rate</p>
            </div>
            <div className="bg-white text-[#0d2b66] p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-[#FF6575]">
                <Counter end={80} suffix="%" />
              </h3>
              <p className="mt-2 text-sm font-medium">Students Land Jobs Within 6 Months</p>
            </div>
            <div className="bg-white text-[#0d2b66] p-6 rounded-lg shadow text-center">
              <h3 className="text-3xl font-bold text-[#FF6575]">
                <Counter end={10000} suffix="+" />
              </h3>
              <p className="mt-2 text-sm font-medium">Hours of Live Instruction Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
