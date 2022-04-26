import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { CategoriesProvider, QuestionProvider } from "./frontend/Contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoriesProvider>
        <QuestionProvider>
          <App />
        </QuestionProvider>
      </CategoriesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
