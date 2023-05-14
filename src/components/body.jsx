import React from "react";
import { useState } from "react";
import Amazon from "./platforms/amazon";
import Flipkart from "./platforms/flipkart";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../media/scale-opposites.gif";
import Typewriter from "typewriter-effect";

function Body() {
  const [val, setval] = useState("");
  function handleChange(e) {
    setval(e.target.value);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h1>
            The Best Price Comparator for all
            <Typewriter
              options={{
                strings: ["Articles ", "Products ! "],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="searchbox">
            <input
              placeholder="🔍 What are you looking for today?"
              type="text"
              id="ibox"
              value={val}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-primary amazon">
            <Link className="linker" to={`/api/amazon/${val}`}>
              Amazon
            </Link>
          </button>
          <button type="button" className="btn btn-primary">
            <Link className="linker" to={`/api/flipkart/${val}`}>
              Flipkart
            </Link>
          </button>
        </div>
        <div className="col-lg-6 title-image-container">
          <img className="photo" src={logo} alt="loading..." />
        </div>
      </div>
      <Routes>
        <Route
          path={`/api/amazon/${val}`}
          element={<Amazon value={val} />}
        ></Route>
        <Route
          path={`/api/flipkart/${val}`}
          element={<Flipkart value={val} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default Body;
