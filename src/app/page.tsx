import React from 'react'
import Navbar from '../app/Components/Navbar'
import Contact from "../app/Components/Contact"
import Footer from './Components/Footer'
import About from './Components/About'
import Services from './Components/Services'
import SkillsPage from './Components/Skills'
import ProjectsPage from './Components/Projects'
import Homepage from './Components/Home'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <About/>
      <Services/>
      <ProjectsPage/>
      <SkillsPage/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home


// https://portfolio-updated-pink.vercel.app/#