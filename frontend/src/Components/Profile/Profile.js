import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => logout()}>Salir</button>
          <h2>BIENVENIDO {user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <pre>{JSON.stringify(user)}</pre>
        </>
      ) : (
        "NECESITAS LOGEARTE"
      )}
    </div>
  );
}

export default Profile;
