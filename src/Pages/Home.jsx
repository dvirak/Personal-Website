//! Imported Libraries --------------------------
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

//! Imported Components/Variables----------------
import profilePicture from "../assets/pictures/DVirak23.jpg";

export default function Home() {
  const pathname = window.location.pathname;

  console.log(pathname);

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
                  src={profilePicture}
                  alt="Daniel Virak's Beautiful Portrait of Himself"
                  className="perfil__image"
                />
              </div>
            </div>

            <div className="home__content grid"></div>

            <Link to="" className="home__button button"></Link>
          </div>
        </section>

        {/* /*=============== SERVICES ===============*/}

        <section className="services section"></section>

        {/* /*=============== WORK ===============*/}

        <section className="work section"></section>

        {/* /*=============== TESTIMONIAL ===============*/}

        <section className="testimonial section"></section>
      </main>
    </>
  );
}
