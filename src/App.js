import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//import components
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/companies" />
          <Route path="/companies/:handle" />
          <Route path="/jobs" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
