// import React from "react";
// import { Routes } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import Login from "./scenes/login/Login";
// import SignUp from "./scenes/login/SignUp";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} /> */}
//         {/* <Route path="/app/*" element={<App />} /> */}
//         <App />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
