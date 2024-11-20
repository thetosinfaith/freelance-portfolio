import { useNavigate, Link } from "react-router-dom";
import "./Portfolio.css";
import Navbar from "../../components/Navbar/Navbar";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="portfolio">
        <div className="portfolio-box portfolio-right">
          <div className="portfolio-content">
            <h2>As a Developer</h2>
            <span className="arrow-icon" onClick={() => navigate("/portfolio/developer")}>→</span>
          </div>
        </div>

        <div className="portfolio-box portfolio-left">
          <div className="portfolio-content">
            <h2>As a Designer</h2>
            <span className="arrow-icon" onClick={() => navigate("/portfolio/designer")}>→</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
