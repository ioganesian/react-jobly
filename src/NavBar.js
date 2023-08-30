import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Jobly
      </Link>
      <div className="NavBar-right">
        <Link to="/companies">
          Companies
        </Link>
        <Link to="/jobs">
          Jobs
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;