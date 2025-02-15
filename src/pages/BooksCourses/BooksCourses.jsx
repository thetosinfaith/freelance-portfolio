import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";
import "./BooksCourses.css";

const BooksCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="store-container">
        <div className="store-embed">
          <iframe
            src="https://mainstack.store/thetosinfaith"
            title="Mainstack Store"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default BooksCourses;
