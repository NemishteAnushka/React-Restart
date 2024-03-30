import React from "react";
import "../../../App.css";
import User from "./User";
function Users({ users,increaseAge,deleteUser }) {
  return (
    <div className="center">
      <h3>User Info</h3>
      {users.map((user) => {
        return <User user={user} key={user.id} increaseAge={increaseAge} deleteUser={deleteUser} />;
      })}
    </div>
  );
}

export default Users;
