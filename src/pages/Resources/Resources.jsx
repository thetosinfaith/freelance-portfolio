import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import './Resources.css';
import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";
import Communities from '../../assets/community.jpg'
import Talks from '../../assets/try.jpg'
import Books from '../../assets/book.png'
import Awards from '../../assets/awards.jpg'
import Podcast from '../../assets/podcast.jpg'
import Features from '../../assets/communityy.jpg'

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
                <h1 className="resources-title" data-aos="fade-down">Resources</h1>
                <ul className="resources-list">
                    <li className="resources-item" data-aos="fade-up">
                        <img src={Communities} alt="Features" className="resources-image" />
                        <Link to="/features" className="resources-link">People & Communities

                        <p>Communities I support</p>
                        
                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="200">
                        <img src={Talks} alt="Talks" className="resources-image" />
                        <Link to="/talks" className="resources-link">Events & Talks
                        <p>I also speak</p>
                        </Link>
                       
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="300">
                        <img src={Podcast} alt="Certifications" className="resources-image" />
                        <Link to="/certifications" className="resources-link">Certifications</Link>
                        <p>Podcasts I've Featured On</p>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="400">
                        <img src={Awards} alt="Awards" className="resources-image" />
                        <Link to="/awards" className="resources-link">Awards
                        <p>Spotlight on My Achievements</p>

                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="400">
                        <img src={Features} alt="Awards" className="resources-image" />
                        <Link to="/awards" className="resources-link">Features
                        <p>Spotlight on My Achievements</p>

                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="100">
                        <img src={Books} alt="Books and Courses" className="resources-image" />
                        <Link to="/books-courses" className="resources-link">Books and Courses
                        <p>Spotlight on My Achievements</p>

                        </Link>
                        <p></p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Resources;
