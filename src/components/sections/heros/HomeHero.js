import React from "react";
import Image from "next/image";
import abcd from "./../../../assets/Home-hero/home-hero-2.webp";

const HomeHero = () => {
  return (
    <section className="relative bg-gray-100 text-gray-800 px-40 flex items-center">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image with border background */}
        <div className="relative w-full h-80 md:h-[500px]">
          {/* Border div behind image */}
          <div className="absolute -top-8 -left-8 w-full h-full border-4 border-gray-300 rounded-lg"></div>

          {/* Image div */}
          <div className="w-full h-full rounded-lg shadow-md overflow-hidden relative">
            <Image
              src={abcd}
              alt="Home Hero"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Learn with <span className="text-gray-600">Experts. </span>
            Build Real <span className="text-gray-600">Skils. </span>
            Launch Your <span className="text-gray-600">Career. </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Live, hands-on training in today’s most in-demand technologies — led
            by seasoned professionals who know the industry inside out.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 transition px-6 py-3 rounded-md font-semibold text-white">
            📅 Reserve Your Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
