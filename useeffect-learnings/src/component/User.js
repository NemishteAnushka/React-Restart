import React from "react";

function User({ address, company, email, id, name, phone, username, website }) {
   
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Id : {id}</h3>
      <h3>Name : {name}</h3>
      <h3>Phone : {phone}</h3>
      <h3>UserName : {username}</h3>
      <h3>Email : {email}</h3>
      <h3>Website : {website}</h3>
      <h3>City : {address.city}</h3>
      <h3>Company : {company.name}</h3>
    </div>
  );
}

export default User;
