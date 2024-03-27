//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";

export default function Contact() {
  const pathname = window.location.pathname;

  console.log(pathname);

  return (
    <>
      <Navbar className="header-pages" />
      <div className="contact-div">
        <h1>CONTACT</h1>.
      </div>
    </>
  );
}
