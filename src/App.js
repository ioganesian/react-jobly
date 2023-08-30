import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from "./NavBar";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";


/** Main Application with router
 *
 * Props:None
 *
 * State:None
 *
 *App --> RouteList
*/

//TODO: line 22 is not accurate
//TODO: move our routes to routelist so its easier to test 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
