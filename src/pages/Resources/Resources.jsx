import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import './Resources.css';
import Communities from '../../assets/community.jpg'
import Talks from '../../assets/stage.jpg'
import Code from '../../assets/check.jpg'
import Books from '../../assets/book.png'
import Awards from '../../assets/awards.jpg'
import Podcast from '../../assets/podd.jpg'
import Features from '../../assets/idee.jpg'
import Thoughts from '../../assets/thoughts.jpg'
import Lead from '../../assets/lead.jpg'



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
                        <Link to="/features" className="resources-link">Communities

                        <p>Spaces I Help Build</p>
                        
                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="300">
                        <img src={Podcast} alt="Certifications" className="resources-image" />
                        <Link to="/certifications" className="resources-link">Podcasts
                        <p>Fun Conversations I’ve Had</p>
                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="200">
                        <img src={Talks} alt="Talks" className="resources-image" />
                        <Link to="/talks" className="resources-link">Talks
                        <p>I’ve been on Stage too</p>
                        </Link>
                       
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="400">
                        <img src={Features} alt="Awards" className="resources-image" />
                        <Link to="/awards" className="resources-link">Features
                        <p>Where I’ve Been Mentioned</p></Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="100">
                        <img src={Lead} alt="Books and Courses" className="resources-image" />
                        <Link to="/books-courses" className="resources-link">My Blog
                        <p>My Thoughts in Writing.</p>

                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="200">
                        <img src={Code} alt="Talks" className="resources-image" />
                        <Link to="/talks" className="resources-link">Portfolio
                        <p>Check Out What I’ve Built</p>
                        </Link>
                       
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="400">
                        <img src={Awards} alt="Awards" className="resources-image" />
                        <Link to="/awards" className="resources-link">Awards
                        <p>Recognition I’m Proud Of.

</p>

                        </Link>
                    </li>
                    <li className="resources-item" data-aos="fade-up" data-aos-delay="100">
                        <img src={Books} alt="Books and Courses" className="resources-image" />
                        <Link to="/books-courses" className="resources-link">Books and Courses
                        <p>Learn Something New</p>

                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Resources;
