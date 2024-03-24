export default function TestimonialCard({ imageSrc, testyName, description }) {
  return (
    <article className="testimonial__card swiper-slide">
      <div className="testimonial__border">
        <img
          src={imageSrc}
          alt={`What ${testyName} thinks about Daniel`}
          className="testimonial__img"
        />
      </div>

      <h2 className="testimonial__name">{testyName}</h2>
      <p className="testimonial__description">{description}</p>
    </article>
  );
}
