import React, { useRef } from "react";

function ExampleUseRefForm() {
  const userName = useRef();
  const password = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const userInput = userName.current;
    console.log("user", userInput.value);
    const passwordInput = password.current;
    console.log("password", passwordInput.value);
  }
  return (
    <div>
      <h1>UseRef() with forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name : </label>
          <input type="text" id="userName" ref={userName} />
        </div>
        <br />
        <div>
          <label htmlFor="password">password : </label>
          <input type="password" id="password" ref={password} />
        </div>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ExampleUseRefForm;
