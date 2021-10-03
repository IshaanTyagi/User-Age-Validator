import React from "react";
import style from "./Card.module.css";
function Card(props) {
  const classes = props.className + " " + style.card;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
