import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="contact section">
      <div className="contact__container container grid">
        <h2 className="section__title">
          {`Lets Talk 
          About Your Project`}
        </h2>

        <Link to="/Contact" className="contact__button button">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
