import React, { useState } from "react";
import "./App.module.css";
import NewUser from "./components/AddNewUser/NewUser";
import Users from "./components/users/Users";
function App() {
  const [users, updateUsers] = useState([]);
  const handelUsers = (name, age) => {
    const newUser = {
      name: name,
      age: age,
    };
    updateUsers((users) => {
      return [...users, newUser];
    });
  };
  return (
    <div>
      <NewUser handelUsers={handelUsers} />
      <Users Users={users} />
    </div>
  );
}

export default App;
