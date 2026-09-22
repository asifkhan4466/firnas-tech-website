import { useState } from "react";
import { Eyebrow, Icon } from "./Shared";
// Short excerpts from the client testimonials published on https://firnas.tech/.
const reviews = [
  {
    quote:
      "The design, functionality, and attention to detail were outstanding.",
    name: "Masood Ahmed",
    location: "Dubai, UAE",
    initials: "MA",
  },
  {
    quote: "They’re our trusted innovation partner.",
    name: "William Connor",
    location: "Cornwall, UK",
    initials: "WC",
  },
  {
    quote: "The communication was seamless.",
    name: "Ethan David",
    location: "Hamilton, USA",
    initials: "ED",
  },
];
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  const move = (direction) =>
    setActive(
      (current) => (current + direction + reviews.length) % reviews.length,
    );
  return (
    <section className="testimonials" aria-label="Client testimonials">
      <div className="container testimonial-inner">
        <button
          className="review-arrow"
          onClick={() => move(-1)}
          aria-label="Previous testimonial"
        >
          <Icon name="arrow" />
        </button>
        <div className="review-card">
          <Eyebrow>WHAT OUR CLIENTS SAY</Eyebrow>
          <div aria-live="polite" aria-atomic="true">
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-person">
              <span className="avatar">{review.initials}</span>
              <div>
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
            </div>
          </div>
          <div className="review-meta">
            <div className="slider-dots">
              {reviews.map((item, index) => (
                <button
                  key={item.name}
                  className={index === active ? "active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Read testimonial from ${item.name}`}
                  aria-pressed={index === active}
                />
              ))}
            </div>
            <a href="https://firnas.tech/" target="_blank" rel="noreferrer">
              Client stories on firnas.tech <Icon name="arrow" />
            </a>
          </div>
        </div>
        <button
          className="review-arrow"
          onClick={() => move(1)}
          aria-label="Next testimonial"
        >
          <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}
