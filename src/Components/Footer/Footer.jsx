import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <Link to="/" className="footer__logo">
            Daniel
          </Link>
          <ul className="footer__links">
            <li>
              <Link to="/About" className="foot_link">
                About Me
              </Link>
            </li>
            <li>
              <Link to="Portfolio" className="foot_link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="foot_link">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
