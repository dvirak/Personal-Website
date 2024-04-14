//! Imported Libraries --------------------------
import { Link } from "react-router-dom";

//! Imported Components/Variables----------------
import danazonScreenShot from "../../assets/pictures/DanazonScreenShot.png";
import bookBuddyScreenShot from "../../assets/pictures/BookBuddyScreenShot.png";
import puppyBowlScreenShot from "../../assets/pictures/PuppyBowlScreenShot.png";
import drumKitScreenShot from "../../assets/pictures/DrumKitScreenShot.png";
import diceGameScreenShot from "../../assets/pictures/DiceGameScreenShot.png";
import keeperAppScreenShot from "../../assets/pictures/KeeperAppScreenShot.png";
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
          link="https://willowy-cupcake-3e652e.netlify.app/"
          image={bookBuddyScreenShot}
          title="Book Buddy"
          description="Book rental app crafted with React and CSS. Create a profile to check out books!"
        />

        <WorkCard
          link="https://danazon.netlify.app/"
          image={danazonScreenShot}
          title="Danazon"
          description="E-Commerce platform collaboratively built using React, SQL, and CSS in a team environment"
        />

        <WorkCard
          link="https://velvety-cucurucho-fd3276.netlify.app/"
          image={puppyBowlScreenShot}
          title="Puppy Bowl"
          description="Fun puppy app crafted with React and CSS. Feel free to add a puppy, and if you want to get crazy it doesn't even have to be a dog!"
        />

        <WorkCard
          link="https://main--zippy-mochi-87ead5.netlify.app/"
          image={keeperAppScreenShot}
          title="Keeper App"
          description="My version of Google Keep, one of the first apps I made using React"
        />

        <WorkCard
          link="https://polite-mooncake-0cc311.netlify.app/"
          image={drumKitScreenShot}
          title="Drum Kit"
          description="An early project I made using CSS, HTML and JavaScript"
        />

        <WorkCard
          link="https://comforting-torte-76a64c.netlify.app/"
          image={diceGameScreenShot}
          title="Dice Game"
          description="An early project I made using CSS, HTML and JavaScript"
        />
      </div>
    </section>
  );
}
