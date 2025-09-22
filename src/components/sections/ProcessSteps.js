import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Plan Your Path",
    desc: "Not sure where to begin? Our advisors help you identify your strengths and match them with career-aligned tech programs.",
  },
  {
    id: 2,
    title: "Enroll & Access",
    desc: "Sign up in minutes. Get full access to live classes, lab environments, and a structured learning schedule.",
  },
  {
    id: 3,
    title: "Live Classes, Real Practice",
    desc: "Engaging, instructor-led sessions twice a week — backed by hands-on labs, assignments, and real case studies.",
  },
  {
    id: 4,
    title: "Internship With Impact",
    desc: "Work on real projects with real teams. Our partner companies give you a real-world internship experience that counts.",
  },
  {
    id: 5,
    title: "Crack the Hiring Code",
    desc: "Resume rewrites, mock interviews, job strategy — we prep you not just to apply, but to stand out and succeed.",
  },
  {
    id: 6,
    title: "Land the Role",
    desc: "We work with you until you’re hired — leveraging industry contacts, job boards, and referrals to place you where you belong.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-40">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            From Learner to Leader
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Your 6‑Phase Career Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A structured roadmap designed to guide you from the very beginning
            of your journey to a successful career.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                <CheckCircle size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
