import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";
import Cart from "./Cart";
import MyProfilePage from "./MyProfilePage";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="nav-container">
        <a className="nav-logo" href="/home">
          <img src={logo} alt="React" width="70" height="50" />
        </a>
        <SearchBar />
        <Cart />
        <MyProfilePage />
      </nav>
    </div>
  );
}

export default Navbar;
