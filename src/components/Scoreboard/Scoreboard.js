import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => (
  <div className="gameScore">
    <h3 className="score">Your Score: {props.score}     Top Score: {props.topscore}</h3>
    <h3 className="message">{props.message}</h3>
  </div>
);

export default Scoreboard;
