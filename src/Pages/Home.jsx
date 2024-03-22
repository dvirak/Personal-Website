//! Imported Libraries --------------------------
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

//! Imported Components/Variables----------------
import profilePictureNB from "../assets/pictures/DVirakNB3.png";
import profilePicture from "../assets/pictures/DVirak23.jpg";
import resume from "../assets/documents/Daniel_Virak_Resume.pdf";

export default function Home() {
  return (
    <>
      <Navbar className="" />
      <main className="main">
        {/* /*=============== HOME ===============*/}

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

        {/* /*=============== SERVICES ===============*/}

        <section className="services section">
          <h2 className="section__title">
            {`The Services
          I offer`}
          </h2>

          <div className="services__container container grid">
            <article className="services__card">
              <i className="ri-code-s-slash-line services__icon"></i>
              <h2 className="services__title">Software Developer</h2>
              <p className="services__description">
                Beautiful and Ellegent Web Sites that are amazing
              </p>
              <button className="services__button button">Know More</button>
            </article>

            <article className="services__card">
              <i className="ri-settings-3-line services__icon"></i>
              <h2 className="services__title">Software Engineer</h2>
              <p className="services__description">
                Beautiful and Ellegent Web Sites that are amazing
              </p>
              <button className="services__button button">Know More</button>
            </article>

            <article className="services__card">
              <i className="ri-layout-line services__icon"></i>
              <h2 className="services__title">Interfaces UI/UX</h2>
              <p className="services__description">
                Beautiful and Ellegent Web Sites that are amazing
              </p>
              <button className="services__button button">Know More</button>
            </article>
          </div>
        </section>

        {/* /*=============== WORK ===============*/}

        <section className="work section"></section>

        {/* /*=============== TESTIMONIAL ===============*/}

        <section className="testimonial section"></section>
      </main>
    </>
  );
}
