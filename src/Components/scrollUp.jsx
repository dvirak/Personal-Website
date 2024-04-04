//! Imported Libraries --------------------------
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ScrollUp() {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Hide the scroll button when the route changes
    setScroll(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position >= 350) {
        setScroll(true);
      } else if (position < 350) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      className={`scrollup ${scroll ? "show-scroll" : ""}`}
      id="scroll-up"
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  );
}
