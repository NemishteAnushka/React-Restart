import React, { useState } from "react";

function StateExampleObject() {
  const [user, setUser] = useState({
    firstName: "Anushka",
    lastName: "Nemishte",
    email: "anushkanemishte@gmail.com",
    phone: 2020101020,
    age: 22,
  });
  const increaseAge = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        age: prevState.age + 1,
      };
    });
  };

  const updateInfo = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        firstName: (prevState.firstName = "Anuja"),
      };
    });
  };
  return (
    <div>
      <h1>Update object using state</h1>
      <h3>User Info</h3>
      <p>FirstName : {user.firstName}</p>
      <p>LastName : {user.lastName}</p>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Age : {user.age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={updateInfo}>Update</button>
    </div>
  );
}

export default StateExampleObject;
