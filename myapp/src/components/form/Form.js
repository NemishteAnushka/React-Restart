import React, { useState } from "react";
import "../../App.css";
function Form() {
  const [username, setUsername] = useState(""); //state for username
  const [password, setPassword] = useState(""); // state for password
  const handleOnChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    setUsername(e.target.value); //this is how we set value in set
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault(); //this will not let browser to refresh

    // if (username === "" || null || undefined) {
    //   alert("Please 1st enter the name then press 'Enter'");
    // } else {
    //   alert(`The name you enter is ${username}`);
    // }
    console.log(username);
    console.log(password);
  };
  return (
    <div className="center">
      <h1>React Forms</h1>
      <br />
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
