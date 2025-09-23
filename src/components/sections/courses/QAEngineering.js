import React from "react";
import { CheckCircle, Wrench, Users } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const modules = [
  {
    module: "Module 1: Fundamentals",
    topics: ["QA Basics", "Manual Testing", "Agile"],
  },
  {
    module: "Module 2: Automation",
    topics: ["Automation with Selenium", "TestNG", "Frameworks"],
  },
  {
    module: "Module 3: Advanced Testing",
    topics: ["API Testing", "JMeter", "SQL & DevOps Tools"],
  },
];

const features = [
  {
    title: "Hands-On Projects",
    desc: "Work on live projects to apply testing strategies.",
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Industry Tools",
    desc: "Learn Selenium, JMeter, Postman, and Jenkins.",
    icon: <Wrench className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Career Support",
    desc: "Resume building, mock interviews, and placement support.",
    icon: <Users className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Hands-On Projects",
    desc: "Work on live projects to apply testing strategies.",
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Industry Tools",
    desc: "Learn Selenium, JMeter, Postman, and Jenkins.",
    icon: <Wrench className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Career Support",
    desc: "Resume building, mock interviews, and placement support.",
    icon: <Users className="w-8 h-8 text-green-600" />,
  },
];

export default function QAEngineering() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
          {/* Right Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
              Enrollment On Going <br />
              <span className="text-gray-600">Full Stack QA Engineering</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Become a skilled QA engineer with hands-on training in Manual +
              Automation testing, SQL, API, and modern frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 rounded-lg font-semibold text-white">
                Enroll Now
              </button>
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold text-gray-900">
                Course Curriculum
              </button>
            </div>
          </div>

          {/* Left Grey Div */}
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-300 w-full h-80 md:h-[500px] rounded-lg shadow-md flex items-center justify-center"></div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="p-8 border rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Full Stack QA Engineering?
            </h2>
            <p className="text-md text-gray-600">
              This program is designed to prepare you for real-world software
              testing with expertise in manual and automation testing, API
              validation, SQL, and Agile methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Course Structure Overview
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Explore the key features and benefits of our QA Engineering
              course.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Will You Learn?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Manual Testing & QA Processes",
              "Selenium with Java/Python",
              "API Testing with Postman",
              "Performance Testing using JMeter",
              "SQL for Testers",
              "Agile & DevOps Testing",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                <span className="text-gray-700 text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Course Curriculum
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {modules.map((mod, idx) => (
              <AccordionItem
                key={idx}
                value={`module-${idx}`}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg"
              >
                {/* Header / Trigger */}
                <AccordionTrigger className="text-lg md:text-xl font-semibold px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                  {mod.module}
                </AccordionTrigger>

                {/* Content */}
                <AccordionContent className="px-6 py-4 bg-gray-50 border-t">
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                    {mod.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Your Instructors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Amit Sharma",
                role: "Senior QA Lead at TechCorp",
              },
              {
                name: "Priya Verma",
                role: "Automation Engineer at FinTech Inc.",
              },
            ].map((inst, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                {/* Grey Div instead of image */}
                <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="text-lg font-semibold">{inst.name}</h3>
                  <p className="text-gray-600">{inst.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
