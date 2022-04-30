import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="desktop" element={<Desktop />} />
          <Route path="mobile" element={<Mobile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
