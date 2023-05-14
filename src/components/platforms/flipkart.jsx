import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./card";
import './flipkart.css'
//import logo from "../../media/flipkartlogo.png";
function Flipkart(props) {
  const [data, setData] = useState([]);
  const isMounted = useRef(false);
  async function fetchdata() {
    // var response= await fetch(`http://localhost:5000/api/amazon/${props.value}`)
    const response = {
      method: "GET",
      url: `https://www.pricetracker.onrender.com/api/flipkart/${props.value}`,
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
          <div className="container my-2"  style={{backgroundColor:"#f0edd4"}}>
          <h1 className="text-center">{props.value} served from Flipkart</h1>
              <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((d, index) =>
          (
          <>
                <div className=" rounded col-md-4" key={index}>
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
