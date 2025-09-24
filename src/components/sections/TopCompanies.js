"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Import your PNG logos
import BAAS from "@/assets/top-companies/BAAS.png";
import BAIS from "@/assets/top-companies/BAIS.png";
import GlobalWomenPower from "@/assets/top-companies/GlobalWomenPower.png";
import IE from "@/assets/top-companies/IE.png";
import O1Visa from "@/assets/top-companies/O1-Visa.png";
import USAIS from "@/assets/top-companies/USAIS.png";
import USGlobal from "@/assets/top-companies/USGlobal.png";

const logos = [
  { id: 1, src: BAAS, name: "BAAS" },
  { id: 2, src: BAIS, name: "BAIS" },
  { id: 3, src: GlobalWomenPower, name: "Global Women Power" },
  { id: 4, src: IE, name: "IE" },
  { id: 5, src: O1Visa, name: "O1 Visa" },
  { id: 6, src: USAIS, name: "USAIS" },
  { id: 7, src: USGlobal, name: "US Global" },
];

const TopCompanies = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Subheading */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Top Companies
        </h3>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Our Graduates Have Secured Roles at Top Companies in the Past
        </h2>

        {/* Logo Slider */}
        <div className="overflow-hidden relative mt-12">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[220px]"
              >
                <div className="w-40 h-40 flex items-center justify-center bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition p-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
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
