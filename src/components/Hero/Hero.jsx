import React from "react";
import FK from "../../assets/pt.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="meet-container">
      <div className="meet-image-section">
        <img src={FK} alt="Meet Real Desmond" className="meet-image" />
      </div>

      <div className="meet-text-section">
        <h1 className="meet-title">Meet Real Desmond</h1>

        <p className="meet-subtitle">
          Hi, I’m Real Desmond, also known as <strong>Yellow Queen</strong>
        </p>

        <p className="meet-subtitle">
          A Brand Identity Designer, Brand Strategist, and Brand Manager.
        </p>

        <p className="meet-subtitle">
          I help business owners and professionals create powerful brand
          identities that stand out, build trust, and attract opportunities. But
          before I claimed the title of, Yellow Queen of Branding my journey took a few
          surprising turns…
        </p>

        <p className="meet-subtitle">
          In 2021, I was running an online thrift clothing business. And by
          “running,” I mean figuring things out as I went. Sales were
          inconsistent, and I quickly realized that if I wanted to succeed, I
          needed better marketing.
        </p>

        <p className="meet-subtitle">
          I wanted to create flyers to promote my business, but I had no design
          skills. I had two choices: hire a designer or learn it myself. With no
          budget to outsource, I went for...
        </p>

        <div className="button-container">
          <button className="about-me-button">About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
