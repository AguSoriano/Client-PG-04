import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Data() {
  const { user } = useAuth0();
  return (
    <div>
      <h2>Mis datos</h2>
      <h3>Nombre</h3>
      <span>{user.given_name}</span>
      <h3>Apellido</h3>
      <span>{user.family_name}</span>
      <h3>Usuario</h3>
      <span>{user.nickname}</span>
      <h3>Email</h3>
      <span>{user.email}</span>
      <h3>Verificado</h3>
      <span>{user.email_verified ? "Si" : "No"}</span>
    </div>
  );
}

export default Data;
