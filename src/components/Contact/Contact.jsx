import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-section">
        <motion.div
          className="contact-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Send a Message</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything
            that you want me to work on. Message me.
          </p>
        </motion.div>

        <motion.form
          className="contact-right"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <label htmlFor="name">Your Name</label>
          <motion.input
            type="text"
            name="name"
            placeholder="Enter your name"
            whileFocus={{ scale: 1.02 }}
          />

          <label htmlFor="email">Your Email</label>
          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            whileFocus={{ scale: 1.02 }}
          />

          <label htmlFor="reason">Reason for Message</label>
          <motion.select
            name="reason"
            id="reason"
            required
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Select a reason</option>
            <option value="job-opportunity">I have a job for you.</option>
            <option value="collaboration">Let’s build something together?</option>
            <option value="general-inquiry">Just wanted to ask a thing or two</option>
            <option value="feedback">I have some feedback for you.</option>
          </motion.select>

          <label htmlFor="message">Write your message here</label>
          <motion.textarea
            name="message"
            rows="8"
            placeholder="Hi Tosin, "
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
