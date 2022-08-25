import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return <div>
    <Link to={'/'}>Home</Link>
    <Link to={'/'}>Sing In</Link>
    <Link to={'/'}>Cart</Link>
  </div>;
}

export default NavBar;
