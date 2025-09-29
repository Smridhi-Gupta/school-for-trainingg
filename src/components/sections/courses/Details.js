"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import coursesData from "./../../../db/courses.json";
import Image from "next/image";

const Details = () => {
  const params = useParams();
  const courseTitle = decodeURIComponent(params.id);
  const course = coursesData.courses.find(
    (c) => c.title.toLowerCase() === courseTitle.toLowerCase()
  );

  if (!course) {
    return (
      <div className="text-center py-20 text-red-600">
        <h1>Course {courseTitle} not found!</h1>
      </div>
    );
  }

  const modules = course.course_details
    ? Object.entries(course.course_details).map(([module, topics]) => ({
        module,
        topics,
      }))
    : [];

  const instructors = course.instructor
    ? [{ name: course.instructor, role: "Lead Instructor" }]
    : [{ name: "TBA", role: "Instructor to be announced" }];

  const courseStructure = course.course_structure_overview
    ? Object.entries(course.course_structure_overview).map(([key, value]) => ({
        key: key.replace(/_/g, " ").toUpperCase(),
        value,
      }))
    : [];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
          <div className="flex-1 max-w-xl">
            <p className="text-gray-400 font-semibold uppercase tracking-wide mb-2">
              {course.status}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
              <span>{course.title}</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 rounded-lg font-semibold text-white">
                Enroll Now
              </button>
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold text-gray-900">
                Course Curriculum
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-[600px] h-[450px]">
              <Image
                src={course.img_banner}
                alt={course.title}
                fill
                className="rounded-xl object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      {courseStructure.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Course Structure
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseStructure.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-gray-900" />
                    <h3 className="text-xl font-semibold">{feature.key}</h3>
                  </div>
                  <p className="text-gray-600">{feature.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Course Features
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {course.whats_included.map((feature, idx) => (
              <div key={idx} className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-8 h-8 flex-shrink-0 text-gray-900" />
                  <h3 className="text-lg md:text-xl font-semibold leading-snug">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      {/* Learning Outcomes */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Will You Learn?
          </h2>

          {/* ✅ Overview Section */}
          {course.overview_description && (
            <div className="max-w-5xl mx-auto mb-12">
              <div className="p-8 border rounded-xl shadow-md hover:shadow-lg transition text-center">
                <p className="text-md text-gray-600">
                  {course.overview_description}
                </p>
              </div>
            </div>
          )}

          {/* ✅ Bullet Points */}
          <div className="grid md:grid-cols-2 gap-6">
            {course.what_you_will_learn.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-gray-900 w-8 h-8 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      {modules.length > 0 && (
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
                  {/* Module Heading */}
                  <AccordionTrigger className="text-lg md:text-xl font-semibold px-6 py-4 flex justify-between items-center hover:bg-gray-50 capitalize">
                    {mod.module.replace(/_/g, " ")}
                  </AccordionTrigger>

                  {/* Classes + Topics */}
                  <AccordionContent className="px-6 py-4 bg-gray-50 border-t space-y-6">
                    {mod.topics.map((cls, i) => (
                      <div key={i}>
                        {/* Class Name */}
                        <h3 className="font-bold text-lg mb-2">{cls.class}</h3>
                        {/* Subpoints */}
                        <div className="space-y-2 text-gray-700">
                          {cls.topics.map((topic, j) => (
                            <p key={j}>{topic}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Instructors */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Your Instructors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((inst, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 bg-gray-50 p-6 rounded-lg shadow-md"
              >
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
};

export default Details;
