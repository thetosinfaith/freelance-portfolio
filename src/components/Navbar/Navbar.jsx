import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
    <Link to='/'>
      <img src={logo} alt="" className="navbar-logo" />
    </Link>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
      </ul>
      <div className="nav-connect"><a 
        href="https://docs.google.com/document/d/12_OZNg2Ae8xLvymKcp5qaXHZE-obTlYNlNAxQ_nS5UI/view" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="cta-button"
      >
        View My Resume
      </a>
</div>
    </div>
  )
}

export default Navbar