import React from 'react';
import './About.css';
import logo from '../../assets/team.jpg'; 
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={logo} alt="Logo" />
          </div>
          <div className="about-text">
            <h1>Hello, I'm Tosin</h1>
            <p>My name is Tosin Faith (I’m fondly known as Tee), and I’m currently a Frontend Engineer based in Lagos, Nigeria.</p>
            
            <p>I got into programming in 2024 when I was trying to build a website for my then-business.</p>

            <p>In September 2024, I completed The Curve Africa by Kora Tech Program, where I received a certification in Frontend Development. There, I picked up web development skills and learned how to work in a team. I later became a mentor for the program after completing it.</p>

            <p>In September 2024, I led a team to build our first product for a Hackathon, called "Kindraise" — a fundraising webapp that allows you to raise money for your needs.</p>

            <p>We came in first place.</p>

            <p>After graduating from the bootcamp, I continued to lead development at Kindraise and still work with the frontend team. Our aim is to make Kindraise the go-to fundraising app in Africa by 2030.</p>
                                                  
            <p>Someday, I plan to create content around building tech products, share my journey of becoming a software engineer, and help others grow in tech through my social media channels.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tosin Faith. All rights reserved.</p>
      </footer>
    </>
  );
};

export default About;
