import React from 'react'
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Timer from './Timer';
import Timer2 from './Timer2';
import bg_img from "./images/new_landing_bg.png"
import Footer from './Footer';
import NavBar2 from './NavBar2';
const Landing = () => {
  return (
    <div className="landing" style={{backgroundColor: 'rgb(40,20,56)'}}>
      <NavBar2/>
      <img src = {bg_img} className = ""></img>
      {/* <Timer2></Timer2> */}
      <div className='md:h-screen' style={{backgroundColor: 'rgb(40,20,56)'}}>
      <div className=''>
      <h1 className='text-4xl pt-10 tracking-widest text-bold text-white text-center'
      style={{filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.50))"}}
      >ABOUT THE EVENT</h1>
      <h1 className='text-white text-2xl text-justify pr-5 pl-5 md:pr-[200px] md:pl-[200px] pt-10'>TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights, from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+ events and participation of 60,000 students from all over the nation, team TRYST ensures there is something fun for everyone. Come aboard and have an experience of a lifetime!. Click the links below to explore the current tryst website and social media</h1>
      </div>
      <div className='pt-20 grid grid-cols-3'>
        <div className='text-center'>
          <h1 className='text-white md:text-4xl text-xl'>20000+</h1>
          <h1 className='text-white md:text-4xl text-2xl' style={{filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.50))"}}>FOOTFALL</h1>
        </div>
        <div className='text-center'>
          <h1 className='text-white md:text-4xl  text-xl'>20+</h1>
          <h1 className='text-white md:text-4xl text-2xl' style={{filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.50))"}}>COLLEGES</h1>
        </div>
        <div className='text-center'>
          <h1 className='text-white md:text-4xl text-xl'>50+</h1>
          <h1 className='text-white md:text-4xl text-2xl' style={{filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.50))"}}>EVENTS</h1>
        </div>
      </div>
      <div className='pt-20 grid grid-cols-2'>
        <div className='text-center'>
          <h1 className='text-white md:text-4xl text-xl'>20000+</h1>
          <h1 className='text-white md:text-4xl text-2xl' style={{filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.50))"}}> FOOTFALL</h1>
        </div>
        <div className='text-center'>
          <h1 className='text-white md:text-4xl text-xl'>20+</h1>
          <h1 className='text-white md:text-4xl text-2xl' style={{filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.50))"}}>COLLEGES</h1>
        </div>
      </div>
      </div>
      
      
      {/* <Particles id="tsparticles" /> */}
      <Footer></Footer>
    </div>
    
  )
}

export default Landing