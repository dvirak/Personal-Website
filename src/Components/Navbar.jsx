import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav container">
      <Link to="/" className="nav__logo">
        Daniel
      </Link>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/About" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Portfolio" className="nav__link">
              Portfolio
            </Link>
          </li>
          <li className="button">
            <Link to="/Contact" className="nav__link">
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Close Button */}
        <div className="nav__close" id="nav-close">
          <i className="ri-close-circle-line"></i>
        </div>
      </div>

      <div className="nav_actions">
        {/* THEME BUTTON */}
        {/* TOGGLE BUTTON */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-apps-2-line"></i>
        </div>
      </div>
    </header>
  );
}
