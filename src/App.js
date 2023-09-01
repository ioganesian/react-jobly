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
 * Props:None
 *
 * State:
 * - currUser
 * - token
 *
 *App --> Homepage
*/


function App() {
  const [currUser, setCurrUser] = useState({ data: null });
  const [token, setToken] = useState(JoblyApi.token);
  // {
  //   "user": {
  //     "username": "user",
  //     "firstName": "first",
  //     "lastName": "last",
  //     "email": "email@email.com",
  //     "isAdmin": true,
  //     "applications": []
  //   }
  // }
  // console.log(token);
  useEffect(function getUserInfo() {
    console.log(`ENTERED USEEFFECT`);
    async function getCurrUser() {
      if (token) {
        console.log(`USER token APP.JS: ${token}`);
        try {

          let { username } = decode(token);
          console.log("USERNAME>>>", username)

          let user = await JoblyApi.getUserData(username);
          console.log("USER>>>>", user)
          
          JoblyApi.token = token


          setCurrUser({data: user});

        } catch (error) {
          console.log("Error here APP.JS");
          setCurrUser({ data: null });
        }
      } else {
        console.log(`NO USER token APP.js: ${token}`);
        setCurrUser({ data: null });
      }
    }
    getCurrUser();
  }, [token]);

  // console.log(user, token);

  async function login(loginData) {
    let token = await JoblyApi.login(loginData);
    setToken(token);
  }

  async function logout() {
    setCurrUser({ data: null });
    setToken(null);
  }

  async function signup(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
  }

  console.log(`currUser: ${currUser}`);

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

export default App;
