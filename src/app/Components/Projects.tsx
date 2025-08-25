'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with Next.js and Tailwind CSS.',
    Image: '/portfolio.jpeg',
    link: 'https://github.com/kashaf0007/portfolio',
  },
  {
    title: 'E-commerce Store',
    description: 'An online shop with product listings and Stripe checkout.',
    Image: '/shop.co.jpeg',
    link: 'https://figma-templete-hackathone2-trtk.vercel.app/',
  },
  {
    title: 'AI Chatbot',
    description: 'A chatbot powered by GPT API with React interface.',
    Image: '/ai.jpeg',
    link: 'https://agentic-ai-smoky.vercel.app/',
  },
    {
    title: 'Travel Blog',
    description: 'A travel blog website in next.js and tailwind CSS.',
    Image: '/blog.jpeg',
    link: 'https://my-travel-blog-website-five.vercel.app/',
  },
    {
    title: "Password Generator",
    description: 'Password generator in python and streamlit.',
    Image: '/password.jpeg',
    link: 'https://password-generator-ka.streamlit.app/',
  },
    {
    title: 'Unit Converter',
    description: 'Unit converter in python and streamlit.',
    Image: '/unit-coverter.jpeg',
    link: 'https://unit-converter-k.streamlit.app/',
  },
     {
    title: 'Static Resume',
    description: 'A Static resume in HTML and CSS' ,
    Image: '/resume.jpeg',
    link: 'https://hackathone-milestone1and2.vercel.app/',
  },
     {
    title: 'Resume buider',
    description: 'Resume builder resume in HTML and CSS',
    Image: '/resume-builder.jpeg',
    link: 'https://hackathone-milestone3-seven.vercel.app/',
  },
  {
    title: 'Growth mindset',
    description: 'A growth mindset build with Python and streamlit.',
    Image: '/mindset.jpeg',
    link: 'https://growth-mindset-as.streamlit.app/',
  },
]

const ProjectsPage = () => {
  return (
    <main id='projects' className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-16 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold mb-14 text-cyan-400"
      >
        My Projects
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.8}}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition duration-400"
          >
            <Image
              src={project.Image}
              alt={project.title}
              width={340}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-cyan-300">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-cyan-400 hover:text-white transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default ProjectsPage
