import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

//TODO: fill in docstring.... props/states/flow

/** Links to multiple routes: homepage, companies, jobs */
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