import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root");

el &&
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
