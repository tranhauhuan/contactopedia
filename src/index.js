import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactIndex from "./components/ContactPages/ContactIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactIndex></ContactIndex>
  </React.StrictMode>
);
