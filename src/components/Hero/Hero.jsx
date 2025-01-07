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
          <h6 className="greeting">Hello, I'm Tosin Faith O.</h6>
          <h1 className="main_head">
            <span className="highlight">Frontend Developer</span> <br />
          </h1>
          <h6 className="subtitle">
          I build frontend applications using HTML, CSS, and JavaScript, focusing on performance and responsiveness. Sometimes, I design user interfaces, and rarely, I handle backend tasks. My goal is to create fast, user-friendly applications for a smooth experience.
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
            <a href="mailto:tosinfaith.contact@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linktr.ee/thetosinfaith" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link"></i>
            </a>
          </div>
          <a href="https://wa.me/+2348123539192" className="cta" target="_blank" rel="noopener noreferrer">
            <button className="hero_button">Let’s chat</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
