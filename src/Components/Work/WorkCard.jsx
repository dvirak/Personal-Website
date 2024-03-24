//! Imported Libraries --------------------------
import { Link } from "react-router-dom";

export default function WorkCard({ link, image, title, description }) {
  return (
    <article className="work__card">
      <Link to={link} target="_blank" className="work__link">
        <img src={image} alt={`${title}`} className="work__img" />
        <i className="ri-arrow-right-circle-line work__icon"></i>
      </Link>
      <h2 className="work__title">{title}</h2>
      <span className="work__subtitle">{description}</span>
    </article>
  );
}
