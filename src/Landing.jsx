import React from 'react'
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Timer from './Timer';
import Timer2 from './Timer2';
import bg_img from "./images/new_landing_bg.png"
const Landing = () => {
  return (
    <div className="landing" style={{backgroundColor: 'rgb(2,0,33)'}}>
      <Navbar></Navbar>
      <img src = {bg_img}></img>
      <Timer2></Timer2>
      {/* <Particles id="tsparticles" /> */}
    </div>
  )
}

export default Landing