/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/vending_machine.css";
const VendingMachine = () => {
  return (
    <div className="vending-machine-container">
      <div className="msg">
        <p>Welcome to the machine!</p>
        <p>I am here to serve you.</p>
      </div>
      <div className="links">
        <p>Please select one of the following:</p>
        <Link to="/Soda" className="link">
          Drink
        </Link>
        <Link to="/Meat" className="link">
          Beef
        </Link>
        <Link to="/Potato" className="link">
          Chips
        </Link>
      </div>
    </div>
  );
};

export default VendingMachine;
