import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Portfolio.css";
import Navbar from "../../components/Navbar/Navbar";

const Portfolio = () => {
  const navigate = useNavigate();

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <Navbar />
      <div className="portfolio">

        <motion.div
          className="portfolio-box portfolio-right"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="portfolio-content">
            <h2>I build websites</h2>
            <p>
              I build webapps using the best tools for the job, but React is my go-to framework.
            </p>
            <motion.span
              className="arrow-icon"
              onClick={() => navigate("/portfolio/developer")}
              {...hoverEffect}
            >
              See What I've Built →
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-box portfolio-left"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="portfolio-content">
            <h2>
              I design, sometimes
            </h2>
            <p>
              I might not be the typical designer spending hours on Illustrator, but I design.
            </p>
            <motion.span
              className="arrow-icon"
              onClick={() => navigate("/portfolio/designer")}
              {...hoverEffect}
            >
              Check My Designs →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
