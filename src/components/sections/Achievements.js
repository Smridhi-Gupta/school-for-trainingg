"use client";
import React from "react";

const achievements = [
  {
    number: "3000+",
    label: "Trained and Thriving",
  },
  {
    number: "90%",
    label: "Course Completion Rate",
  },
  {
    number: "80%",
    label: "Students Land Jobs Within 6 Months",
  },
  {
    number: "10,000+",
    label: "Hours of Live Instruction Delivered",
  },
];

const Achievements = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 font-semibold uppercase tracking-wide">
          Real projects, real companies, real experience
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          What Sets Us Apart
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl hover:scale-105 
                       transform transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              {item.number}
            </h3>
            <p className="text-gray-600 mt-2 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
