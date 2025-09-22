'use client'

import React, { useState } from "react";
import {
  Laptop,
  Video,
  FileText,
  UserCheck,
  ClipboardList,
  Users,
  CheckCircle,
} from "lucide-react";

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
      desc: "10+ years experience in QA & Automation with proven track record of training students globally.",
    },
    {
      name: "Ashraf Siddique",
      role: "Mentor",
      desc: "QA Engineer with 8+ years of experience in Selenium, JIRA, API Testing, and frameworks.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-24">
        <div className="container mx-auto px-12 md:px-20 flex flex-col md:flex-row items-center gap-12">
          {/* Left Placeholder */}
          <div className="bg-gray-300 w-full md:w-1/2 h-80 md:h-[400px] rounded-lg shadow-md flex items-center justify-center"></div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Enrollment Ongoing <br />
              <span className="text-gray-600">Full Stack QA Engineering</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Become a skilled QA engineer with hands-on training in Manual +
              Automation testing, SQL, API, and modern frameworks.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition">
                Enroll Now
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-md transition">
                Course Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-24">
        <div className="container mx-auto px-12 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Course Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <f.icon className="w-10 h-10 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-12 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            What You Will Learn
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="text-teal-500 w-6 h-6 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-24">
        <div className="container mx-auto px-12 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Course Modules
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {modules.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg border border-gray-200"
              >
                <button
                  className="w-full flex justify-between px-6 py-4 font-semibold text-gray-900 rounded-3xl"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {m.title}
                  <span>{openIndex === i ? "-" : "+"}</span>
                </button>
                {openIndex === i && (
                  <ul className="px-6 pb-4 text-gray-600 list-disc list-inside">
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

      {/* Instructors */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-12 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Course Instructors
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instructors.map((ins, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 flex gap-6 items-center hover:shadow-2xl transition"
              >
                <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{ins.name}</h3>
                  <p className="text-teal-500 font-semibold">{ins.role}</p>
                  <p className="text-gray-600 mt-2">{ins.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 text-gray-600">
        <div className="container mx-auto px-12 md:px-20 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-gray-900 font-bold mb-2">New York Office</h4>
            <p>123 Wall Street, New York, USA</p>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-2">LA Office</h4>
            <p>456 Sunset Blvd, Los Angeles, USA</p>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-2">Bangladesh Office</h4>
            <p>789 Dhaka Road, Bangladesh</p>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Transfotech Academy. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default QAEngineering;
