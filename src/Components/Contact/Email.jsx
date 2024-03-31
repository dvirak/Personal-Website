import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function SendEmail() {
  const [message, setMessage] = useState("");
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // serviceID - templateID - #form - publicKey
      .sendForm("service_4hbkqub", "template_d4bkoid", e.target, {
        publicKey: "5rTwPzyF0Stn5_xur",
      })
      .then(
        () => {
          // Show Message Sent
          setMessage("Message Sent Successfully ✅	");

          // Remove message after 5 seconds
          setTimeout(() => {
            setMessage("");
          }, 5000);

          // Reset Form
          e.target.reset();
        },
        // Show Error Message
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Message not sent (service error) ❌");
        }
      );
  };

  return (
    <form
      action=""
      className="contact__form grid"
      id="contact-form"
      onSubmit={sendEmail}
    >
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
        {message}
      </p>

      <button type="submit" className="contact__send button">
        Send Message
      </button>
    </form>
  );
}
