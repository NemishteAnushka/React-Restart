import React from "react";
import BasicDetails from "./BasicDetails";
import { useAuth } from "./AuthProvider";

function UserProfile() {
  const { auth, setAuth } = useAuth();
  function handleLogIn() {
    setAuth({
      userName: "AnushkaN",
      email: "anushkanemishte@gmail.com",
    });
  }
  return (
    <div>
      <h1>User Profile</h1>
      {auth.userName ? (
        <BasicDetails />
      ) : (
        <button onClick={handleLogIn}>LogIn</button>
      )}
    </div>
  );
}

export default UserProfile;
