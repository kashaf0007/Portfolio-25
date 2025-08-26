import React from "react";
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-gray-400 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white  text-xl mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-pink-500">Features</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Pricing</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Documentation</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">API</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
         <h2 className="title-font font-bold text-white  text-xl mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">About </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
         <h2 className="title-font font-bold text-white  text-xl mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Privacy</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Terms</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Security</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Compliance</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-white"
            >
              Placeholder
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex rounded-4xl bg-gray-100 text-black border-1 border-blue-600 py-2 px-6 focus:outline-none hover:bg-cyan-500/50 hover:text-white ">
            Button
          </button>
        </div>
      
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src="/logo.jpeg" alt="logo" width={100} height={120} />
        <span className="ml-5 font-bold text-3xl">Portfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2025 Portfolio.All rights reserved.
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https:www.facebook.com/share/1BsNiRk6z2"
          target="_blank"
          className="text-gray-500 text-4xl px-2 hover:text-cyan-700 transition"> 
          <FaFacebook />
          </Link>
        
        <Link href="https://github.com/kashaf0007"
          target="_blank"
          className="text-gray-500 text-4xl px-2 hover:text-cyan-700 transition"> 
          <IoLogoGithub />
          </Link>

          <Link href="https://www.linkedin.com/in/kashafaman-aman-398082316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="text-gray-500 text-4xl px-2 hover:text-cyan-700 transition"> 
          <FaLinkedin />
          </Link>

          <Link href="https://www.instagram.com/kashaf8076?igsh=aGEzb2J2gHVqdXow"
          target="_blank"
          className="text-gray-500 text-4xl px-2 hover:text-cyan-700 transition"> 
          <FaSquareInstagram />
          </Link>
      </span>
    </div>
  </div>
</footer>
  );
};

export default Footer;
