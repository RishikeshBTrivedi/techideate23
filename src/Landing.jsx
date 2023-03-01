import React from 'react'
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Timer from './Timer';
import Timer2 from './Timer2';
const Landing = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="items-center mx-auto flex justify-center pt-[8rem] pb-10">
        <img src={logo2} alt=""  className='logo'/>
      </header>
      <Timer2></Timer2>
      <Particles id="tsparticles" />
    </div>
  )
}

export default Landing