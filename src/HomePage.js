import React, {useContext} from "react";
import userContext from "./userContext";
import "./Homepage.css";

/** Renders homepage with additional message if user logged in
 *
 * Props: None
 *
 * State: None
 *
 * App --> Homepage
 */

function Homepage() {
  const { currUser } = useContext(userContext);
  return (
    <div className="Homepage">
      <p className="Homepage-jobly">Jobly</p>
      <p>All the jobs in one, convenient place.</p>
      <div className="Homepage-user">
        {currUser && <>Welcome Back, {currUser.username}!</>}
      </div>
    </div>
  );
}

export default Homepage;