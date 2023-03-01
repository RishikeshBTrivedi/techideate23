import React from 'react'
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Timer from './Timer';
const Landing = () => {
  return (
    <div className="App" class="landing" id="landing">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo2} alt=""  className='logo'/>
      </header>
    
      <Particles id="tsparticles" />
    </div>
  )
}

export default Landing