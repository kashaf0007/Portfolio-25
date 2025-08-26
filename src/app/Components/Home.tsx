'use client'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <main className="relative h-screen w-full bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cyan-500/50 mix-blend-overlay z-0"></div>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I am <span className="text-cyan-400">Kashaf Aman</span>
          </h1>
          <Typewriter
      options={{
          strings: [ 'Frontend Developer ', 'UI/UX Designer',"User friendly interface"],
          autoStart: true,
          loop: true,
            }}
/>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
             Next.js,HTML,CSS,TailwindCSS,Javascript,typescript.
          </p>
          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="w-52 h-52 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about.jpeg" 
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </motion.div>
    </main>
  )
}

export default Homepage

