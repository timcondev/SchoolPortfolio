/*
App
Tim Conway
301495941
September 21st, 2024
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import Router from "./router";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
      <Router />
    </BrowserRouter>
  </StrictMode>
);
