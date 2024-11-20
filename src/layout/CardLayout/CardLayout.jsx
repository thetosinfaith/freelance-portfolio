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
          pillText="New"
        />
        <Card 
          title="Portfolio"
          to="/portfolio" 
          emoji="📂"
          pillText="Featured"
        />
        <Card 
          title="Blogs"
          to="/blog"  
          emoji="📝"
          pillText="Latest"
        />
      </div>
    </section>
  );
};

export default CardLayout;



