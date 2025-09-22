"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaFacebook,
} from "react-icons/fa";

const logos = [
  { id: 1, icon: <FaAmazon className="text-5xl text-gray-600" />, name: "Amazon" },
  { id: 2, icon: <FaGoogle className="text-5xl text-gray-600" />, name: "Google" },
  { id: 3, icon: <FaMicrosoft className="text-5xl text-gray-600" />, name: "Microsoft" },
  { id: 4, icon: <FaFacebook className="text-5xl text-gray-600" />, name: "Facebook" },
];

const TopCompanies = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Subheading */}
        <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
          Top Companies
        </h3>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Our Graduates Have Secured Roles at Top Companies in the Past
        </h2>

        {/* Logo Slider */}
        <div className="overflow-hidden relative mt-12">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[200px]"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition">
                  {logo.icon}
                </div>
                <p className="mt-3 text-gray-700 font-medium">{logo.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
