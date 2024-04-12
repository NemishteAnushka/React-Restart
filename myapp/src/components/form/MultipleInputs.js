import React, { useState } from "react";

function MultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    address: "",
  });
  const handleOnChange = (e) => {
    setFormData((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    phoneNo,
    address,
  } = formData;
  return (
    <div>
      <h1>Handle Multiple Input with single Function</h1>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="userName">User Name : </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="confirmPassword">Confirm Password : </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="phoneNo">Phone Number : </label>
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            value={phoneNo}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address : </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="5"
            value={address}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleInputs;
