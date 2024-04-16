import React, { useEffect, useState } from "react";
import User from "./User";

function FetchDataExample() {
  const URL = "https://jsonplaceholder.typicode.com/userss";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg,setErrorMsg]=useState("")
  //fetch data using async await
  const fetchData = async () => {
    const response = await fetch(URL);
    if (!(response.status >= 200 && response.status <= 299)) {
      setError(true);
      setErrorMsg(`${response.status} Error`)
      setIsLoading(false);
    }
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    //using promise
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    fetchData();
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

export default FetchDataExample;
