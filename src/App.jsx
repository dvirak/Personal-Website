//! Imported Libraries --------------------------
import { useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

//! Imported Components/Variables----------------
import "./App.css";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
