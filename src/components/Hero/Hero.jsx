import React from 'react';
import './Hero.css';
import HeroImage from '../../assets/idee.jpg'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img 
          src={HeroImage}
          alt="Profile Placeholder" 
        />
        <div className="content">
          <h6 className="greeting"> Hi, My Name is Tosin</h6>
          <h1 className="main_head">
            <span className="highlight">I Build User Interfaces</span> <br />
          </h1>
          <h6 className="subtitle">
          I build frontend applications. Sometimes I design, and very rarely I work on the backend. I always make sure the apps I deliver are fast, easy to use, and responsive.
          </h6>
          <div className="social-icons">
            <a href="https://wa.me/+2348123539192" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://facebook.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:tosinfaith.contact@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linktr.ee/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link"></i>
            </a>
          </div>
          <a href="https://wa.me/+2348123539192" className="cta" target="_blank" rel="noopener noreferrer">
            <button className="hero_button">Say Hello</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
