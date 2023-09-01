import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import decode from "jwt-decode";
import userContext from "./userContext";

/** Main Application with router
 *
 * Props: None
 *
 * State:
 * - currUser ...?
 * - token
 *
 * App --> Homepage
*/


function App() {
  const [currUser, setCurrUser] = useState({ data: null });
  const [token, setToken] = useState(null);
  // JoblyApi.token

  /** Checks state on token update to set current user */
  useEffect(function fetchUserData() {
    //TODO: more descriptive ie onTokenChange
    async function getCurrUser() {
      if (token) {
        try {
          let { username } = decode(token);
          JoblyApi.token = token;
          let user = await JoblyApi.getUserData(username);
          setCurrUser({ data: user });
        } catch (error) {
          setCurrUser({ data: null });
        }
      } else {
        setCurrUser({ data: null });
      }
    }
    getCurrUser();
  }, [token]);

  /** Sets token to API response from login request  */
  async function login(loginData) {
    let token = await JoblyApi.login(loginData);
    setToken(token);
  }

  /** Clears currUser on logout */
  async function logout() {
    setCurrUser({ data: null });
    setToken(null);
  }

  /** Sets token to API response from signup request */
  async function signup(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
  }

  return (
    <userContext.Provider
      value={{ currUser: currUser.data }}
    >
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout} />
          <RouteList currUser={currUser.data} login={login} signup={signup} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}
//TODO: currUser -> userwrapper?

export default App;
