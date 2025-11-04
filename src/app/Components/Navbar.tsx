
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cyan-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 items-center justify-between">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-1">
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="flex items-baseline text-3xl font-extrabold tracking-wide">
            <span className="text-green-500">K</span>
            <span>ASHAF </span>
            <span className="text-purple-500">A</span>
            <span>MAN</span>
          </h1>
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100"
          } 
          overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out 
          w-full md:w-auto md:flex md:items-center md:space-x-8 flex flex-col md:flex-row font-bold text-lg mt-3 md:mt-0`}
        >
          <a href="#Homepage" className="hover:text-cyan-300 py-2 md:py-0">
            Home
          </a>
          <Link href="#About" className="hover:text-cyan-300 py-2 md:py-0">
            About
          </Link>
          <a href="#Skills" className="hover:text-cyan-300 py-2 md:py-0">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-300 py-2 md:py-0">
            Projects
          </a>
          <Link href="#Contact" className="hover:text-cyan-300 py-2 md:py-0">
            Contact
          </Link>

          {/* Hire Me Button */}
          <div className="mt-3 md:mt-0">
            <button   className="inline-flex items-center bg-gray-100 text-black border border-blue-600 py-2 px-6 rounded-full hover:bg-cyan-600 hover:text-white font-semibold transition">
           <a
   href="/Kashaf Aman.pdf"
    download="cv.pdf">
  Hire Me
</a>
</button>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
