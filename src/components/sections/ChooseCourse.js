"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import courses from "./../../db/courses.json";

const ChooseCourse = () => {
  return (
    <section className="bg-gray-50 py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Box: Heading + Subheading + Button */}
        <div className="bg-white rounded-xl p-8 flex flex-col justify-center text-left transition-all duration-300 h-full">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3069] mb-4">
            Programs We Offer
          </h2>
          <p className="text-[#0F3069] font-semibold mb-6 text-base sm:text-lg">
            Designed for students, career-switchers, and professionals aiming to
            upskill fast.
          </p>
          <Link href="/course">
            <button className="bg-[#FF6575] hover:bg-[#e45061] text-white font-semibold px-6 py-3 rounded-md transition text-sm sm:text-base">
              Explore Courses
            </button>
          </Link>
        </div>

        {/* Cards */}
        {courses.courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-40 sm:h-44 lg:h-48">
              <Image
                src={course.img}
                alt={course.title}
                className="object-cover w-full h-full"
                fill
              />
            </div>

            {/* Text */}
            <div className="p-4 flex flex-col justify-between sm:h-52">
              <div>
                <h3 className="text-lg font-bold text-[#0F3069] mb-1">
                  {course.title}
                </h3>
                <p className="text-[#FF6575] font-semibold mb-1 text-sm">
                  {course.weeks}
                </p>
                <p className="text-gray-600 text-sm">{course.subtitle}</p>
              </div>
              <div className="mt-3">
                <Link href={`/courseDetails/${course.title}`}>
                  <button className="w-full bg-[#FF6575] hover:bg-[#e45061] text-white font-semibold px-3 py-2 rounded-md transition text-sm">
                    View Course
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseCourse;
