import React, { useState, useEffect } from "react";
import popdabba from "../media/404-tick.png";
import "./track.css";
import axios from "axios"

function Track() {
  const [tracker, settracker] = useState(false);
  useEffect(() => {
    if (tracker) {
      const submit = async (e) => {
        var data = {
          url: document.getElementsByClassName("t1")[0].value,
          price: document.getElementsByClassName("t1")[1].value,
          email: document.getElementsByClassName("t1")[2].value
        };
        await axios
        .post("http://localhost:5000/track", {data})
        .then((res) => {console.log(res)
      console.log(res.data)})
        .catch((err) => console.log(err.data));
      }
        submit().then(
          console.log("send")
        )
      
      console.log("rendered");
      console.log(document.getElementById("popup"));
      document.getElementById("popup").classList.add("showpopup");
    } else {
      console.log("not rendered");
      document.getElementById("popup").classList.remove("showpopup");
    }
    document.getElementsByClassName("t1")[0].value = "";
    document.getElementsByClassName("t1")[1].value = "";
    document.getElementsByClassName("t1")[2].value = "";
  }, [tracker]);

  function click1(e) {
    console.log("1");
    e.preventDefault();
    settracker(true);
  }

  function click2() {
    console.log("2");
    settracker(false);
  }

  return (
    <div className="container-fluid">

      <div className="row">
        <form>
          <div className="col-lg-6 col-sm-12">
            <div className="searchbox search">
              <input
                placeholder="🛒 Enter URL of the product."
                type="text"
                id="ibox"
                className="url form-control t1"
              />
              <input
                placeholder="💵 Minimum price you wish to pay?"
                type="number"
                id="ibox"
                className="price form-control t1"
              />
              <input
                placeholder="✉️ Enter your e-mail id"
                type="email"
                id="ibox"
                className="price form-control t1"
              />
            </div>

            <button type="submit" className="btn btn-primary " onClick={click1}>
              Submit
            </button>
          </div>
        </form>
        <div className="col-lg-6 title-image-container">
          <h1 className="h1pop">
            Get Notified On Price Drops<br></br> Via 
             <span> E</span>
           <span>-</span>
            <span>M</span>
            <span>a</span>
            <span>i</span>
            <span>l</span>
            <span>!</span>
          </h1>
        </div>
        </form>

      <div className="popup" id="popup">
        <img className="popimg" src={popdabba} alt="loading..." />
        <h2>Hold Tight!</h2>
        <p>We'll get back to you ASAP 🏃‍♂️</p>
        <button
          className="popbtn btn btn-primary"
          onClick={click2}
          type="button"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Track;
