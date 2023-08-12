/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/meat.css";

const Meat = () => {
  return (
    <div className="meat">
      <div className="msg">
        <p>Chew...Chew</p>
        <p>MMMMMMMM!</p>
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

export default Meat;
