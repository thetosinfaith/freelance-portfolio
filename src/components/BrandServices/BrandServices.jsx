import React from "react";
import "./BrandServices.css";

const BrandServices = () => {
  const items = [
    "Social Media Management",
    "Research & Community Engagement",
    "Copywriting & Email Management",
    "Campaign Management",
    "Cold Calling and Lead Generation",
    "Content Creation & Strategy",
    "Podcast Editing & Production",
    "Calendar Management & Appointment Setting",
  ];

  return (
    <>
      <div className="brand-services-container">
        <h2>I'm a Woman of Many Talents</h2>
        <p>Take a look at all the services I offer</p>

        <div className="grid-container">
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandServices;
