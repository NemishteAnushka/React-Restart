import React, { useEffect, useState } from "react";
import User from "./User";

function AbortRequest() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  //fetch data using async await

  //strict mode
  //useeffect will run
  //clean up function
  //useeffect will run again
  //so we will see that useeffect will run 2 times in react.strict mode
  //use abort controller so it will cancel 1 request and fetch 1 and you will see just 1 request
  useEffect(() => {
    const controller = new AbortController();
    const singnal = controller.signal;
    const fetchData = async () => {
      const response = await fetch(URL, { signal: singnal });
      if (!(response.status >= 200 && response.status <= 299)) {
        setError(true);
        setErrorMsg(`${response.status} Error`);
        setIsLoading(false);
      }
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setIsLoading(false);
    };
    fetchData();
    return function () {
      console.log("Request Aborted....");
      controller.abort();
    };
  }, []);
  if (isLoading) {
    return <h1 style={{ textAlign: "center" }}>Loading.....</h1>;
  }
  if (error) {
    return <h1 style={{ textAlign: "center" }}>{errorMsg}</h1>;
  }
  return (
    <div>
      <h1>Fetch Data using useEffect() </h1>

      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default AbortRequest;
