
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'

const Contact = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-16 text-white">
      <div id="Contact">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-white">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-cyan-600">
                Lets build something great together. Reach out via form below!
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white bg-opacity-50 rounded border-3 border-cyan-500/50 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white bg-opacity-50 rounded border-3 border-cyan-500/50 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white bg-opacity-50 rounded border-3 border-cyan-500/50 focus:bg-white focus:ring-2 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full flex justify-center">
                  <button className="mt-2 flex-shrink-0 inline-flex rounded-xl bg-gray-100 text-black border-1 border-blue-600 py-2 px-6 focus:outline-none hover:bg-cyan-500/50 hover:text-white font-bold">
                    Contact Me
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-white block mb-3">nasreenan47@gmail.com</a>
                  <span className="inline-flex flex-wrap justify-center gap-4 text-white text-3xl">
                    <Link
                      href="https:www.facebook.com/share/1BsNiRk6z2"
                      target="_blank"
                      className="hover:text-cyan-500 transition"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href="https://github.com/kashaf0007"
                      target="_blank"
                      className="hover:text-cyan-500 transition"
                    >
                      <IoLogoGithub />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/kashafaman-aman-398082316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      className="hover:text-cyan-500 transition"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link
                      href="https://www.instagram.com/kashaf8076?igsh=aGEzb2J2gHVqdXow"
                      target="_blank"
                      className="hover:text-cyan-500 transition"
                    >
                      <FaSquareInstagram />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact
