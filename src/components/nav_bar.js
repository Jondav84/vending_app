/** @format */

import { NavLink } from "react-router-dom";
import "../styles/nav_bar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" className="link">
        Machine
      </NavLink>
      <NavLink exact to="/Soda" className="link">
        Drink
      </NavLink>
      <NavLink exact to="/Meat" className="link">
        Jerkey
      </NavLink>
      <NavLink exact to="/Potato" className="link">
        Kettle
      </NavLink>
    </nav>
  );
};

export default NavBar;
