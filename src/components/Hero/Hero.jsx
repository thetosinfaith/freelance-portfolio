import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
      <div class="hero-img-container">
      <img src={profile_img} alt="" />
      </div>
        <div className="content">
          <h6 className="greeting"> Hi, My Name is</h6>
          <h1 className="main_head">
            <span className="highlight">👋🏽 Tosin Faith O.</span> <br />
            <span className="rest">A Frontend Dev, Based in Lagos</span>
          </h1>
          <h6 className="subtitle">
          I build websites with a focus on responsive design, accessibility and aesthetics. When I'm not working, I share my knowledge by teaching others, writing articles and speaking at events. (don't judge me, I love being busy 😩😩).
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
          <a href="mailto:tosinfaith.contact@gmail.com" className="cta" target="_blank" rel="noopener noreferrer">
            <button className="hero_button">Available for Work</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
