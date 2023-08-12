/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/chips.css";

const Chips = () => {
  return (
    <div className="chips">
      <div className="msg">
        <p>Crunch Crunch Crunch!</p>
        <p>More please!</p>
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

export default Chips;
