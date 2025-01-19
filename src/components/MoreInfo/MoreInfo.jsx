import React from "react";
import CodeIcon from "../../assets/images/code-icon.png";
import Education from "../../assets/images/edu-icon.png";
import Projects from "../../assets/images/project-icon.png";
import { Link } from "react-router-dom";
import "./MoreInfo.css";

const MoreInfo = () => {
  return (
    <div className="more-info">
      <div className="languages" data-aos="fade-up">
        <img src={CodeIcon} alt="" />
        <h4>Tech Stack</h4>
        <h4>HTML, CSS, Javascript, React</h4>
      </div>
      <div className="education" data-aos="fade-up" data-aos-delay="200">
        <img src={Education} alt="" />
        <h4>Education</h4>
        <h4>Accounting University of Lagos</h4>
      </div>
      <div className="projects" data-aos="fade-up" data-aos-delay="400">
        <img src={Projects} alt="" />
        <h4>Work Portfolio</h4>
        <h4 className="viewp">
          <Link to="/portfolio">Click to View All My Projects</Link>
        </h4>
      </div>
    </div>
  );
};

export default MoreInfo;
