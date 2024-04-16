import React, { useEffect, useState } from "react";

function FetchDataExample() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  //fetch data using async await
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    //using promise
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetch Data using useEffect() </h1>
      <ul>
        {users.map((user) => (
          <div>
            <li key={user.id}>Name : {user.name}</li>
            <p>Email : {user.email}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataExample;
