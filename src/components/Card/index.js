import React from "react";
import "./Card.css";

const Card = ( props ) => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.imageurl} />
    </div>
  </div>
);

export default Card;