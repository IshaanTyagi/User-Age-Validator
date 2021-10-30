import React, { useState } from "react";
import Style from "./NewUser.module.css";
import ValidBox from "../Validation/Valid";
import Card from "../UI/Card";
import Button from "../UI/Button";

function NewUser(props) {
  const [username, setusername] = useState("");
  const [age, setage] = useState("");
  const [error, checkError] = useState("");
  const HandelNameChange = (event) => {
    setusername(event.target.value);
  };
  const HandelAgeChange = (event) => {
    setage(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      checkError("Username is not define");
      return;
    }
    if (age <= 0) {
      checkError("Age is Invalid");
      return;
    }
    props.handelUsers(username, age);
    setage("");
    setusername("");
  };
  function handelError() {
    checkError("");
  }
  return (
    <div>
      {error && <ValidBox message={error} handelError={handelError} />}
      <Card>
        <form onSubmit={handelSubmit}>
          <div className={Style.form__content}>
            <label htmlFor="username" className={Style.userName}><span>Enter Your Name</span></label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={HandelNameChange}
            />
          </div>
          <div className={Style.form__content}>
            <label htmlFor="age" className={Style.userAge}><span>Age</span></label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={HandelAgeChange}
            />
          </div>
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
}

export default NewUser;
