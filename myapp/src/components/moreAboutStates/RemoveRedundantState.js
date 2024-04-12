import React, { useState } from "react";

function RemoveRedundantState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
  function handleLastName(e) {
    const { value } = e.target;
    setLastName(value.toUpperCase());
    // setFullName(firstName + " " + e.target.value.toUpperCase());
  }
  return (
    <div>
      <h1>Remove Redundant state</h1>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value.toUpperCase());
            // setFullName(e.target.value.toUpperCase() + " " + lastName);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleLastName}
        />
      </div>
      <div>
        <h1>User Info</h1>
        <h3>User First Name : {firstName}</h3>
        <h3>User Last Name : {lastName}</h3>
        {/* so no need to make state for fullname */}
        {/* <h3>FullName : {fullName}</h3> */}
        <h3>User FullName : {`${firstName}  ${lastName}`}</h3> 
      </div>
    </div>
  );
}

export default RemoveRedundantState;
