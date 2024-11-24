import React from 'react';
import logo from "../../assets/logo.jpg";
import user_icon from "../../assets/user_icon.svg";

import './MainFooter.css';

const MainFooter = () => {
  return (
    <div className='mainfooter'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt="Company Logo" />
          <p>Africa's Most Celebrated Woman in Tech</p>
        </div>
        <div className='footer-top-right'>
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
            />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© Tosin Faith 2024</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
