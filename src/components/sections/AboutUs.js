"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { MdOutlineFlashOn } from "react-icons/md";
import Image from "next/image";

import whyUsImg from "@/assets/why-us/whyUs-2.webp";

export default function AboutUs() {
  const [progress, setProgress] = useState({
    business: 0,
    design: 0,
    marketing: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setProgress({
        business: 80,
        design: 75,
        marketing: 90,
      });
    }, 500);
  }, []);

  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#FF6575] uppercase tracking-wide">About Edulogic</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3069] mt-2">
            Our Large Benefit You <br /> Enroll From Our Courses
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text + Image + Progress */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-3 font-semibold text-[#0F3069]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>

            {/* Image */}
            <div className="mt-6 relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students"
                className="rounded-xl shadow-lg w-full h-96 md:h-[28rem] object-cover"
              />

              {/* Progress bars */}
              <div className="absolute -bottom-10 left-4 right-4 bg-white shadow-lg rounded-xl p-4">
                {[
                  { label: "Business Studies", value: progress.business },
                  { label: "Design & Development", value: progress.design },
                  { label: "Marketing", value: progress.marketing },
                ].map((item, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-2 rounded-full bg-[#0F3069]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Card 1 → Image → Card 2 → Button */}
          <div className="flex flex-col justify-start items-center md:items-stretch">
            {/* Card 1 */}
            <div className="flex items-start gap-3 bg-white shadow-md rounded-xl p-5 mb-6">
              <FaAward className="text-[#0F3069] text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Multiple Course Participation
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit
                </p>
              </div>
            </div>

            {/* Image between cards */}
            <div className="my-6 flex justify-center">
              <Image
                src={whyUsImg}
                alt="Why Us"
                className="rounded-xl shadow-lg w-3/4"
              />
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-3 bg-white shadow-md rounded-xl p-5 mb-6">
              <MdOutlineFlashOn className="text-[#0F3069] text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Very Fast & So Easy To Create
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#FF6575] hover:bg-[#e45061] text-white px-6 py-3 rounded-lg shadow-md transition">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
