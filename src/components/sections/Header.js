import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-gray-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-12 py-4">
        {/* Logo */}
     
        <Image
          src="/logo.png" // apne logo ka path yahan dena hoga (public folder me rakho)
          alt="Transtech Academy Logo"
          width={80} // apne requirement ke hisaab se size set karo
          height={80}
          className="object-contain"
        />

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <Link href="/course" className="hover:text-white transition-colors">
            COURSE
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            ABOUT US
          </Link>
          {/* <Link href="/contact" className="hover:text-white transition-colors">
            CONTACT US
          </Link> */}
        </nav>

        {/* Student Portal Button */}
        <Link
          href="/student-portal"
          className="ml-6 bg-gray-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition-colors"
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
};

export default Header;
