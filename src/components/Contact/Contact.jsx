import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,    
      once: true,
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact-section">
        <div
          className="contact-left"
          data-aos="fade-right" 
        >
          <h1>Send a Message</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like me to work on.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <img src={mail_icon} alt="Mail Icon" />
              <span>hellotosinfaith@gmail.com</span>
            </div>
            <div className="info-item">
              <img src={location_icon} alt="Location Icon" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="info-item">
              <img src={call_icon} alt="Call Icon" />
              <span>+234 812 353 9192</span>
            </div>
          </div>
        </div>

        <form
          className="contact-right"
          data-aos="fade-left" 
        >
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="form-input"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="form-input"
          />

          <label htmlFor="reason">Reason for Message</label>
          <select name="reason" id="reason" className="form-select" required>
            <option value="">Select a reason</option>
            <option value="job-opportunity">I have a job for you.</option>
            <option value="collaboration">Let’s build something together?</option>
            <option value="general-inquiry">Just wanted to ask a thing or two</option>
            <option value="feedback">I have some feedback for you.</option>
          </select>

          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Hi Tosin, "
            className="form-textarea"
          ></textarea>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
