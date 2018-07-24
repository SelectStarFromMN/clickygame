import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card img-container hover">
      <img src={props.imageurl} id={props.id} />
  </div>
);

export default Card;
