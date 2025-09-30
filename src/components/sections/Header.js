import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-[#0F3069] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-12 py-4">
        {/* Logo */}
        <Image
          src="/logo.png" // public folder me logo rakho
          alt="Transtech Academy Logo"
          width={80}
          height={80}
          className="object-contain"
        />

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-semibold tracking-wide">
          <Link href="/" className="hover:text-[#FF6575] transition-colors">
            HOME
          </Link>
          <Link href="/course" className="hover:text-[#FF6575] transition-colors">
            COURSE
          </Link>
          <Link href="/about" className="hover:text-[#FF6575] transition-colors">
            ABOUT US
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="ml-6 bg-[#FF6575] text-white px-5 py-2 rounded-md font-semibold shadow-md hover:bg-[#e45464] transition-colors"
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
};

export default Header;
