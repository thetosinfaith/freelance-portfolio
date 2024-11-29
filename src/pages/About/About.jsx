import React, { useEffect } from 'react';
import './About.css';
import User from '../../assets/bigtee.jpg'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import Stack from '../../components/Stack/Stack';
import MoreInfo from '../../components/MoreInfo/MoreInfo';

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
          <div className="about-image">
            <img src={User} alt="Logo" />
          </div>
          <div className="about-text" data-aos="fade-up">
            <h1>Hello, I'm Tosin Faith.</h1>

            <p>Well, if you are here, you know me.</p>

            <p>You know I don't do it at all unless it is done right.</p>

            <p>My name is Oluwatosin Faith Ogungbaye — but you can call me Big Tee!</p>
            <p>
              I’m currently a Frontend Web Developer, based in Lagos, Nigeria. I use React to create beautiful, functional websites. Right now, <a href="https://docs.google.com/document/d/12_OZNg2Ae8xLvymKcp5qaXHZE-obTlYNlNAxQ_nS5UI/view?tab=t.0">I’m looking for a job</a> where I can put my skills to good use and work on meaningful projects.
            </p>
            <h2>Student</h2>
            <p>
              Alongside my career in tech, I’m pursuing a degree in Accounting at the University of Lagos, Nigeria. I also recently graduated from <a href="https://the-curve.africa/">The Curve by Kora</a> as a Frontend Developer, where I had the privilege of mentoring a mentee after graduating.
            </p>
            <h2>Team Lead</h2>
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
              <p>A simple guide to help anyone get ready for living on their own. <a href="#">Get it here.</a>
              </p>
              <li>
                <strong>Leaving Home Made Easy</strong> (November 2022):
              </li>
              <p>A step-by-step plan for making the move to adulthood easier. <a href="#">Get it here.</a></p>
            </ul>            
            <h2>            Impact Leader            </h2>
            <p>
              As someone who left home at a young age and found success, I was inspired to start an academy to help girls, especially those who have run away, navigate their transition to independence. <a href="#">Join the community here.</a>
            </p>

            <h2>Content Creator</h2>
            <p>
              On my <a href="https://www.instagram.com/thetosinfaith/">Instagram</a>, I share content about technology, my personal journey as a dev, and useful tips to help runaway grow.
            </p>
            <p>
              When I’m not coding, I listen to my (<a href="https://open.spotify.com/playlist/1EVE9kOZ2i4171hNdvWVhU">playlist</a>) and help people be their best selves.
            </p>
            <p>
              <a href="https://www.instagram.com/thetosinfaith/">Say Hello</a>
            </p>
            <p>
              <a href="#">Hire Me</a>
            </p>
            <MoreInfo/>
            <Stack/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
