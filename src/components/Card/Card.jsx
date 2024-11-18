import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';  
import './card.css';

const Card = ({ title, to, emoji, pillText }) => {  
  useEffect(() => {
    feather.replace(); 
  }, []);

  return (
    <Link to={to} className="card">
      <div className="card_pill">
        <button className="pill">
          {pillText} <i data-feather="loader"></i>
        </button>
      </div>
      <div className="card_content">
       
        {title && title.trim() && (
          <p>{title} <span role="img" aria-label={title.toLowerCase()}>{emoji}</span></p>
        )}
      </div>
    </Link>
  );
};

export default Card;