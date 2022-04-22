import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { CategoriesProvider } from "./frontend/Contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
