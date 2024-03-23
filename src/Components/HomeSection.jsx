//! Imported Libraries --------------------------
import { Link } from "react-router-dom";

//! Imported Components/Variables----------------
import profilePictureNB from "../assets/pictures/DVirakNB3.png";
import resume from "../assets/documents/Daniel_Virak_Resume.pdf";

export default function HomeSection() {
  return (
    <section className="home section">
      <div className="home__rectangle"></div>

      <div className="home__container container grid">
        <div className="home__perfil perfil">
          <div className="perfil__content">
            <img
              src={profilePictureNB}
              alt="Daniel Virak's Beautiful Portrait of Himself"
              className="perfil__img"
            />
          </div>
        </div>

        <div className="home__content grid">
          <div className="home__data grid">
            <h1 className="home__name">Daniel Virak</h1>
            <h2 className="home__profession">Software Developer</h2>
            <div className="home__social">
              <Link
                to="https://github.com/dvirak"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-github-fill"></i>
              </Link>

              <Link
                to="https://www.linkedin.com/in/danielvirak/"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-linkedin-box-fill"></i>
              </Link>
              {/* 
                  <Link
                    to={resume}
                    download=""
                    className="home__social-link"
                  ></Link> */}
            </div>
          </div>
          <Link
            to={resume}
            target="_blank"
            download=""
            className="home__button button"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
