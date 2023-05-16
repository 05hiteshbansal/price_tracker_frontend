import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./FlipkatCard.jsx";
import "./flipkart.css";
import logo from "/src/media/flipkart.png";
function Flipkart(props) {
  const [data, setData] = useState([]);
  const isMounted = useRef(false);
  async function fetchdata() {
    // var response= await fetch(`http://localhost:5000/api/amazon/${props.value}`)
    const response = {
      method: "GET",
      url: `http://localhost:5000/api/flipkart/${props.value}` ||`https://pricetracker-r2do.onrender.com/api/flipkart/${props.value}`,
    };
    try {
      const res = await axios.request(response);
      //console.log(res);
      //console.log(res.data.result);
      setData(res.data.result);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    //console.log(isMounted);
    //console.log(isMounted.current);
    if (isMounted.current) return;
    else {
      isMounted.current = true;
      fetchdata();
    }
  }, []);
  return (
    <>
      <div>
        <div className=" flipper container my-2">
          <h1 className=" head text-center">
            "{props.value}" served from Flipkart<img className="flipimage"src={logo} alt="flipkart-logo" />
          </h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {data.map((d, index) => (
              <>
                <div className=" rounded col-md-4 flipcard" key={index}>
                  <Card
                    name={d.name}
                    cprice={d.current_price}
                    oprice={d.original_price}
                    product_link={d.link}
                    image={d.thumbnail}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flipkart;
