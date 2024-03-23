export default function Services() {
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
          <button className="services__button button">Know More</button>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="ri-close-line services__modal-close"></i>
              <h2 className="services__modal-title">Software Developer</h2>

              <ul className="services__modal-list-grid">
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
          <i className="ri-settings-3-line services__icon"></i>
          <h2 className="services__title">Software Engineer</h2>
          <p className="services__description">
            Beautiful and Ellegent Web Sites that are amazing
          </p>
          <button className="services__button button">Know More</button>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="ri-close-line services__modal-close"></i>
              <h2 className="services__modal-title">Software Engineer</h2>

              <ul className="services__modal-list-grid">
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
          <button className="services__button button">Know More</button>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="ri-close-line services__modal-close"></i>
              <h2 className="services__modal-title">nterfaces UI/UX</h2>

              <ul className="services__modal-list-grid">
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
