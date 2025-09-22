"use client";
import React from "react";

const managementBoard = [
  { name: "John Doe", role: "Founder & CEO" },
  { name: "Sarah Johnson", role: "Co-Founder & Director" },
  { name: "Michael Smith", role: "Board Member" },
];

const teamMembers = [
  { name: "Emily Davis", role: "UI/UX Designer" },
  { name: "Raj Mehta", role: "Lead Instructor" },
  { name: "Ayesha Khan", role: "Data Scientist" },
  { name: "Riya Sharma", role: "Project Manager" },
  { name: "David Lee", role: "Software Engineer" },
  { name: "Sophia Brown", role: "Marketing Specialist" },
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
            {/* Grey Avatar Placeholder */}
            <div className="w-28 h-28 rounded-full bg-gray-300 mb-6"></div>

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
            {/* Grey Avatar Placeholder */}
            <div className="w-24 h-24 rounded-full bg-gray-300 mb-6"></div>

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
