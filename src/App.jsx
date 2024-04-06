//! Imported Libraries --------------------------
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

//! Imported Components/Variables----------------
import "./App.css";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/ContactPage";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/scrollUp";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";

export default function App() {
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    console.log("FUCKNG USE EFFECT");
    const rootElement = document.getElementById("root");
    console.log("THEME CONTEXT VALUE: ", isDarkTheme);
    // Update the class of the body tag based on the theme state
    if (rootElement) {
      console.log("ROOT ELEMENT FOUND");
      rootElement.classList.toggle("dark-theme", isDarkTheme);
    }
  }, [isDarkTheme]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </BrowserRouter>
    </ThemeProvider>
  );
}
