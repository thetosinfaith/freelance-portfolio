import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqaavgoo");

  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Send a Message</h1>
          <p>
            Whether it is a business opportunity or a casual Hi!, write me, and
            I will respond. It's a promise.
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

        <form className="contact-right" onSubmit={handleSubmit}>
          {state.succeeded && (
            <p className="success-message">
              Thanks for your message! I’ll get back to you soon.
            </p>
          )}

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="form-input"
            required
          />

          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="form-input"
            required
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <select name="reason" id="reason" className="form-select" required>
            <option value="">Reason for Message</option>
            <option value="job-opportunity">I have a job for you.</option>
            <option value="collaboration">
              Let’s build something together?
            </option>
            <option value="general-inquiry">
              Just wanted to ask a thing or two
            </option>
            <option value="feedback">I have some feedback for you.</option>
          </select>

          <ValidationError
            prefix="Reason"
            field="reason"
            errors={state.errors}
          />

          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Write me one line or ten."
            className="form-textarea"
            required
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="contact-submit"
            disabled={state.submitting}
          >
            Say Hello
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
