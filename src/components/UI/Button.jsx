import React from "react";
import Style from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={Style.button + " " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
