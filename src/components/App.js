/** @format */
import React from "react";
import "../styles/App.css";
import VendingMachine from "./vending_machine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soda from "./soda";
import Meat from "./meat";
import Chips from "./chips";
import NavBar from "./nav_bar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />{" "}
          <Route path="/Soda" element={<Soda />} />
          <Route path="/Meat" element={<Meat />} />
          <Route path="/Potato" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
