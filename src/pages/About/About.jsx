import React, { useEffect } from 'react';
import './About.css';
import User from '../../assets/user.jpg'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CodeIcon from '../../assets/images/code-icon.png'
import Education from '../../assets/images/edu-icon.png'
import Projects from '../../assets/images/project-icon.png'
import Vscode from '../../assets/images/vscode.png'
import firebase from '../../assets/images/firebase.png'
import react from '../../assets/images/react.png'
import figma from '../../assets/images/figma.png'
import git from '../../assets/images/git.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import circularText from '../../assets/images/circular-text.png'
import devIcon from '../../assets/images/dev-icon.png'
import Vercel from '../../assets/images/vercel.png'
import AOS from 'aos'; 
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; 

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='upper-about'>
        <p>Introduction</p>
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={User} alt="Logo" />
          </div>
          <div className="about-text" data-aos="fade-left">
            <h1>Hello, I'm Tosin</h1>

            <p>Well, if you are here, you know me.</p>

            <p>You know I don't do it at all unless it is done right.</p>

            <p>My name is Oluwatosin Faith Ogungbaye — but you can call me Big Tee!</p>
            <p>
              I’m currently a Frontend Web Developer, based in Lagos, Nigeria. I use React to create beautiful, functional websites. Right now, I’m looking for a job where I can put my skills to good use and work on meaningful projects.
            </p>
            <p>
              Alongside my career in tech, I’m pursuing a degree in Accounting at the University of Lagos, Nigeria. I also recently graduated from <a href="https://the-curve.africa/">The Curve by Kora</a> as a Frontend Developer, where I had the privilege of mentoring a mentee after graduating.
            </p>
            <p>
              In September 2024, I led a team of 5 to victory at The Curve by Kora Hackathon. Out of 12 teams, we came in first place for our standout work on UI, functionality, and presentation with <a href="https://kindraise.vercel.app/">KindRaise</a>.
            </p>

            <h2>Author</h2>

            <p>
              Apart from being a Developer, I’ve written two books:
            </p>
            <ul>
              <li>
                <strong>10 Things You Need to Know Before Leaving Home</strong> (October 2021): 
              </li>
              <p>A simple guide to help anyone get ready for living on their own. <a href="https://linktr.ee/thetosinfaith">Get it here.</a>
              </p>
              <li>
                <strong>Leaving Home Made Easy</strong> (November 2022):
              </li>
              <p>A step-by-step plan for making the move to adulthood easier. <a href="https://linktr.ee/thetosinfaith">Get it here.</a></p>
            </ul>

            <p>
              As someone who left home at a young age and found success, I was inspired to start an academy to help girls, especially those who have run away, navigate their transition to independence. <a href="#">Join the community here.</a>
            </p>

            <h2>Community Lead</h2>
            <p>
              On my <a href="https://www.instagram.com/thetosinfaith/">Instagram</a>, I share content about technology, my personal journey as a dev, and useful tips to help others grow.
            </p>
            <p>
              When I’m not coding, I listen to my (<a href="https://open.spotify.com/playlist/1EVE9kOZ2i4171hNdvWVhU">playlist</a>) and help people be their best selves.
            </p>
            <p>
              <a href="https://www.instagram.com/thetosinfaith/">Say Hello</a>
            </p>
            <p>
              <a href="#">Book a 1:1</a>
            </p>
            
            <div className='more-info'>
              <div className='languages' data-aos="fade-up">
                <img src={CodeIcon} alt="" /> 
                <h4>Stack</h4>
                <h4>HTML, CSS, Javascript, React</h4>
              </div>
              <div className='education' data-aos="fade-up" data-aos-delay="200">
                <img src={Education} alt="" />
                <h4>Education</h4>
                <h4>Accounting University of Lagos</h4>
              </div>
              <div className='projects' data-aos="fade-up" data-aos-delay="400">
                <img src={Projects} alt="" />
                <h4>Projects</h4>
                <h4 className='viewp'><Link to='/portfolio'>Click to View All My Projects</Link></h4>
              </div>
            </div>

            <div className='tools' data-aos="zoom-in" data-aos-delay="600">
              <p>My Tech Stack</p>
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={react} alt="" />
              <img src={Vscode} alt="" />
              <img src={firebase} alt="" />
              <img src={figma} alt="" />
              <img src={git} alt="" />
              <img src={Vercel} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default About;
