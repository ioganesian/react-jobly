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
 *
 * App --> Homepage
*/


function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_KEY);
  const [hasLoaded, setHasLoaded] = useState(false);
  //TODO: better name for hasloaded
  console.log("TOKEN>>>", token);
  console.log("TESTUSER>>>", currUser);
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

  /** Sets token to API response from login request  */
  async function login(loginData) {
    let token = await JoblyApi.login(loginData);
    setToken(token);
  }

  /** Clears currUser and hasLoaded on logout */
  //TODO: 71 & 73 gone
  async function logout() {
    setCurrUser(null);
    setToken(null);
    setHasLoaded(true);
  }

  /** Sets token to API response from signup request */
  //TODO: what is signupData
  async function signup(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
  }

  if (!hasLoaded) return <LoadingSpinner />;

  return (
    <userContext.Provider
      value={{ currUser: currUser }}
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
