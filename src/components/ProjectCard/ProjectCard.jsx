import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project_card">
      <img src={image} alt={title} className="project_image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project_link">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
