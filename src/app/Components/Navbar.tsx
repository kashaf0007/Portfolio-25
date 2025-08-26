"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cyan-900 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-white">
       <Image src="/logo.jpeg" alt="logo" width={100} height={120} />
          <span className="ml-4 text-3xl font-extrabold text-green-500">K</span>
          <span className="ml-1 text-3xl font-extrabold">ASHAF </span>
          <span className="ml-1 text-3xl font-extrabold text-purple-500">A</span>
          <span className="ml-1 text-3xl font-extrabold">MAN</span>
        </a>
        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:space-x-6 text-2xl font-bold mt-4 md:mt-0 flex-col md:flex-row w-full md:w-auto`}
        >
          <a href="#Homepage" className="  hover:text-white py-1">Home</a>
          <Link href={"#About"} className="  hover:text-white py-1">About</Link>
          <a href="#Skills" className="  hover:text-white py-1">Skills</a>
          <a href="#projects" className="  hover:text-white py-1">Projects</a>
          <Link href={"#Contact"} className="  hover:text-white py-1">Contact</Link>
        </nav>
        <div className="mt-4 md:mt-0">
          <button className="inline-flex items-center bg-gray-100 text-black border-1 border-blue-600 py-2 px-6 rounded-4xl hover:bg-cyan-500/50 hover:text-white text-l font-bold transition">
            Hire Me
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
