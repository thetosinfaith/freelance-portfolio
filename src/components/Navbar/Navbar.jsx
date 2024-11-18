import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.jpg";


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className="navbar-logo"  />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
      </ul>
      <div className="nav-connect">Download Resume</div>
    </div>
  )
}

export default Navbar