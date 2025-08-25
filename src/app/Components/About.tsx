import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-16 text-white">
      <section id="About" className="text-gray-300 body-font">
        <div className="container mx-auto flex px-8 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/about.jpeg"
              height={500}
              width={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-cyan-400">
              About Me
            </h1>
            <p className="mb-6 leading-relaxed text-xl">
              I am a Frontend developer passionate about creating websites using REACT, NEXTJS, TYPESCRIPT, JAVASCRIPT, HTML, and CSS. I specialize in responsive, userfriendly, and high performance interfaces.
              I focus on mastering fundamentals, blending design, functionality, and performance. Currently, I am exploring Python and AI.
            </p>
            <p className="mb-8 leading-relaxed text-xl">
              Explore my projects to see my skills in React.js, Next.js, TypeScript, and modern web development.
            </p>

             
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-gray-100 border-4 py-2 px-6  hover:bg-cyan-500/50 hover:text-white  rounded text-lg">
                Hire Me
              </button>
              <button className="ml-4 inline-flex text-black bg-gray-100 border-4 py-2 px-6  hover:bg-cyan-500/50 hover:text-white  rounded text-lg">
                <Link href={"#projects"}>See Projects</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
