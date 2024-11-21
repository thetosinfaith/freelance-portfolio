import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>

      <div className="hamburger-icon" onClick={handleToggle}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
      </ul>

      <div className="nav-connect">
        <a
          href="https://docs.google.com/document/d/12_OZNg2Ae8xLvymKcp5qaXHZE-obTlYNlNAxQ_nS5UI/view"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
