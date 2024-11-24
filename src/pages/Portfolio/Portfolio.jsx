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
            <h2>I build websites</h2>
            <p>I build webapps using the best tools for the job, but React is my go-to framework.</p>
            
            <span className="arrow-icon" onClick={() => navigate("/portfolio/developer")}> See What I've Built →</span>
          </div>
        </div>

        <div className="portfolio-box portfolio-left">
          <div className="portfolio-content">
            <h2>I design,
            sometimes</h2>
            <p>I might not be the typical designer spending hours on Illustrator, but I design.
            </p>
            <span className="arrow-icon" onClick={() => navigate("/portfolio/designer")}> Check My Designs →</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
