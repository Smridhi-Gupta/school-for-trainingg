import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F3069] text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-white">School For Training</h2>
          <p className="text-gray-300 text-sm">
            Empowering students with job-ready IT skills through hands-on
            training, certifications, and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#FF6575] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/course"
                className="hover:text-[#FF6575] transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#FF6575] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#FF6575] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-white">Address:</span>
            <br />
            39159 Paseo Padre Pkwy #105, <br />
            Fremont, CA 94538
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-white">Email:</span>
            <br />
            mukesh@schoolfortraining.com
          </p>
        </div>

        {/* CTA Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Get Started</h3>
          <p className="text-gray-300 text-sm">
            Take the first step toward your IT career. Enroll in our
            job-oriented programs today.
          </p>
          <Link
            href="/contact"
            className="bg-[#FF6575] text-white px-5 py-2 mr-34 text-center rounded-md font-semibold shadow-md hover:bg-[#e45464] transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a3a75] mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} School For Training. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
