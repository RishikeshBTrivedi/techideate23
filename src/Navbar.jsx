import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion"
import tech from "./images/techidiate_logo.png"
import {Link} from "react-scroll"
import { FaBars, FaTimes } from 'react-icons/fa'
import "./index.css"


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
  
  return (
    <div>
      
       
          
              
              <div className='header'>
    <nav className='navbar'>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>

        {/* <li className='navTitle'>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>IEEEMUJ.</Link>
            </li> */}
          <div className="navContent">
            <li className='nav-item'>
                <Link to="landing" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link>
            </li>
            <li className='nav-item'>
                <Link to="faq" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>FAQS</Link>
            </li>
            </div>
            
        </ul>
    </nav>
</div>
      
    </div>
  );
}

export default Nav;
