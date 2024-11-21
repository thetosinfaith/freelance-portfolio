import { useNavigate, Link } from "react-router-dom";
import "./Portfolio.css";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineRight } from 'react-icons/ai';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="portfolio">
        <div className="portfolio-box portfolio-right">
          <div className="portfolio-content">
            <h2>I build
            stuff</h2>
            <p>See My Works</p>
            
            <span className="arrow-icon" onClick={() => navigate("/portfolio/developer")}>→</span>
          </div>
        </div>

        <div className="portfolio-box portfolio-left">
          <div className="portfolio-content">
            <h2>I design,
            sometimes</h2>
            <p>Check My Designs
            </p>
            <span className="arrow-icon" onClick={() => navigate("/portfolio/designer")}>→</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
