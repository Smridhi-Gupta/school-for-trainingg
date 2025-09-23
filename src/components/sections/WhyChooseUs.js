"use client";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 space-y-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 text-sm uppercase">
          More reasons to choose us
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Live Instructor-Led and Online Classes for Flexible Learning
        </h2>
      </div>
      {/* Section 1: Text Right, Image Left */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Left: Image Placeholder */}
        <div className="w-full md:w-2/5 bg-gray-400 rounded-2xl flex items-center justify-center">
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-3/5 bg-gray-100  p-8 rounded-2xl flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Live Instructor-Led Classes in New York City
          </h3>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            <span className="text-gray-700 text-xl font-semibold leading-relaxed mb-7">
              Get real-world skills in a real-world setting.
            </span>
            <br></br> Join our in-person, hands-on training programs in NYC, led
            by experienced professionals from the tech industry. Whether you are
            diving into Full Stack QA, Business Analytics, Cybersecurity, or AI,
            you will benefit from face-to-face instruction, real-time feedback,
            and a collaborative classroom experience.
          </p>

          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Step into a space where learning meets mentorship, and walk out with
            the confidence and skills to thrive in today’s job market.
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-5 py-2 w-60 rounded-lg transition">
            📞 Contact Us to Enroll
          </button>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Left: Text Content */}
        <div className="w-full md:w-3/5 bg-gray-100  p-8 rounded-2xl flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Live Online Classes — Learn From Anywhere
          </h3>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            <span className="text-gray-700 text-xl font-semibold leading-relaxed mb-7">
              Same expert instruction. Just more flexible.
            </span>
            <br></br> Can’t make it to New York? No problem. Our live,
            instructor-led online classes bring the classroom to you — wherever
            you are. Learn Full Stack QA, Cybersecurity, Data Analytics,
            Business Analysis, and more through live sessions, interactive labs,
            and personalized feedback.
          </p>

          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Stay on track with your career goals while learning from the comfort
            of your home — without compromising quality.
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-5 py-2 w-60 rounded-lg transition">
            📅 Book Your Online Seat 
          </button>
        </div>

        {/* Right: Image Placeholder */}
        <div className="w-full md:w-2/5 bg-gray-400 rounded-2xl flex items-center jgustify-center">
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
