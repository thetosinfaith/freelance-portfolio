import React, { useEffect } from "react"; // Import useEffect correctly
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Events from "../../data/speaking.json"; // Ensure this JSON structure is correct
import AOS from "aos";
import "aos/dist/aos.css";
import "./Talks.css";

const Talks = () => {
  // Initialize AOS for animations
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="speaking-upper">
        <h1 className="speaking-main-title">Speaking →</h1>
        <p className="speaking-intro">I always have so much to share...</p>
      </div>

      <div className="speaking-text" data-aos="fade-up">
        <h1 className="speaking-sub-title">
          <i></i>... all you have to do is give me a topic I'm passionate about
          - remote working, leaving home, social media, work-life balance,
          finance, creator economy, women - and you'd unleash the chatterbox in
          me.
        </h1>
        <p>
          <a href="mailto:hellotosinfaith@gmail.com"> Invite Me to Speak</a>
        </p>
        <p>
          <a href="#">Download My Media Kit</a>
        </p>
        <p>
          <a href="#">Work With Me</a>
        </p>
      </div>

      <div className="speaking-grid">
        {Events.event && (
          <div className="speaking-item">
            <img src={Events.event.image} alt="" />
            <h3>{Events.event.name}</h3>
            <button className="speaking-button">
              <a href="#">{Events.event.cta}</a>
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Talks;
