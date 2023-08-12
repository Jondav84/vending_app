/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/soda.css";

const Soda = () => {
  return (
    <div className="soda">
      <div className="msg">
        <p>AAAAAAHHHHH!!!!</p>
        <p>Refreshing</p>
      </div>
      <div className="links">
        <p>go back to </p>
        <Link to="/" className="link">
          The Machine!
        </Link>
      </div>
    </div>
  );
};

export default Soda;
