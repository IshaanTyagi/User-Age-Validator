import React from "react";
import Card from "../UI/Card";
function Users(props) {
  return props.Users.map((user) => {
    return (
      <Card>
        {user.name} {user.age}
      </Card>
    );
  });
}

export default Users;
