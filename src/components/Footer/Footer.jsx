import React, { useEffect } from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <h3>Find Me on Social Media ✌🏽</h3>
        <div className="footer_links">
          <a href="https://www.linkedin.com/in/thetosinfaith/" target="_blank" rel="noopener noreferrer">
            LinkedIn <i data-feather="linkedin"></i>
          </a>

          <a href="https://twitter.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
            Twitter <i data-feather="twitter"></i>
          </a>

          <a href="https://github.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
            Github <i data-feather="github"></i>
          </a>

          <a href="mailto:tosinfaith.contact@gmail.com">
            Email <i data-feather="mail"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
