import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
//import App from './App2';
import App from "./App4";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
    <h2>Pokémon Effect</h2>
  </div>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
