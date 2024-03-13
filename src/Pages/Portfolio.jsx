//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";

export default function Portfolio() {
  const pathname = window.location.pathname;

  console.log(pathname);
  return (
    <>
      <Navbar className="header-pages" />
      <div className="portfolio-div">
        <h1>PORTFOLIO</h1>
      </div>
    </>
  );
}
