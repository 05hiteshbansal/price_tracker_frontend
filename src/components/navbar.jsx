import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Body from "./body";
import About from "./about";
import Track from "./track";
import logo from "../media/logotracker.webp";
function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{ width: "50px", height: "50px" }}
              className="d-inline-block align-text-top navlogo"
            />PriceOWL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/track">
                  Track Url
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="*" element={<Body />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/track" element={<Track />}></Route>
      </Routes>
    </div>
  );
}

export default Navbar;
