import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <>
      <div className="spinner-container">
        <span className="spinner"></span>
      </div>
      <div className="backdrop"></div>
    </>
  );
};

export default Spinner;
