import React, { useEffect, useState } from 'react';
import { FaGithub, FaLink} from "react-icons/fa";
import Navbar from '../../../components/Navbar/Navbar';
import projectsData from '../../../data/projects.json';
import './Developer.css';

const Developer = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProjects(projectsData);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load projects');
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="developer-projects-title">./Websites.</h1>
      <div className="developer-content">
            <p>Some Websites I’ve Built</p>
            <span className="arrow-icon" onClick={() => navigate("/portfolio/developer")}>→</span>
          </div> 
    
      <section className="projects-section">
        {isLoading ? (
          <div className="spinner">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="projects-grid">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-details">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="stack">
                      {project.stack.map((tool, idx) => (
                        <li key={idx} className="stack-item">{tool}</li>
                      ))}
                    </ul>
                    <div className="links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item"
                      >
                        <FaLink /> Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No projects available</div>
            )}
          </div>
        )}
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tosin Faith. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Developer;
