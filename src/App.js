import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import decode from "jwt-decode";
import userContext from "./userContext";
import useLocalStorage from "./useLocalStorage";
import LoadingSpinner from "./LoadingSpinner";

const TOKEN_KEY = "tokenKey";



/** Main Application with router
 *
 * Props: None
 *
 * State:
 * - currUser: { username, firstName, lastName, isAdmin, jobs }
 * - token
 * - hasLoaded: Updates if user is authenticated
 * - applicationIds: for logged in users, ids for applied jobs
 *
 * App --> Homepage
*/


function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_KEY);
  const [hasLoaded, setHasLoaded] = useState(false);
  // const [applicationIds, setApplicationIds] = useState(new Set([]));

  /** Checks state on token update to set current user and hasLoaded */
  useEffect(function fetchUserDataOnTokenChange() {
    async function getCurrUserOnTokenChange() {
      if (token) {
        try {
          let { username } = decode(token);
          JoblyApi.token = token;
          let user = await JoblyApi.getUserData(username);
          setCurrUser(user);
          setHasLoaded(true);
          // setApplicationIds(new Set(user.applications));
        } catch (error) {
          setCurrUser(null);
          setHasLoaded(true);
        }
      } else {
        setCurrUser(null);
        setHasLoaded(true);
      }
    }
    getCurrUserOnTokenChange();
  }, [token]);

  /** Sets token to API response from login request
  loginData = {username, password}
  */
  async function login(loginData) {
    let token = await JoblyApi.login(loginData);
    setToken(token);
  }

  /** Clears currUser and hasLoaded on logout */
  async function logout() {
    // setApplicationIds(new Set([]));
    setCurrUser(null);
    setToken(null);
  }

  /** Sets token to API response from signup request
  signUpData = {
  "username": "user",
  "password": "password",
  "firstName": "first",
  "lastName": "last",
  "email": "email@email.com",
  "isAdmin": true
  }
  */
  async function signup(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
  }

  /** Checks if job has been applied for */

  // function hasAppliedToJob(id) {
  //   return applicationIds.has(id);
  // }

  /** Apply to a job: make API call and update set of application IDs */

  // function applyToJob(id) {
  //   if (hasAppliedToJob(id)) return;
  //   JoblyApi.applyToJob(currentUser.username, id);
  //   setApplicationIds(new Set([...applicationIds, id]));
  // }

  if (!hasLoaded) return <LoadingSpinner />;

  return (
    <userContext.Provider
      value={{
        currUser: currUser,
        setCurrUser,
        hasAppliedToJob,
        applyToJob,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout} />

          <RouteList
            currUser={currUser}
            login={login}
            signup={signup}
          />

        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}


export default App;
