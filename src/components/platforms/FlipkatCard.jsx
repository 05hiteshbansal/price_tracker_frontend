import React from "react";
import './card.css';

function Card(props) {
  console.log(props.name);
  return (
    <div className="hathi bg-white rounded card h-100 mb-2" style={{width: "18rem"}}>
    {props.name==="flipkart"}
      <img src={props.image} className="photu card-img-top" style={{width:"250px",height: "300px",margin:"auto"}}alt="none"></img>
      <div className="card-body t2">
        <h6 className="card-title">{props.name}</h6>
        <p className="card-text">Original price💰- ₹{props.oprice}</p>
        <p className="card-text">Discounted price💸- ₹{props.cprice}</p>
        <a href={props.product_link} className="btn btn-primary">
        👆Click Here!
        </a>
      </div>
    </div>
  );
}

export default Card;
