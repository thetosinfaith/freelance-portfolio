import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import HeroImage from "../../assets/oo.png";
import { BsArrowUpRight } from "react-icons/bs";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
        <div className="content" data-aos="fade-in" data-aos-delay="200">
          <h6 className="greeting">
            <span className="icon-text-container">
              <DotLottieReact
                src="https://lottie.host/2ab52245-9d34-4d05-ab47-9070a9efa578/BG0acctWgL.lottie"
                loop
                autoplay
                style={{ width: "30px", height: "30px" }}
              />
              Africa's Most Celebrated Woman in Tech
            </span>
          </h6>
          <span className="highlight">👋🏽 Hi there, I am Tosin</span> <br />
          <h6 className="subtitle">
            I have designed and built over 10+ websites for top brands, and global superstars. I’ve worked with various
            software companies. Need
            pictures or my bio for an event or speaking feature?
            <a
              href="https://wa.me/message/5B4GQJQK3OZLH1"
              className="styled-link"
            >
              {" "}
              Click here.
            </a>
          </h6>
          <div className="social-icons">
            <a
              href="https://wa.me/+2348123539192"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://facebook.com/thetosinfaith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/thetosinfaith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/thetosinfaith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:tosinfaith.contact@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://linktr.ee/thetosinfaith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link"></i>
            </a>
          </div>
          <a href="https://wa.me/+2348123539192" className="hero_button">
            Send a Message <BsArrowUpRight className="icon-bold" />
          </a>
        </div>
        <img
          src={HeroImage}
          alt="Profile Placeholder"
          className="hero-image"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Hero;
