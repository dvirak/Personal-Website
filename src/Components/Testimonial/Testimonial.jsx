//! Imported Libraries --------------------------
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import "swiper/css/pagination";
import { useEffect } from "react";
import "../../assets/swiper/swiper-bundle.css";

//! Imported Components/Variables----------------
import TestimonialCard from "./TestimonialCard";
import byronPic from "../../assets/pictures/byron.jpg";
import shannonPic from "../../assets/pictures/Shannon.jpg";

export default function Testimonial() {
  useEffect(() => {
    const swiperTestimonial = new Swiper(".testimonial__swiper", {
      modules: [Pagination],
      loop: true,
      spaceBetween: 32,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="testimonial section">
      <h2 className="section__title">
        {`What they Say 
      About Me?`}
      </h2>
      <div className="testimonial__container container">
        <div className="testimonial__swiper swiper">
          <div className="swiper-wrapper">
            <TestimonialCard
              imageSrc={byronPic}
              testyName="Byron"
              description="Not bad."
            />
            <TestimonialCard
              imageSrc={shannonPic}
              testyName="Shannon"
              description="He is amazing. Look at my face. Just look how happy he makes me. Im overjoyed."
            />
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
