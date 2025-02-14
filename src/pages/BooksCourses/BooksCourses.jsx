import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";
import "./BooksCourses.css";

const BooksCourses = () => {
  return (
    <>
      <Navbar />
      <div className="store-container">
        <h1>Books and Courses</h1>

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
