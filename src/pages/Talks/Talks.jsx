import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Events from "../../data/speaking.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Talks.css";

const Talks = () => {
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
        {Events.events?.map((event, index) => (
          <div className="speaking-item" key={index}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <button className="speaking-button">
              <a href="#">{event.cta}</a>
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Talks;
