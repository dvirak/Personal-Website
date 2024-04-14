//! Imported Libraries --------------------------
import { Link } from "react-router-dom";

//! Imported Components/Variables----------------
import danazonScreenShot from "../../assets/pictures/DanazonScreenShot.png";
import bookBuddyScreenShot from "../../assets/pictures/BookBuddyScreenShot.png";
import puppyBowlScreenShot from "../../assets/pictures/PuppyBowlScreenShot.png";
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
          description="E-Commerce platform collaboratively built using React, SQL, and CSS in a team environment"
        />

        <WorkCard
          link="https://willowy-cupcake-3e652e.netlify.app/"
          image={bookBuddyScreenShot}
          title="Book Buddy"
          description="Book rental app crafted with React and CSS. Create a profile to check out books!"
        />

        <WorkCard
          link="https://velvety-cucurucho-fd3276.netlify.app/"
          image={puppyBowlScreenShot}
          title="Puppy Bowl"
          description="Fun puppy app crafted with React and CSS. Feel free to add a puppy, and if you want to get crazy it doesn't even have to be a dog!"
        />
      </div>
    </section>
  );
}
