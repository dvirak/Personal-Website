//! Imported Libraries --------------------------
import { Link } from "react-router-dom";

//! Imported Components/Variables----------------
import danazonScreenShot from "../../assets/pictures/DanazonScreenShot.png";
import WorkCard from "./WorkCard";

export default function Work({ workPage }) {
  return (
    <section className="work section">
      <h2 className="section__title">
        {`My Most
      Recent Works`}
      </h2>
      <div
        className={`work__container container grid ${
          workPage ? "work__page" : ""
        }`}
      >
        <WorkCard
          link="https://danazon.netlify.app/"
          image={danazonScreenShot}
          title="Danazon"
          description="Website Design"
        />
        <WorkCard
          link="https://danazon.netlify.app/"
          image={danazonScreenShot}
          title="Danazon"
          description="Website Design"
        />
      </div>
    </section>
  );
}
