"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Avatar imports
import avatar1 from "@/assets/comment-avatars/avatar-1.svg";
import avatar2 from "@/assets/comment-avatars/avatar-2.svg";
import avatar3 from "@/assets/comment-avatars/avatar-3.svg";

const commentsData = [
  {
    name: "Rina P.",
    role: "QA Analyst at a fintech startup",
    comment:
      "This program helped me pivot into tech with confidence. The internship was a game-changer.The instructors were amazing! I learned practical skills that I could immediately apply in my projects. Highly recommend!",
    rating: 5,
    avatar: avatar2,
  },
  {
    name: "Mohit G.",
    role: "Cybersecurity Analyst",
    comment:
      "The instructors don’t just teach — they mentor you. You’re not left guessing what the industry wants.",
    rating: 4,
    avatar: avatar1,
  },
  {
    name: "Lara T.",
    role: "Junior Data Analyst",
    comment:
      "I walked in knowing nothing about data, and walked out building dashboards and automations for my team.",
    rating: 5,
    avatar: avatar3,
  },
];

const StudentsComments = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 overflow-hidden">
      <p className="text-sm font-semibold text-[#FF6575] uppercase tracking-wide text-center">
        Here Are More Reasons
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        What Our Learners Say
      </h2>

      {/* Auto Scrolling Slider */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...commentsData, ...commentsData].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[380px] lg:min-w-[420px] bg-white p-6 mb-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
            >
              {/* Student Info */}
              <div className="flex items-center mb-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>

                  {/* Rating */}
                  <div className="flex mt-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                    {Array.from({ length: 5 - item.rating }).map((_, i) => (
                      <FaStar key={i} className="text-gray-300 text-sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-base italic">{item.comment}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudentsComments;
