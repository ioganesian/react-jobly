import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import userContext from "./userContext";

/** Navigation links for all pages.
 *
 * Props: logout
 * onClick function for Logout link
 *
 * State: None
 *
 * NavBar -> Homepage / Companies / Jobs
 */

function NavBar({ logout }) {
  const { currUser } = useContext(userContext);

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
            Logout {currUser.username}
          </Link>
        </div>
    );
  }

  return (
    <nav className="NavBar">
       <Link to="/">
          Jobly
        </Link>
      {currUser ? loggedInNavBar() : loggedOutNavBar()}
    </nav>
  )

}

export default NavBar;