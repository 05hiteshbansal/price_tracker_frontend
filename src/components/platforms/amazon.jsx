import React from "react";
import { useEffect, useState, useRef } from "react";
import Card from "./card";
import axios from "axios";

function Amazon(props) {
  const [data, setData] = useState([]);
  const isMounted = useRef(false);
  async function fetchdata() {
    // var response= await fetch(`http://localhost:5000/api/amazon/${props.value}`)
    const response = {
      method: "GET",
      url: `https://https://price-tracker-eta.vercel.app/api/amazon/${props.value}`,
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
      <div className="container my-3"  style={{backgroundColor:"#f0edd4"}}>
        <h1 className="text-center">
        {props.value} served from Amazon
        </h1>
        <div className="row" >
          {data.map((d, index) => (
            <div className="col-md-4 my-3" key={index}>
              <Card
                name={d.name}
                cprice={d.price}
                oprice={d.original_price}
                product_link={d.product_link}
                image={d.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Amazon;
