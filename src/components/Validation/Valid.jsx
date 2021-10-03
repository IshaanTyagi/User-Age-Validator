import React from "react";
import Style from "./Valid.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function ValidBox(props) {
  function handelClick(event) {
    props.handelError();
  }
  return (
    <Card className={Style.valid}>
      <div className={Style.black}>Error!!!</div>
      <div className={Style.message}>{props.message}</div>
      <Button onClick={handelClick}>Ok</Button>
    </Card>
  );
}

export default ValidBox;
