import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Resources.css";
import Communities from "../../assets/community.jpg";
import Talks from "../../assets/wp.png";
import Code from "../../assets/check.jpg";
import Books from "../../assets/bk.png";
import Awards from "../../assets/awards.jpg";
import Podcast from "../../assets/pp.png";
import Features from "../../assets/ml.png";
import Lead from "../../assets/bg.png";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="resources-container">
        <h1 className="resources-title" data-aos="fade-down">
          QuickLinks
        </h1>
        <ul className="resources-list">
          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={Podcast}
              alt="Certifications"
              className="resources-image"
            />
            <Link to="/talks" className="resources-link">
              Podcasts
              <p>
                Fun Conversations Here <br /> →
              </p>
            </Link>
          </li>
          <li className="resources-item" data-aos="fade-up">
            <img src={Communities} alt="Features" className="resources-image" />
            <Link to="/communities" className="resources-link">
              Communities
              <p>
                Spaces I Help Build <br />→
              </p>
            </Link>
          </li>
          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={Talks} alt="Talks" className="resources-image" />
            <Link to="/speaking" className="resources-link">
              Talks
              <p>
                I’ve Been On Stage Too <br /> →
              </p>
            </Link>
          </li>
          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={Features} alt="Awards" className="resources-image" />
            <Link to="/awards" className="resources-link">
              Features
              <p>
                Where I’ve Been Featured <br />→
              </p>
            </Link>
          </li>
          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={Books}
              alt="Books and Courses"
              className="resources-image"
            />
            <Link to="/books-courses" className="resources-link">
              Books and Courses
              <p>
                Learn Something New <br />→
              </p>
            </Link>
          </li>

          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={Code} alt="Talks" className="resources-image" />
            <Link to="/portfolio" className="resources-link">
              Portfolio
              <p>
                Projects I’ve Built <br />→
              </p>
            </Link>
          </li>
          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={Awards} alt="Awards" className="resources-image" />
            <Link to="/certificates" className="resources-link">
              Certificates
              <p>
                Career Achievements <br />→
              </p>
            </Link>
          </li>
          <li
            className="resources-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={Lead}
              alt="Books and Courses"
              className="resources-image"
            />
            <Link to="/blog" className="resources-link">
              My Blog
              <p>
                My Thoughts in Writing <br /> →
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Resources;
