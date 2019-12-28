import React from "react";
import { Link } from "react-router-dom"; 
import { Navbar } from "react-bootstrap"; 
import "./App.css";
import Routes from "./Routes";
// We are doing a few things here:
// 1. Crea7ng a fixed width container using Bootstrap in div.container .
// 2. Adding a Navbar inside the container that fits to its container’s width
// using the aGribute fluid .
// 3. Using Link component from the React-Router to handle the link to
// our app’s homepage (without forcing the page to refresh).
function App(props) {
  return (
    <div className="App container">
      <Navbar fluidcollapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">SeeMee Demo</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}
export default App;
