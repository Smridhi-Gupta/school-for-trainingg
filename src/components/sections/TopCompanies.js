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
    <section className="bg-[#0F3069] py-12">
      <div className="text-center px-6">
        {/* Subheading */}
        <h3 className="text-sm font-semibold text-[#FF6575] uppercase tracking-wide">
          Top Companies
        </h3>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
          Our Graduates Have Secured Roles at Top Companies in the Past
        </h2>
      </div>

      {/* Logo Slider */}
      <div className="overflow-hidden relative mt-8 w-full">
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
              <div className="w-44 h-44 flex items-center justify-center bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition p-5">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-white font-medium">{logo.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopCompanies;
