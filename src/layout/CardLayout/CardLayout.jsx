import React from "react";
import Card from "../../components/Card/Card";

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card
          title="Meet Tosin"
          to="/about"
          emoji="👋🏼"
          pillText="Let’s Begin!"
        />
        <Card
          title="Portfolio"
          to="/portfolio"
          emoji="📁"
          pillText="See My Best"
        />
        <Card title="My Blog" to="/blog" emoji="📝" pillText="What’s New?" />
        <Card
          title="Archives"
          to="/resources"
          emoji="💫"
          pillText="More Highlights"
        />
      </div>
    </section>
  );
};

export default CardLayout;
