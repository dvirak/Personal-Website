//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";

export default function About() {
  const pathname = window.location.pathname;

  console.log(pathname);
  console.log(typeof pathname);

  return (
    <>
      <Navbar className="header-pages" />
      <div className="about-div">
        <h1>ABOUT</h1>
      </div>
    </>
  );
}
