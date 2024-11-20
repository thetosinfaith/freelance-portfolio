import React from 'react';
import Card from '../../components/Card/Card'; 

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card 
          title="Profile"
          to="/about" 
          emoji="📜"
          pillText="New"
        />
        <Card 
          title="Books"
          to="/books" 
          emoji="📚"
          pillText="Hot"
        />
        <Card 
          title="Works"
          to="/portfolio" 
          emoji="💼"
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



