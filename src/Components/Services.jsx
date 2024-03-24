//! Imported Libraries --------------------------
import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  // setActice takes in index, sets activce
  // If services__card key == active index, display modal
  // closeModal set activceIndex = 0
  function openModal(index) {
    setActiveIndex(index);
  }

  function closeModal() {
    setActiveIndex(null);
  }

  return (
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
          <button
            className="services__button button"
            onClick={() => openModal(1)}
          >
            Know More
          </button>

          <div
            className={`services__modal ${
              activeIndex === 1 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">Software Developer</h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Create Professional and Quality Websites at the Client's
                  request
                </li>
                <li className="services__modal-item">
                  I do web design in prototypes
                </li>
                <li className="services__modal-item">
                  I position yourwebsite with advanced SEO
                </li>
                <li className="services__modal-item">
                  I solve performance problems on web pages
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-code-s-slash-line services__icon"></i>
          <h2 className="services__title">Software Engineer</h2>
          <p className="services__description">
            Beautiful and Ellegent Web Sites that are amazing
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(2)}
          >
            Know More
          </button>

          <div
            className={`services__modal ${
              activeIndex === 2 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">Software Engineer</h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Create Professional and Quality Websites at the Client's
                  request
                </li>
                <li className="services__modal-item">
                  I do web design in prototypes
                </li>
                <li className="services__modal-item">
                  I position yourwebsite with advanced SEO
                </li>
                <li className="services__modal-item">
                  I solve performance problems on web pages
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services__card">
          <i className="ri-layout-line services__icon"></i>
          <h2 className="services__title">Interfaces UI/UX</h2>
          <p className="services__description">
            Beautiful and Ellegent Web Sites that are amazing
          </p>
          <button
            className="services__button button"
            onClick={() => openModal(3)}
          >
            Know More
          </button>
          <div
            className={`services__modal ${
              activeIndex === 3 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                onClick={() => closeModal()}
                className="ri-close-line services__modal-close"
              ></i>
              <h2 className="services__modal-title">Interfaces UI/UX</h2>

              <ul className="services__modal-list grid">
                <li className="services__modal-item">
                  Create Professional and Quality Websites at the Client's
                  request
                </li>
                <li className="services__modal-item">
                  I do web design in prototypes
                </li>
                <li className="services__modal-item">
                  I position yourwebsite with advanced SEO
                </li>
                <li className="services__modal-item">
                  I solve performance problems on web pages
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
