//! Imported Components/Variables----------------
import Navbar from "../Components/Navbar";

export default function Contact() {
  const pathname = window.location.pathname;

  console.log(pathname);

  return (
    <>
      <Navbar className="header-pages" />
      <section className="contact section">
        <h2 className="section__title">
          {`Lets Talk 
          About Your Project`}
        </h2>

        <div className="contact__page container grid">
          <form action="" className="contact__form grid" id="contact-form">
            <div className="contact__group grid">
              <div className="contact__box">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  placeholder="Write your name"
                  className="contact__input"
                  autoComplete="name"
                ></input>
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
              </div>

              <div className="contact__box">
                <input
                  type="text"
                  name="user_email"
                  id="email"
                  required
                  placeholder="Write your email"
                  className="contact__input"
                ></input>
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div className="contact__box contact__area">
              <textarea
                name="user_message"
                id="message"
                required
                placeholder="Write your message"
                className="contact__input"
              ></textarea>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>

            <p className="contact__message" id="contact-message">
              Message
            </p>

            <button type="submit" className="contact__send button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
