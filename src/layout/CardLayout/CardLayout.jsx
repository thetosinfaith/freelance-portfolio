import React from 'react';
import Card from '../../components/Card/Card'; 

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card 
          title="About Me"
          to="/about" 
          emoji="📜"
          pillText="Start Here"
        />
        <Card 
          title="Portfolio"
          to="/portfolio" 
          emoji="📂"
          pillText="Featured"
        />
        <Card 
          title="Thoughts"
          to="/blog"  
          emoji="📝"
          pillText="Latest"
        />
        <Card 
          title="Resources"
          to="/resources" 
          emoji="💼"
          pillText="Highlights"
        />
      </div>
    </section>
  );
};

export default CardLayout;



