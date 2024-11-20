import { Link } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ to, label, buttonColor }) => {
  return (
    <div className="go-back-button-container">
      <Link
        to={to}
        className="back-button"
        style={{ '--button-color': buttonColor }} // Dynamically set the custom property
      >
        {label}
      </Link>
    </div>
  );
};

export default BackButton;
