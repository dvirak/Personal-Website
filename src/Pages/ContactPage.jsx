//! Imported Components/Variables----------------
import SendEmail from "../Components/Contact/Email";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar className="header-pages" />
      <section className="contact section">
        <h2 className="section__title">
          {`Lets Talk 
          About Your Project`}
        </h2>

        <div className="contact__page container grid">
          <SendEmail />
        </div>
      </section>
      <Footer />
    </>
  );
}
