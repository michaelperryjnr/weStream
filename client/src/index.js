import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Analytics /> */}
  </React.StrictMode>
);


//Tailwind scroll bar autohide
//Remember to add vercel analytics