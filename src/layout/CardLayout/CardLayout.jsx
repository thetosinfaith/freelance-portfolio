import React from "react";
import Card from "../../components/Card/Card";

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card
          title="Personal profile"
          to="/about"
          emoji="🧢"
          pillText="Let’s Begin!"
        />
        <Card
          title="Featured works"
          to="/portfolio"
          emoji="💼"
          pillText="See My Best"
        />
        <Card
          title="Story journal"
          to="/blog"
          emoji="📝"
          pillText="What’s New?"
        />
        <Card
          title="More pages"
          to="/resources"
          emoji="💫"
          pillText="More Highlights"
        />
      </div>
    </section>
  );
};

export default CardLayout;
