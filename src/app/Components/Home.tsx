

'use client'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <main className="relative min-h-screen w-full bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-cyan-500/50 mix-blend-overlay z-0"></div>

      {/* Content */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 lg:px-32 z-10 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center md:items-start max-w-xl"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight">
            Hi, I’m <span className="text-cyan-400">Kashaf Aman</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mb-4">
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'UI/UX Designer', 'User Friendly Interface'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Skilled in Next.js, HTML, CSS, TailwindCSS, JavaScript, and TypeScript — building smooth and modern web experiences.
          </p>

          <motion.a
            href="#projects"
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about.jpeg"
            alt="Profile Picture"
            fill
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
      </motion.div>
    </main>
  )
}

export default Homepage
