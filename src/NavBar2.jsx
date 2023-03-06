import React from 'react'
import techLogo from "./images/techidiate_logo.png"
const NavBar2 = () => {
  return (
    <div>
    <div className="navbar bg-base-100 z-1" style = {{backgroundColor:"rgba(37,20,55,0.1)"}}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href = "/events">Events</a></li>
        <li><a href = "/sponsors">Sponsors</a></li>
        <li><a href = "/faqs">FAQs</a></li>
        <li><a href = "/team">Team</a></li>
      </ul>
    </div>
    <a href = "/" className="btn btn-ghost normal-case text-xl">Techideate'23</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a href = "/events">Events</a></li>
        <li><a href = "/sponsors">Sponsors</a></li>
        <li><a href = "/faqs">FAQs</a></li>
        <li><a href = "/team">Team</a></li>
    </ul>
  </div>
  <div className="navbar-end z-[-1]">
    <a className="btn">Get started</a>
  </div>
</div>
    </div>
  )
}

export default NavBar2