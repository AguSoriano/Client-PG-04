import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Profile() {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => logout()}>Cerrar sesion</button>
          <h2>BIENVENIDO {user.given_name.toLocaleUpperCase()}</h2>
          <img src={user.picture} alt={user.name} />
          {/* <pre>{JSON.stringify(user)}</pre> */}
          <Link to="/favorite">Favoritos</Link>
        </>
      ) : (
        "NECESITAS LOGEARTE"
      )}
    </div>
  );
}

export default Profile;
