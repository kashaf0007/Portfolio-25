'use client'

import React, { useEffect } from 'react'
import { FiMessageSquare, FiShield } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { MdComputer } from 'react-icons/md'

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="neutral">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto bg-black">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl md:text-6xl font-bold title-font mb-4 text-cyan-600">
              Services
            </h1>
            <p className="lg:w-2/3 text-xl mx-auto leading-relaxed text-white">
              Powered by next-generation artificial intelligence
            </p>
          </div>

          <div className="flex flex-wrap m-4 text-center justify-center gap-4">
            {/* Card 1 */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="bg-cyan-600 w-20 h-20 mx-auto flex items-center justify-center rounded-xl hover:bg-cyan-500">
                  <MdComputer
                    size={48} color="white" />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white mt-4">Frontend Developer</h2>
                <p className="text-gray-400 mt-2">
                  User-friendly interface services refer to  understand, navigate, and interact with user and efficient task completion and easy to understand.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="bg-cyan-600 w-20 h-20 mx-auto flex items-center justify-center rounded-xl hover:bg-cyan-500">
                  <FiMessageSquare size={48} color="white"  />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white mt-4">Web Designing</h2>
                <p className="text-gray-400 mt-2">
                 Websites should be designed to adapt to different screen sizes (desktops, tablets, mobile phones) for viewing on all devices. 
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="bg-cyan-600 w-20 h-20 mx-auto flex items-center justify-center rounded-xl hover:bg-cyan-500">
                  <FiShield size={48} color="white" />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white mt-4">Privacy Setting</h2>
                <p className="text-gray-400 mt-2">
                  building the user-facing side of websites and applications, encompassing design, user interface (UI) and user experience (UX).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
