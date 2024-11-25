import React, { useEffect } from 'react';
import './About.css';
import logo from '../../assets/tosin.jpg'; 
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
import circularText from '../../assets/images/circular-text.png'
import devIcon from '../../assets/images/dev-icon.png'
import Vercel from '../../assets/images/vercel.png'
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const About = () => {
  useEffect(() => {

    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='upper-about' data-aos="fade-up">
        <p>Introduction</p>
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={logo} alt="Logo" />
            <div className='circle'>
              <div className='rotating'>
                <img src={circularText} alt="" />
              </div>
              <img src={devIcon} alt="" className="dev-icon"/>
            </div>
          </div>
          <div className="about-text" data-aos="fade-left">
            <h1>Hello, I'm Tosin</h1>

            <p>Well, if you are here, you know me. You know I don't do it at all unless it is done right.</p>
            <p>My name is Tosin Faith (I’m fondly known as Tee), and I’m currently a Frontend Dev based in Lagos, Nigeria.</p>
            <p>I got into programming in 2024 when I was trying to build a website for my then-business.</p>
            <p>In September 2024, I completed The Curve Africa by Kora Tech Program, where <b>I received a certification in Frontend Development</b>. There, I picked up web development skills and learned how to work in a team. I later became a mentor for the program after completing it.</p>
            <p>In September 2024, <b>I led a team</b> to build our first product for a Hackathon, called "Kindraise" — <b><i>a fundraising webapp that allows you to raise money for your needs.</i></b></p>
            <p>We came in first place.</p>
            <p>Someday, I plan to create content around building tech products, share my journey of becoming a software engineer, and help others grow in tech through my social media channels.</p>
            
            <div className='more-info'>
              <div className='languages' data-aos="fade-up">
                <img src={CodeIcon} alt="" />
                <h4>Languages</h4>
                <h4>HTML, CSS, Javascript, React</h4>
              </div>
              <div className='education' data-aos="fade-up" data-aos-delay="200">
                <img src={Education} alt="" />
                <h4>Education</h4>
                <h4>(Frontend) Certification</h4>
              </div>
              <div className='projects' data-aos="fade-up" data-aos-delay="400">
                <img src={Projects} alt="" />
                <h4>Projects</h4>
                <h4>Built more than 5 projects</h4>
              </div>
            </div>

            <div className='tools' data-aos="zoom-in" data-aos-delay="600">
              <p>I use these, too often.</p>
              <img src={Vscode} alt="" />
              <img src={firebase} alt="" />
              <img src={react} alt="" />
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
