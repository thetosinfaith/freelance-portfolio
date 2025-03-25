import React, { useState } from 'react';
import './Header.css';
import Logoo from '../../assets/oo.png'
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className='header-container'>
        <section className='logo'>
          <img src={Logoo} alt="Logo" />
        </section>
        
        <section className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to='/' style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>Home</NavLink>
          <NavLink to='/about-us' style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>About Us</NavLink>
          <NavLink to='/faq' style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>FAQs</NavLink>
          <NavLink to='/details' style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>Blog</NavLink>
          <NavLink to='/workspaces' style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>Contact Us</NavLink>
        </section>
        
        <section>
          <div className='reg-buttons'>
            <NavLink to='auth/login'><button className='login'>Login</button></NavLink>
            <NavLink to='choose-account'><button className='signup'>Sign Up For Free</button></NavLink>
          </div>
          
          <div className='hamburger'>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </section>
        
        <div className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
          <span className='close-menu' onClick={() => setIsOpen(false)}>&times;</span>
          <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to='/Categories' onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to='/listings' onClick={() => setIsOpen(false)}>Listings</NavLink>
          <NavLink to='/post' onClick={() => setIsOpen(false)}>FAQs</NavLink>
          <NavLink to='/details' onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to='/workspaces' onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          <NavLink to='auth/login' onClick={() => setIsOpen(false)}><button className='login'>Login</button></NavLink>
          <NavLink to='choose-account' onClick={() => setIsOpen(false)}><button className='signup'>Sign Up For Free</button></NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
