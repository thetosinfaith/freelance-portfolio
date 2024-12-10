import React, { useEffect, useState } from 'react';
import './Certifications.css';
import certificationsData from '../../data/certifications.json'; 
import Navbar from '../../components/Navbar/Navbar';

const Certifications = () => {
  const [certifications, setCertifications] = useState(certificationsData);

  useEffect(() => {
    window.scrollTo(0, 0);
    });

  return (
    <>
    <Navbar/>
      <div className="certifications-container">
        <div className="certifications-content">
          <h1>Certifications</h1>
          <p>Professional Achievements → </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <div key={index} className="certification-item">
              <img src={certification.ImageURL} alt={certification.CourseTitle} />
              <h3>{certification.CourseTitle}</h3>
              <p><strong>Certified By:</strong> {certification.CertifiedBy}</p>
              <p><strong>Date Awarded:</strong> {certification.DateAwarded}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tosin Faith. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Certifications;
