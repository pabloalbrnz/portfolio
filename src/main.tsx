import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/Projects/Projects.tsx";
import { E404 } from "./pages/Error/Error.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<App />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
