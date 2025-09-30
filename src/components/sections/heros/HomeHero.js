import React from "react";
import Image from "next/image";
import hero from "./../../../assets/Home-hero/home-hero-2.webp";

const HomeHero = () => {
  return (
    <section className="relative bg-[#0F3069] text-white px-40 flex items-center">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-80 md:h-[500px]">
          <div className="w-full h-full rounded-lg shadow-md overflow-hidden relative">
            <Image
              src={hero}
              alt="Home Hero"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Learn with <span className="text-[#FF6575]">Experts. </span>
            Build Real <span className="text-[#FF6575]">Skills. </span>
            Launch Your <span className="text-[#FF6575]">Career. </span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Live, hands-on training in today’s most in-demand technologies — led
            by seasoned professionals who know the industry inside out.
          </p>
          <button className="bg-[#FF6575] hover:bg-[#e45464] transition px-6 py-3 rounded-md font-semibold text-white shadow-lg">
            📅 Reserve Your Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
