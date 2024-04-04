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
              <Link to="/About" className="footer__link">
                About Me
              </Link>
            </li>
            <li>
              <Link to="Portfolio" className="footer__link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="footer__link">
                Contact Me
              </Link>
            </li>
          </ul>

          <div className="footer__social">
            <Link
              to="https://www.linkedin.com/in/danielvirak/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-linkedin-box-fill"></i>
            </Link>

            <Link
              to="https://github.com/dvirak"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-github-fill"></i>
            </Link>

            {/* <Link to="" target="_blank" className="footer__social-link"></Link> */}

            {/* <Link to="" target="_blank" className="footer__social-link"></Link> */}
          </div>
        </div>

        <span className="footer__copy">
          &#169; Daniel Virak 2024, All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
