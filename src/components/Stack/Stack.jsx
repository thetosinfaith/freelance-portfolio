import React from "react";
import Vscode from "../../assets/images/vscode.png";
import firebase from "../../assets/images/firebase.png";
import react from "../../assets/images/react.png";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import Vercel from "../../assets/images/vercel.png";
import "./Stack.css";

const Stack = () => {
  const stack = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "React", logo: react },
    { name: "VS Code", logo: Vscode },
    { name: "Firebase", logo: firebase },
    { name: "Figma", logo: figma },
    { name: "Git", logo: git },
    { name: "Vercel", logo: Vercel },
  ];

  return (
    <section className="tech-stack-container">
      <h2 className="tech-stack-title">I use these tools, too often. </h2>

      <div className="tech-stack-grid-wrapper">
        <div className="tech-stack-grid">
          {stack.map((tech, index) => (
            <div key={index} className={`tech-stack-card`}>
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="tech-stack-logo"
              />
            </div>
          ))}
        </div>

        <div className="tech-stack-grid">
          {stack.map((tech, index) => (
            <div
              key={index}
              className={`tech-stack-card ${
                index < 3 ? "tech-stack-special-logo" : ""
              }`}
            >
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="tech-stack-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
