import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo3 from "../assets/Logo3.png";
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const navbar = document.querySelector(".nav");
    const bar = document.querySelectorAll(".line");
    navbar.classList.toggle("open", isOpen);
    bar.forEach((line) => line.classList.toggle("bar", isOpen));
  }, [isOpen]);

  return (
    <div className={`nav ${isOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={toggleNavBar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Link to="/">
        <img src={Logo3} id="logo" alt="Logo" />
      </Link>
      {isOpen ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/special">Special</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
