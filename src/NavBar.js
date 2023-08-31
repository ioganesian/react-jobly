import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import userContext from "./userContext";

/** Navigation links for all pages.
 *
 * Props: None
 *
 * State: None
 *
 * NavBar -> Homepage / Companies / Jobs
 */

function NavBar({ logout }) {
  const { user } = useContext({ userContext });

  /** NavBar to return if no user logged in */

  function loggedOutNavBar() {
    return (
      <div className="LoggedOutNavBar">
          <Link to="/login">
            Login
          </Link>
          <Link to="/signup">
            Sign Up
          </Link>
        </div>
    );
  }

  /** NavBar to return if user logged in */

  function loggedInNavBar() {
    return (
        <div className="LoggedInNavBar">
          <Link to="/companies">
            Companies
          </Link>
          <Link to="/jobs">
            Jobs
          </Link>
          <Link to="/" onClick={logout}>
            Logout {user.username}
          </Link>
        </div>
    );
  }

  return (
    <nav className="NavBar">
       <Link to="/">
          Jobly
        </Link>
      {user ? loggedInNavBar() : loggedOutNavBar()}
    </nav>
  )

}

export default NavBar;