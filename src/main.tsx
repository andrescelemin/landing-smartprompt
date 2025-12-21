import React from "react";
import { createRoot } from "react-dom/client";
import "./shadcn.css";
import App from "./App";

const el = document.getElementById("root");

if (!el) {
  throw new Error('No se encontró el elemento con id="root" en index.html');
}

createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
