import React from "react";
import Image from "next/image";
import heroImg from "../../../assets/About-hero/hero.webp"; 

const AboutHero = () => {
  return (
    <section className="bg-[#0F3069] text-gray-100 pt-16 md:pt-20 flex items-start min-h-[90vh]">
      <div className="max-w-7xl mx-auto md:px-8 lg:px-16 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <p className="text-[#FF6575] font-semibold uppercase tracking-wide">
            Who We Are
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            School For Training <br />
            <span className="text-gray-300 text-lg">Real Skills. Real Careers.</span>
          </h1>
          <p className="text-gray-300 text-base">
            School For Training is a certified professional training institute
            based in Fremont, California, serving students and professionals
            across the U.S. through live, expert-led programs in tech and data.
            <br />
            We equip learners with practical, job-ready skills in todays most
            in-demand fields — from QA engineering to cybersecurity, business
            analytics, and AI.
          </p>
          <p className="text-gray-300 text-base">
            Our mission is simple: train with purpose, teach with impact, and
            help you build a future-proof career. Accelerate your future with
            hands-on, real-world learning.
          </p>
          <button className="bg-[#FF6575] hover:bg-[#e45464] transition px-5 py-2.5 rounded-md font-semibold text-white w-max mt-4">
            Book a Consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-full h-100 rounded-lg shadow-lg overflow-hidden relative">
            <Image
              src={heroImg}
              alt="About School For Training"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
