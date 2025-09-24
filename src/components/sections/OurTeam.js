"use client";
import React from "react";
import Image from "next/image";

// Avatar imports
import avatar1 from "@/assets/comment-avatars/avatar-8.svg";
import avatar2 from "@/assets/comment-avatars/avatar-9.svg";
import avatar3 from "@/assets/comment-avatars/avatar-10.svg";
import avatar4 from "@/assets/comment-avatars/avatar-11.svg";
import avatar5 from "@/assets/comment-avatars/avatar-12.svg";
import avatar6 from "@/assets/comment-avatars/avatar-13.svg";
import avatar7 from "@/assets/comment-avatars/avatar-14.svg";
import avatar8 from "@/assets/comment-avatars/avatar-5.svg";
import avatar9 from "@/assets/comment-avatars/avatar-16.svg";

const managementBoard = [
  { name: "John Doe", role: "Founder & CEO", avatar: avatar1 },
  { name: "Sarah Johnson", role: "Co-Founder & Director", avatar: avatar3 },
  { name: "Michael Smith", role: "Board Member", avatar: avatar2 },
];

const teamMembers = [
  { name: "Emily Davis", role: "UI/UX Designer", avatar: avatar4 },
  { name: "Raj Mehta", role: "Lead Instructor", avatar: avatar9 },
  { name: "Ayesha Khan", role: "Data Scientist", avatar: avatar6 },
  { name: "Riya Sharma", role: "Project Manager", avatar: avatar7 },
  { name: "David Lee", role: "Software Engineer", avatar: avatar8 },
  { name: "Sophia Brown", role: "Marketing Specialist", avatar: avatar5 },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Management Board Section */}
      <div className="text-center mb-16">
        <h3 className="text-green-600 font-semibold uppercase tracking-wide">
          Management Board
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Our Leadership Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {managementBoard.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
              <Image
                src={member.avatar}
                alt={`${member.name} avatar`}
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h4 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h4>
            <p className="text-green-600 font-medium text-sm">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h3 className="text-green-600 font-semibold uppercase tracking-wide">
          Our Team
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Meet Our Professionals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
              <Image
                src={member.avatar}
                alt={`${member.name} avatar`}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h4 className="text-base font-semibold text-gray-900">
              {member.name}
            </h4>
            <p className="text-green-600 font-medium text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
