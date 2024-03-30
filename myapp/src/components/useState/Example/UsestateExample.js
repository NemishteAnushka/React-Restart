import React, { useState } from "react";
import Users from "./Users";

function UsestateExample() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Anushka", lastName: "Nemishte", age: 22 },
    { id: 2, firstName: "Anuja", lastName: "Nemishte", age: 17 },
    { id: 3, firstName: "Neha", lastName: "Kulkarni", age: 18 },
    { id: 4, firstName: "Prajakta", lastName: "Patil", age: 23 },
  ]);
  function increaseAge(id) {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            age: user.age + 1,
          };
        } else {
          return user;
        }
      });
    });
  }

  function deleteUser(id) {
    // console.log("deleteUser",id);
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }
  return (
    <div>
      <h1>Example</h1>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </div>
  );
}

export default UsestateExample;
