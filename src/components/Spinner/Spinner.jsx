import React from "react";
import logo from "../../assets/newl.png";

import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loading-spinner">
      <img src={logo} alt="Loading..." className="zoom-in-out" />
    </div>
  );
};

export default Spinner;
