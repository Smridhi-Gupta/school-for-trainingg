import React from "react";
import { ShieldCheck } from "lucide-react";

const Journey = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-gray-500 font-semibold uppercase tracking-wide">
          Our Journey
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Check Out Our Academy History
        </h2>
      </div>

      {/* Timeline / Journey Points */}
      <div className="relative border-l-6 border-green-600 ml-4 space-y-10">
        {/* Point 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative -left-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Founded in 2012
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Transfotech Academy was founded by{" "}
            <span className="font-semibold">Sheikh Galib Rahman</span>
            and <span className="font-semibold">Pradeep Macharla</span> with a
            mission to promote innovation, automation, and technology.
          </p>
        </div>

        {/* Point 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative -left-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Expansion & Recognition
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Within 5 years, we gained a reputation in the IT industry, opened a
            campus in Jamaica, and offered tailored IT courses. Affiliated with{" "}
            <span className="font-semibold">Queens College, CUNY</span> and
            recognized as the{" "}
            <span className="text-gray-500 font-bold">
              #1 Academy for QA Testing
            </span>
            .
          </p>
        </div>

        {/* Point 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative -left-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Six-Step Process & Global Vision
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Our unique six-step process ensures students gain practical skills
            and confidence. We aim to contribute to digitalization by providing
            academic-style IT courses both physically and online.
          </p>
        </div>
      </div>

      {/* Verification Section */}
      <div className="bg-green-50 border w-11/12 mx-auto border-green-300 rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-6 mt-20 animate-pulse">
        <div className="flex-shrink-0 bg-green-200 rounded-full p-4">
          <ShieldCheck className="w-10 h-10 text-gray-500" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            <span className="text-gray-500 animate-pulse font-extrabold">
              E-Verified
            </span>{" "}
            Transfotech Academy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We have undergone a rigorous verification process to confirm our
            identity and credibility, ensuring trust and confidence for students
            and partners.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Proudly achieving this milestone, we continue delivering the highest
            quality IT courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
