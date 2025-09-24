"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import courses from "./../../db/courses.json";

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
