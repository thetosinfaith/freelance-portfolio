import React from 'react';
import Card from '../../components/Card/Card'; 

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card 
          title="About"
          to="/about" 
          emoji="📜"
          pillText="Start Here"
        />
        <Card 
          title="Work"
          to="/portfolio" 
          emoji="📂"
          pillText="Featured"
        />
         <Card 
          title="Work"
          to="/portfolio" 
          emoji="📂"
          pillText="Featured"
        />
        <Card 
          title="Blog"
          to="/blog"  
          emoji="📝"
          pillText="Latest"
        />
      </div>
    </section>
  );
};

export default CardLayout;



