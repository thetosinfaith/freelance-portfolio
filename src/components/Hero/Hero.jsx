import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import HeroImage from '../../assets/idee.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="hero" data-aos="fade-up">
        <img 
          src={HeroImage} 
          alt="Profile Placeholder" 
          className="hero-image" 
          data-aos="zoom-in"
        />
        <div className="content" data-aos="fade-in" data-aos-delay="200">
          <h6 className="greeting">Hello, I'm Tosin Faith</h6>
          <h1 className="main_head">
            <span className="highlight">Frontend Developer</span> <br />
          </h1>
          <h6 className="subtitle">
            I build frontend applications. Sometimes I design, and very rarely I work on the backend. I ensure that the apps I deliver are fast, easy to use, and responsive.
          </h6>
          <div className="social-icons" data-aos="fade-up" data-aos-delay="400">
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
            <a href="mailto:tosinfaith.contact@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linktr.ee/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link"></i>
            </a>
          </div>
          <a href="https://wa.me/+2348123539192" className="cta" target="_blank" rel="noopener noreferrer">
            <button className="hero_button" data-aos="flip-up" data-aos-delay="600">Let’s chat</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
