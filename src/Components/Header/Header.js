import "./Header.css";
import React from "react";

import { Link } from "react-router-dom";

import Burger from "../Burger/Burger";

import { Search } from "react-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo-container">
          <h1 className="logo">The Simple Life</h1>
          <span className="logo-strapline">A guide to minimilist living</span>
        </div>
        <Burger />
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">
            <li className="header-nav-list-item">Home</li>
          </Link>
          <Link to="/about" className="header-nav-link">
            <li className="header-nav-list-item">About Us</li>
          </Link>
          <Link to="/menu" className="header-nav-link">
            <li className="header-nav-list-item">Menu</li>
          </Link>
          <Link to="/contact" className="header-nav-link">
            <li className="header-nav-list-item">Contact</li>
          </Link>
        </nav>
      </div>
    </header>
  );
}
