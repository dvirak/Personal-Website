//! Imported Libraries --------------------------
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

export default function Navbar({ className }) {
  const [navVisible, setNavVisible] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [scroll, setScroll] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    // Hide the navbar when the route changes
    console.log(location.pathname);
    setNavVisible(false);
    setIsHome(location.pathname === "/");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position >= 50) {
        setScroll(true);
      } else if (position < 50) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update theme based on the saved theme in local storage
    const selectedTheme = localStorage.getItem("selected-theme");
    if (selectedTheme) {
      toggleTheme(selectedTheme === "dark");
    }
  }, []);

  function handleThemeChange() {
    toggleTheme(!isDarkTheme);
    localStorage.setItem("selected-theme", isDarkTheme ? "light" : "dark");

    document.body.classList.toggle("dark-theme", !isDarkTheme);
  }

  // const className = props.className || "";

  return (
    <header
      className={`header ${!isHome ? "header-pages" : ""} ${
        scroll ? "bg-header" : ""
      }`}
      id="header"
    >
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Daniel
        </Link>
        {navVisible && (
          <div className="nav__menu show-menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  to="/"
                  className="nav__link"
                  onClick={() => setNavVisible(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/About"
                  className="nav__link"
                  onClick={() => setNavVisible(false)}
                >
                  About Me
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/Portfolio"
                  className="nav__link"
                  onClick={() => setNavVisible(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/Contact"
                  className="button"
                  onClick={() => setNavVisible(false)}
                >
                  Contact Me
                </Link>
              </li>
            </ul>

            {/* Close Button */}
            <div className="nav__close" id="nav-close">
              <i
                onClick={() => setNavVisible(false)}
                className="ri-close-line"
                id="nav-close"
              />
            </div>
          </div>
        )}

        <div className="nav_actions">
          {/* THEME BUTTON */}
          <i
            onClick={handleThemeChange}
            className={`change__theme ${
              isDarkTheme ? "ri-sun-line" : "ri-moon-line"
            } `}
            id="theme-button"
          ></i>
          {/* TOGGLE BUTTON */}
          <button className="show__button" onClick={() => setNavVisible(true)}>
            <i className="ri-apps-2-line nav__toggle" id="nav-toggle" />
          </button>
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}
