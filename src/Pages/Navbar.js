import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <ul className="list">
        <li >
          <Link className="links" to="/head">Head</Link>
        </li>
        <li>
          <Link className="links" to="/admin">Admin</Link>
        </li>
        <li>
          <Link className="links" to="/teacher">Teacher</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
