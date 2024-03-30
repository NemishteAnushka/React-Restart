import React from "react";

function User({ user,increaseAge,deleteUser }) {
    
  return (
    <div className="user">
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
      <button onClick={()=>{increaseAge(user.id)}}>Increase age</button>
      <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
    </div>
  );
}

export default User;
