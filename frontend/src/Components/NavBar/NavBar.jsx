import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return <div>
    <Link to={'/'}>Home</Link>
    <Link to={'/'}>Sign In</Link>
    <Link to={'/'}>Cart</Link>
    <Link to={'/'}>Favorites</Link>
    <Link to={'/'}>Post</Link>
  </div>;
}

export default NavBar;
