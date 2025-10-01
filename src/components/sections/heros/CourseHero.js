import React from "react";
import Image from "next/image";
import heroImg from "../../../assets/About-hero/hero.webp"; // apni image path

const CourseHero = () => {
  return (
    <section className="bg-[#0F3069] text-white w-full h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <p className="text-[#FF6575] font-semibold uppercase tracking-wide">
            Explore Our Courses
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Learn Job-Ready Skills <br />
            <span className="text-gray-200 text-lg md:text-xl">
              Upskill yourself with our expert-led programs
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Choose from a wide range of professional courses in QA, cybersecurity,
            business analytics, AI, and more. Get hands-on experience and
            prepare for a successful IT career.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#FF6575] hover:bg-[#e45464] transition px-6 py-3 rounded-md font-semibold text-white">
              Browse Courses
            </button>
            <button className="border border-white hover:bg-white hover:text-[#0F3069] transition px-6 py-3 rounded-md font-semibold">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <div className="w-full h-96 md:h-[450px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden relative">
            <Image
              src={heroImg}
              alt="Course Hero"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
