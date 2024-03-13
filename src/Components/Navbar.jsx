import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    // Hide the navbar when the route changes
    setNavVisible(false);
  }, [location]);

  const className = props.className || "";

  return (
    <header className={`header ${className}`} id="header">
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
            {/* <div className="nav__close" id="nav-close"> */}
            <button onClick={() => setNavVisible(false)}>
              <i className="ri-close-circle-line nav__close" id="nav-close" />
            </button>
            {/* </div> */}
          </div>
        )}

        <div className="nav_actions">
          {/* THEME BUTTON */}
          {/* TOGGLE BUTTON */}
          {/* <div className="nav__toggle" id="nav-toggle"> */}
          <button className="show__button" onClick={() => setNavVisible(true)}>
            <i className="ri-apps-2-line nav__toggle" id="nav-toggle" />
          </button>
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}
