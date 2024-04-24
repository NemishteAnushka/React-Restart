import React, { useEffect, useRef } from "react";

function FocusInputOnMount() {
  const userInfo = useRef();
  console.log(userInfo.current);

  useEffect(() => {
    const user = userInfo.current;
    user.focus();
    user.style.backgroundColor = "black";
    user.style.color = "white"
  }, []);
  return (
    <div>
      <h1>Focus on Input when component mounts</h1>
      <form action="">
        <label htmlFor="user">UserId : </label>
        <input type="text" name="user" id="user" ref={userInfo} />
      </form>
    </div>
  );
}

export default FocusInputOnMount;
