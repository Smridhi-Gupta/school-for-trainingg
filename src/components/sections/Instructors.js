"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Import instructor images
import instructor1 from "./../../assets/comment-avatars/avatar-4.svg";
import instructor2 from "./../../assets/comment-avatars/avatar-1.svg";
import instructor3 from "./../../assets/comment-avatars/avatar-2.svg";
import instructor4 from "./../../assets/comment-avatars/avatar-4.svg";
import instructor5 from "./../../assets/comment-avatars/avatar-1.svg";

const instructors = [
  {
    name: "Dr. Ayesha Khan",
    qualification: "QA Lead Instructor",
    experience: "10+ Years Experience",
    rating: 5,
    description:
      "12+ years in test automation, agile frameworks, and enterprise QA pipelines.",
    img: instructor1,
  },
  {
    name: "Mr. Raj Mehta",
    qualification: "Cybersecurity Mentor",
    experience: "8+ Years Experience",
    rating: 4,
    description:
      "Certified expert with hands-on experience in network defense, SIEM tools, and pen-testing.",
    img: instructor2,
  },
  {
    name: "Ms. Riya Sharma",
    qualification: "Analytics Coach",
    experience: "6+ Years Experience",
    rating: 4,
    description:
      "Data scientist with a track record of BI integrations and predictive modeling.",
    img: instructor3,
  },
  // {
  //   name: "Dr. Ayesha Khan",
  //   qualification: "QA Lead Instructor",
  //   experience: "10+ Years Experience",
  //   rating: 5,
  //   description:
  //     "12+ years in test automation, agile frameworks, and enterprise QA pipelines.",
  //   img: instructor4,
  // },
  // {
  //   name: "Mr. Raj Mehta",
  //   qualification: "Cybersecurity Mentor",
  //   experience: "8+ Years Experience",
  //   rating: 4,
  //   description:
  //     "Certified expert with hands-on experience in network defense, SIEM tools, and pen-testing.",
  //   img: instructor5,
  // },
];

const Instructors = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm uppercase">Our Instructors</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Learn From Industry Veterans
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Your instructors aren’t just teachers — they’re pros who’ve done the
          work and know what hiring managers look for.
        </p>
      </div>

      {/* Flip Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {instructors.map((inst, idx) => (
          <div key={idx} className="group perspective">
            <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center backface-hidden p-6">
                {/* Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src={inst.img}
                    alt={inst.name}
                    className="object-cover"
                    fill
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {inst.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {inst.qualification}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-gray-800 text-white shadow-lg rounded-xl p-6 rotate-y-180 backface-hidden flex flex-col justify-center items-center">
                <p className="text-sm mb-2">{inst.experience}</p>

                {/* Rating */}
                <div className="flex justify-center mb-3">
                  {Array.from({ length: inst.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - inst.rating }).map((_, i) => (
                    <FaStar key={i} className="text-gray-500" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 text-center">
                  {inst.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Instructors;
