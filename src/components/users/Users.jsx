import React from "react";
import Card from "../UI/Card";
import Style from "./Users.module.css";
function Users(props) {
  return props.Users.map((user) => {
    return (
      <Card className={Style.result}>
        {user.name} - {user.age}
      </Card>
    );
  });
}

export default Users;
