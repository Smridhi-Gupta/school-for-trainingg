"use client";
import React from "react";
import { ShieldCheck } from "lucide-react";

const Journey = () => {
  return (
    <section className="bg-gray-50 text-gray-900 pb-20 px-20 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-[#FF6575] font-semibold uppercase tracking-wide">
          Our Journey
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Check Out Our Academy History
        </h2>
      </div>

      {/* Journey Cards with Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative px-14">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex-1 relative">
          <h4 className="text-2xl font-bold mb-2 text-[#0F3069]">Founded in 2012</h4>
          <p className="leading-relaxed text-gray-700">
            Transfotech Academy was founded by{" "}
            <span className="font-semibold">Sheikh Galib Rahman</span> and{" "}
            <span className="font-semibold">Pradeep Macharla</span> with a
            mission to promote innovation, automation, and technology.
          </p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex items-center justify-center w-12 h-12 text-[#FF6575] text-3xl font-bold">
          →
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex-1 relative">
          <h4 className="text-2xl font-bold mb-2 text-[#0F3069]">Expansion & Recognition</h4>
          <p className="leading-relaxed text-gray-700">
            Within 5 years, we gained a reputation in the IT industry, opened a
            campus in Jamaica, and offered tailored IT courses. Affiliated with{" "}
            <span className="font-semibold">Queens College, CUNY</span> and
            recognized as the{" "}
            <span className="text-gray-500 font-bold">#1 Academy for QA Testing</span>.
          </p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex items-center justify-center w-12 h-12 text-[#FF6575] text-3xl font-bold">
          →
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex-1 relative">
          <h4 className="text-2xl font-bold mb-2 text-[#0F3069]">Six-Step Process & Global Vision</h4>
          <p className="leading-relaxed text-gray-700">
            Our unique six-step process ensures students gain practical skills
            and confidence. We aim to contribute to digitalization by providing
            academic-style IT courses both physically and online.
          </p>
        </div>
      </div>

      {/* Verification Section */}
      <div className="bg-white border w-11/12 mx-auto border-[#FF6575] rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-6 mt-20">
        <div className="flex-shrink-0 bg-[#FF6575] rounded-full p-4">
          <ShieldCheck className="w-10 h-10 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            <span className="text-[#FF6575] font-extrabold animate-blink">
              E-Verified
            </span>{" "}
            Transfotech Academy
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We have undergone a rigorous verification process to confirm our
            identity and credibility, ensuring trust and confidence for students
            and partners.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Proudly achieving this milestone, we continue delivering the highest
            quality IT courses.
          </p>
        </div>
      </div>

      {/* Blink animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Journey;
