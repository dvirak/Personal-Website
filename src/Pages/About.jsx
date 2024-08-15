//! Imported Components/Variables----------------
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import profilePictureNB from "../assets/pictures/DVirakNB3.png";
import cssPic from "../assets/pictures/about-css.svg";
import gitPic from "../assets/pictures/about-git.svg";
import githubPic from "../assets/pictures/about-github.svg";
import htmlPic from "../assets/pictures/about-html.svg";
import javascriptPic from "../assets/pictures/about-javascript.svg";
import reactPic from "../assets/pictures/about-react.svg";
import pythonPic from "../assets/pictures/about-python.png";
import Experience from "./Experience";
import Testimonial from "../Components/Testimonial/Testimonial";

export default function About() {
  const pathname = window.location.pathname;

  console.log(pathname);
  console.log(typeof pathname);

  return (
    <>
      {/* <Navbar className="header-pages" /> */}
      <main className="main">
        <section className="about section">
          <h2 className="section__title">
            {`My Personal
          Information`}
          </h2>

          <div className="about__container about__page container grid">
            <div className="about__perfil perfil">
              <div className="perfil__content">
                <img
                  src={profilePictureNB}
                  alt="Daniel Virak's Beautiful Portrait of Himself"
                  className="perfil__img"
                />
              </div>
            </div>
            <div className="about__content grid">
              <div className="about__data grid">
                <div className="about__info grid">
                  <h1 className="about__name">Daniel Virak</h1>
                  <h2 className="about__profession">Software Developer</h2>
                  <p className="about__description">
                    Full-Stack Developer seeking employment with a dynamic
                    developer team. Known as an analytical, problem-solving
                    leader who works well in a team with strong time-management
                    skills and the ability to learn concepts quickly.
                  </p>
                </div>
                <Link to="/Contact" className="about__button button">
                  Contact Me
                </Link>
              </div>

              <div className="about__skills">
                <h3 className="about__skills-title">My Skills are</h3>
                <div className="about__skills-content grid">
                  <img
                    src={htmlPic}
                    alt="Daniel Knows HTML"
                    className="about__skills-img"
                  />
                  <img
                    src={cssPic}
                    alt="Daniel Knows CSS"
                    className="about__skills-img"
                  />
                  <img
                    src={javascriptPic}
                    alt="Daniel Knows Javascript"
                    className="about__skills-img"
                  />
                  <img
                    src={reactPic}
                    alt="Daniel Knows React"
                    className="about__skills-img"
                  />
                  <img
                    src={gitPic}
                    alt="Daniel Knows Git"
                    className="about__skills-img"
                  />
                  <img
                    src={githubPic}
                    alt="Daniel Knows GitHub"
                    className="about__skills-img"
                  />
                  <img
                    src={pythonPic}
                    alt="Daniel Knows Python"
                    className="about__skills-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Experience />
        </section>
      </main>
    </>
  );
}
