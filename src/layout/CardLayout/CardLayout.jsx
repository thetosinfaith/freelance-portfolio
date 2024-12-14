import React from 'react';
import Card from '../../components/Card/Card'; 

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card 
          title="Know Tosin"
          to="/about" 
          emoji="👋"
          pillText="Let’s Begin!"
        />
        <Card 
          title="Projects HQ"
          to="/portfolio" 
          emoji="📂"
          pillText="See My Best"
        />
        <Card 
          title="Her Journal"
          to="/blog"  
          emoji="✍️"
          pillText="What’s New?"
        />
        <Card 
          title="Quick Links"
          to="/resources" 
          emoji="⭐"
          pillText="More Highlights"
        />
      </div>
    </section>
  );
};

export default CardLayout;



