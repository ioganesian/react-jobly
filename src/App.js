import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import { useJwt } from "react-jwt";
import decode from "jwt-decode";
import userContext from "./userContext";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

/** Main Application with router
 *
 * Props:None
 *
 * State:None
 *
 *App --> Homepage
*/


function App() {
  const [user, setUser] = useState(null); //correct state?
  const [token, setToken] = useState(null);

  useEffect(function getUserInfo() {
    async function getUser() {
      if (token) {
        try {
          let { username } = decode(token);
          let user = await JoblyApi.getUserData(username);
          setUser(user);

        } catch (error) {
          console.log("Error here APP.JS");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    }
    getUser();
  }, []);

  async function login(loginData) {
    let token = await JoblyApi.login(loginData);
    setToken(token);
  }

  async function logout() {
    setUser(null);
    setToken(null);
  }

  async function signup(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
  }

  return (
    <userContext.Provider value={{ user: user }}>
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout} />
          <RouteList user= {user} login={login} signup={signup}  />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
