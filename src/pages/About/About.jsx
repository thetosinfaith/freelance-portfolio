import React from 'react';
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




const About = () => {
  return (
    <>
      <Navbar />
      <div className='upper-about'>
      <p>Introduction</p>
      <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={logo} alt="Logo" />
            <div className='circle'>
              <div className='rotating'>
              <img src={circularText} alt="" />
              </div>
              <img src={devIcon} alt="" className="dev-icon"/>
            </div>
          </div>
          <div className="about-text">
            <h1>Hello, I'm Tosin</h1>
            <p>I build frontend applications. Sometimes I design, and very occasionally I work on the backend. I always make sure the apps I deliver are fast, easy to use, and responsive.</p>

            <div className='more-info'>
              <div className='languages'>
                <img src={CodeIcon} alt="" />
                <h4>Languages</h4>
                <h4>HTML, CSS, Javascript, React</h4>
              </div>
              <div className='education'>
                <img src={Education} alt="" />
                <h4>Education</h4>
                <h4>(Frontend) Certification</h4>
              </div>
              <div className='projects'>
                <img src={Projects} alt="" />
                <h4>Projects</h4>
                <h4>Built more than 5 projects</h4>
              </div>
            </div>
            <div className='tools'>
              <p>Tools I use</p>
              <img src={Vscode} alt="" />
              <img src={firebase} alt="" />
              <img src={react} alt="" />
              <img src={figma} alt="" />
              <img src={git} alt="" />
            </div>
            </div>
        </div>
      </div>
      <Footer/>

      {/* <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tosin Faith. All rights reserved.</p>
      </footer> */}
    </>
  );
};

export default About;
