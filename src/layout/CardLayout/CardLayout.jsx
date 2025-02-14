import React from "react";
import Card from "../../components/Card/Card";

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card
          title="Introducing Tosin"
          to="/about"
          emoji="👋🏼"
          pillText="Let’s Begin!"
        />
        <Card
          title="Website Samples"
          to="/portfolio"
          emoji="📁"
          pillText="See My Best"
        />
        <Card
          title="Journal of an Intern"
          to="/blog"
          emoji="📝"
          pillText="What’s New?"
        />
        <Card
          title="Extra Highlights"
          to="/resources"
          emoji="💫"
          pillText="More Highlights"
        />
      </div>
    </section>
  );
};

export default CardLayout;
