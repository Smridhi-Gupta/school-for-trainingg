import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-gray-100 text-gray-800 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            School For Training  <br />{" "}
            <span className="text-gray-600">Real Skills. Real Careers.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            School For Training is a certified professional training institute
            based in Fremont, California, serving students and professionals
            across the U.S. through live, expert-led programs in tech and data.
            <br></br>
            We equip learners with practical, job-ready skills in todays most
            in-demand fields — from QA engineering to cybersecurity, business
            analytics, and AI.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is simple: train with purpose, teach with impact, and
            help you build a future-proof career. Accelerate your future with
            hands-on, real-world learning.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 transition px-6 py-3 rounded-md font-semibold text-white">
            Book a Consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-full h-96 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-gray-700">Image Placeholder</span>
          </div>
          {/* ✅ Later replace with: 
          <img src="/about-hero.jpg" alt="About Transfotech Academy" className="w-full h-96 object-cover rounded-lg shadow-md" />
          */}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
