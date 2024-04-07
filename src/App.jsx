//! Imported Libraries --------------------------
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router";

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
  // const location = useLocation();

  useEffect(() => {
    const rootElement = document.getElementById("root");
    // Update the class of the body tag based on the theme state
    if (rootElement) {
      rootElement.classList.toggle("dark-theme", isDarkTheme);
    }
  }, [isDarkTheme]);

  // const isHome = location.pathname === "/";

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} location={location} />
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
