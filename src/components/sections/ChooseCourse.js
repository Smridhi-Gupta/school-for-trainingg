import React from "react";

const courses = [
  {
    id: 1,
    title: "QA Automation & Full Stack Testing",
    weeks: "16 Weeks",
    desc: "Manual + automation + frameworks — everything from basics to advanced testing tools. ",
  },
  {
    id: 2,
    title: "Cybersecurity Analyst & Engineering",
    weeks: "20 Weeks",
    desc: "Threat detection, defense strategies, and hands-on security protocols. ",
  },
  {
    id: 3,
    title: "AI-Powered Business & Data Analytics",
    weeks: "16 Weeks",
    desc: "Analyze and visualize data using AI tools, drive insights, and help businesses make data-driven decisions. From spreadsheets to machine learning — become a data-informed decision maker.",
  },
  {
    id: 4,
    title: "Intro to Artificial Intelligence",
    weeks: "12 Weeks",
    desc: "Learn how AI works, where it’s going, and how to start using it now.",
  },
  {
    id: 5,
    title: "Computer Fundamentals Bootcamp",
    weeks: "12 Weeks",
    desc: "A complete foundation for tech beginners. Get the basics, get confident.",
  },
];

const ChooseCourse = () => {
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
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Gray Image Placeholder */}
              <div className="w-full h-56 bg-gray-300 rounded-lg shadow-md border border-gray-200"></div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {course.weeks}
                </p>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <button className="bg-gray-800 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 transition">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCourse;
