'use client'

import React, { useState } from "react";
import { Laptop, Video, FileText, UserCheck, ClipboardList, Users, CheckCircle } from "lucide-react";

const QAEngineering = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Course features
  const features = [
    { icon: Laptop, title: "Student Dashboard", desc: "Track your learning and assignments easily." },
    { icon: Video, title: "Online Live Classes", desc: "Attend live sessions with mentors." },
    { icon: FileText, title: "Recordings", desc: "Get access to all class recordings." },
    { icon: UserCheck, title: "Resume Building", desc: "Learn resume building with real guidance." },
    { icon: ClipboardList, title: "Interview Preparation", desc: "Mock interviews and prep sessions." },
    { icon: Users, title: "Easy Enrollment", desc: "Quick sign-up and payment options." },
  ];

  // Learning outcomes
  const outcomes = [
    "Master manual & automation testing with frameworks.",
    "Understand SQL & API testing with real projects.",
    "Get hands-on with JIRA, Selenium, Cucumber & more.",
    "Industry-grade assignments & mock interviews.",
    "Job-ready QA engineer skillset with resume guidance.",
  ];

  // Course modules
  const modules = [
    { title: "Manual Testing", topics: ["Basics", "Test Cases", "Bug Reports"] },
    { title: "Database & SQL", topics: ["Joins", "Queries", "Stored Procedures"] },
    { title: "API Testing / REST", topics: ["Postman", "Automation Scripts"] },
    { title: "Frameworks with Java", topics: ["Selenium", "Cucumber", "TestNG"] },
  ];

  // Instructors
  const instructors = [
    {
      name: "Fayek Chowdhury",
      role: "Instructor",
      img: "/images/instructor1.jpg",
      desc: "10+ years experience in QA & Automation with proven track record of training students globally.",
    },
    {
      name: "Ashraf Siddique",
      role: "Mentor",
      img: "/images/instructor2.jpg",
      desc: "QA Engineer with 8+ years of experience in Selenium, JIRA, API Testing, and frameworks.",
    },
  ];

  return (
    <div className=" text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
              Enrollment On Going <br />
              <span className="text-teal-400">Full Stack QA Engineering</span>
            </h1>
            <p className="mt-4 text-gray-300">
              Become a skilled QA engineer with hands-on training in Manual +
              Automation testing, SQL, API, and modern frameworks.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold">
                Enroll Now
              </button>
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold">
                Course Curriculum
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              src="/images/qa-hero.png"
              alt="QA Engineering"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="bg-gray-900 py-12 text-gray-100">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Full Stack QA Engineering</h2>
            <p className="text-gray-300">
              This course covers everything from manual testing to automation
              frameworks. Build strong foundations in QA and gain hands-on
              experience with industry-standard tools.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Enroll Now / Free Consultation</h3>
            <p className="text-gray-400 mb-4">
              Seats are filling fast! Don’t miss the opportunity to upskill.
            </p>
            <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">Course Structure Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl shadow-md">
                <f.icon className="w-10 h-10 text-teal-400 mb-4" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">What You Will Learn</h2>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-teal-400 mt-1 w-6 h-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-gray-800 py-16 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Details About The Course</h2>
          <div className="space-y-4">
            {modules.map((m, i) => (
              <div key={i} className="bg-gray-900 rounded-lg shadow-md">
                <button
                  className="w-full flex justify-between px-6 py-4 font-semibold"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {m.title}
                  <span>{openIndex === i ? "-" : "+"}</span>
                </button>
                {openIndex === i && (
                  <ul className="px-6 pb-4 text-gray-400 list-disc list-inside">
                    {m.topics.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="bg-gray-900 py-16 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Course Instructors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((ins, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md flex gap-4">
                <img
                  src={ins.img}
                  alt={ins.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{ins.name}</h3>
                  <p className="text-teal-400">{ins.role}</p>
                  <p className="text-gray-400 mt-2">{ins.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 text-gray-400">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">New York Office</h4>
            <p>123 Wall Street, New York, USA</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">LA Office</h4>
            <p>456 Sunset Blvd, Los Angeles, USA</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Bangladesh Office</h4>
            <p>789 Dhaka Road, Bangladesh</p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Transfotech Academy. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default QAEngineering;
