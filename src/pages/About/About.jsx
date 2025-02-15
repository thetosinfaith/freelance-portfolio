import React, { useEffect } from "react";
import "./About.css";
import User from "../../assets/sl.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import Stack from "../../components/Stack/Stack";
import BookMe from "../../components/BookMe/BookMe";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
    

      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={User} alt="Tosin Faith" />
          </div>
          <div className="about-text" data-aos="fade-up">
            <h1 className="sub-title">Meet Tosin Faith</h1>
            <p>
              Well, if you are here, you know I don't do it at all unless it is
              done right.
            </p>
            <p>
              Everybody who ever worked with me agrees that{" "}
              <i>Tosin knows her stuff.</i>
            </p>
            <p>
              {" "}
              I have worn a lot of hats. And considering the size of my head, I
              think they are a little too many. Right now, I'm a web developer
              completely sold out to designing and building professional,
              beautiful websites you'll love.
            </p>
            <h2>Accountant</h2>
            <p>
              I’m currently studying Accounting, a 5 - year course. Sometimes, I
              spend most of my time figuring out why the debit and credit side
              of an accout sheet is not balancing.
            </p>

            <h2>Writer</h2>
            <p>
              On some days, I write about web development, leaving home, and
              building a personal brand. I’ve also authored two books:{" "}
              <a href="#">Click here.</a>
            </p>

            <h2>Speaker</h2>
            <p>
              I’m not a conventional speaker, and I never will be. I don’t talk
              about strategies - I show you how to apply them. I always have so
              much to say on:
            </p>
            <ul>
              <li>Building a Personal Brand</li>
              <li>Growth & Leaving Home</li>
              <li>My Journey as a Web Developer</li>
              <li>Work Life Balance</li>
              <li>Women</li>
              <li>Finance</li>
              <li>Creator Economy</li>
            </ul>
            <p>
              <a href="mailto:hellotosinfaith@gmail.com">Invite Me to Speak</a>
            </p>

            <p>
              <a href="https://www.instagram.com/thetosinfaith/">
                Say Hello on Instagram
              </a>
            </p>
            <p>
              <a href="#">Work With Me</a>
            </p>
            <MoreInfo />
            
          </div>
        </div>
      </div>
      <Stack />
      <BookMe/>
      <Footer />
    </>
  );
};

export default About;
