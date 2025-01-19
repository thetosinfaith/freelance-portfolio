import React, { useEffect, useState } from "react";
import communityData from "../../data/communities.json";
import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";
import "./Communities.css";

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    setCommunities(communityData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="community-container">
        <div className="community-content">
          <h1 className="community-title">Communities</h1>
          <p className="community-tag">Groups I Belong To</p>
        </div>
        {communities.length > 0 ? (
          <section aria-label="Community List">
            <ul className="community-list">
              {communities.map((community, index) => (
                <li key={index} className="community-item">
                  <img src={community.img} alt={`Image of ${community.name}`} />
                  <h2 className="community-name">{community.name}</h2>
                  <p className="community-description">
                    {community.description}
                  </p>
                  <p>
                    <strong>Category:</strong>
                    {community.category.map((cat, index) => (
                      <span key={index}>{cat}</span>
                    ))}
                  </p>
                  <p className="community-location">
                    <strong>Location:</strong> {community.location}
                  </p>
                  <p className="community-role">
                    <strong>Role:</strong> {community.role}
                  </p>
                  {community.joinLink && (
                    <a
                      href={community.joinLink}
                      className="community-join-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {community.cta}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p>No communities available at the moment.</p>
        )}
      </div>
      <MainFooter />
    </>
  );
};

export default Communities;
