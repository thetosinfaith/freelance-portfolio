import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import './Resources.css';
import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";

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
                    <li className="resources-item" data-aos="fade-up"><Link to="/features" className="resources-link">Features</Link></li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="100"><Link to="/books-courses" className="resources-link">Books and Courses</Link></li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="200"><Link to="/talks" className="resources-link">Talks</Link></li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="300"><Link to="/certifications" className="resources-link">Certifications</Link></li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="400"><Link to="/awards" className="resources-link">Awards</Link></li>
                </ul>
            </div>
            <MainFooter />
        </>
    );
};

export default Resources;
