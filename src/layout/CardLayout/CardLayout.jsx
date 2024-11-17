import React, { useEffect } from 'react';
import feather from 'feather-icons';
import ScrollReveal from 'scrollreveal';
import './QuickPicks.css';

const QuickPicks = () => {
  useEffect(() => {
    feather.replace();
    ScrollReveal().reveal('.greeting', { delay: 200 });
    ScrollReveal().reveal('.highlight', { delay: 600, easing: 'ease-in' });
    ScrollReveal().reveal('.rest', { delay: 800, easing: 'ease-in' });
    ScrollReveal().reveal('.subtitle', { delay: 1000, distance: '20px' });
    ScrollReveal().reveal('.cta', { delay: 2000, easing: 'ease-in' });
  }, []);

  return (
    <>
    <section className="card_section">
      <div className="card_wrapper">
        <a href="/about" className="card">
          <div className="card_pill">
            <button className="pill">
              Coming soon <i data-feather="loader"></i>
            </button>
          </div>
          <div className="card_content">
            <p>About <span role="img" aria-label="information"> 📜 </span></p>
          </div>
        </a>
        <a href="/books" className="card">
          <div className="card_pill">
            <button className="pill">
              Coming soon <i data-feather="loader"></i>
            </button>
          </div>
          <div className="card_content">
            <p>Books <span role="img" aria-label="books">📚</span></p>
          </div>
        </a>
        <a href="/portfolio" className="card">
          <div className="card_pill">
            <button className="pill">
              Coming soon <i data-feather="loader"></i>
            </button>
          </div>
          <div className="card_content">
            <p>Works <span role="img" aria-label="portfolio"> 💼 </span></p>
          </div>
        </a>
        <a href="/blogs" className="card">
          <div className="card_pill">
            <button className="pill">
              Coming soon <i data-feather="loader"></i>
            </button>
          </div>
          <div className="card_content">
            <p>Blogs <span role="img" aria-label="blog">📝</span></p>
          </div>
        </a>
      </div>
    </section>
    </>
  );
};

export default QuickPicks;
