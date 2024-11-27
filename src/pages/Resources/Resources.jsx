import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import './Resources.css';
import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";
import Communities from '../../assets/community.jpg'
import Talks from '../../assets/talks.jpg'

const Resources = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="resources-container">
                <h1 className="resources-title" data-aos="fade-down">Resources</h1>
                <ul className="resources-list">
                    <li className="resources-item" data-aos="fade-up">
                        <img src={Communities} alt="Features" className="resources-image" />
                        <Link to="/features" className="resources-link">Communities</Link>
                        <p>Communities I help run</p>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="100">
                        <img src={Talks} alt="Books and Courses" className="resources-image" />
                        <Link to="/books-courses" className="resources-link">Books and Courses</Link>
                        <p>Communities I help run</p>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="200">
                        <img src="/path-to-image/talks.jpg" alt="Talks" className="resources-image" />
                        <Link to="/talks" className="resources-link">Talks</Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="300">
                        <img src="/path-to-image/certifications.jpg" alt="Certifications" className="resources-image" />
                        <Link to="/certifications" className="resources-link">Certifications</Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="400">
                        <img src="/path-to-image/awards.jpg" alt="Awards" className="resources-image" />
                        <Link to="/awards" className="resources-link">Awards</Link>
                    </li>
                </ul>
            </div>
            <MainFooter />
        </>
    );
};

export default Resources;
