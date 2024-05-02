import { useAuth } from "./AuthProvider";

function BasicDetails() {
  const { auth, setAuth } = useAuth();
  function handleLogOut() {
    setAuth({});
  }
  return (
    <div>
      <h2>Username : {auth.userName}</h2>
      <h2>Email : {auth.email}</h2>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}

export default BasicDetails;
