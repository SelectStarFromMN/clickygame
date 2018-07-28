import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => (
    <div className="gameScore">
        <h1>Happy Birds! <span className="italicStyle">A Memory Game.</span></h1>
        <h2 className="message">{props.message}</h2>
        <h3 className="score">Your Score: {props.score} <span className="score topscore italicStyle"> (Top Score: {props.topscore})</span></h3>
    </div>
);

export default Scoreboard;
