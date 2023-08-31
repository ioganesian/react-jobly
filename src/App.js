import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";


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

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
