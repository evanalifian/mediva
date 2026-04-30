import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./components/pages/Home.jsx";
import ResultsSearch from "./components/pages/ResultsSearch.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<ResultsSearch />} />
    </Routes>
  </BrowserRouter>,
);
