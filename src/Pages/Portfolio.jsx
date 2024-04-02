//! Imported Components/Variables----------------
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import Work from "../Components/Work/Work";

export default function Portfolio() {
  const pathname = window.location.pathname;

  console.log(pathname);
  return (
    <>
      <Navbar className="header-pages" />
      <Work workPage={true} />
      <Footer />
    </>
  );
}
