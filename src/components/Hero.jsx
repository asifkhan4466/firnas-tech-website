import { useEffect, useState } from "react";
import { Eyebrow, Button, Icon } from "./Shared";
const logo = "/assets/firnas-symbol.png";
import { companyStats, company } from "../data";

const slides = [
  {
    label: "Web Development",
    eyebrow: "INNOVATION · DEVELOPMENT · IMPACT",
    first: "Transforming",
    second: "Ideas Into",
    accent: "Real Solutions",
    description: company.summary,
    icon: "code",
  },
  {
    label: "Mobile Applications",
    eyebrow: "INTUITIVE · CONNECTED · HUMAN",
    first: "Apps That",
    second: "Connect People.",
    accent: "Inspire Growth.",
    description:
      "Put your business in the palm of their hands. We create thoughtful mobile experiences that connect people, simplify life and move your vision forward.",
    icon: "phone",
  },
  {
    label: "AI / ML / GenAI",
    eyebrow: "SMARTER SYSTEMS · GREATER POSSIBILITIES",
    first: "Work Smarter.",
    second: "Dream Bigger.",
    accent: "Build the Future.",
    description:
      "Make room for what comes next. Our intelligent digital solutions turn complex challenges into simple experiences, helping your business achieve more.",
    icon: "cpu",
  },
];
const SLIDE_DURATION = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);


  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const running = !focused && !hidden && !reducedMotion;
  const slide = slides[active];
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_DURATION,
    );
    return () => clearTimeout(timer);
  }, [active, running]);
  return (
    <section
      id="home"
      className={`hero hero-theme-${active}`}
      aria-roledescription="carousel"
      aria-label="Our digital services"


      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />
      <div className="container hero-inner">
        <div
          className="hero-copy"
          aria-live={running ? "off" : "polite"}
          aria-atomic="true"
        >
          <div className="slide-copy" key={active}>
            <Eyebrow>{slide.eyebrow}</Eyebrow>
            <h1>
              {slide.first}
              <br />
              {slide.second}
              <br />
              <span>{slide.accent}</span>
            </h1>
            <p>{slide.description}</p>
          </div>
          <div className="hero-actions">
            <Button href="#contact">Get Started</Button>

          </div>
          <div className="stats">
            {companyStats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-top">
                <i />
                <i />
                <i />
                <span>WHERE IDEAS FIND WINGS</span>
              </div>
              <img src={logo} alt="" />
              <div className="screen-bottom">
                <span>DESIGN.</span>
                <span>DEVELOP.</span>
                <span>DELIVER.</span>
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="glass-label innovate">
            <Icon name="bulb" />
            <span>Innovate</span>
          </div>
          <div className="glass-label design">
            <Icon name="pen" />
            <span>Design</span>
          </div>
          <div className="glass-label develop">
            <Icon name={slide.icon} />
            <span>
              {active === 1 ? "Connect" : active === 2 ? "Automate" : "Develop"}
            </span>
          </div>
          <div className="glass-label grow">
            <Icon name="rocket" />
            <span>Grow</span>
          </div>
          <div className="hero-note">
            Ideas
            <br />
            Find
            <br />
            <span>Wings.</span>
          </div>
        </div>
        <div className="hero-bottom">

          <div className="hero-tabs" aria-label="Choose hero slide">
            {slides.map((item, index) => (
              <button
                key={item.label}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show ${item.label} slide`}
                aria-pressed={active === index}
              >
                <span>
                  <b>0{index + 1}</b>
                  {item.label}
                </span>
                <span className="slide-track">
                  {active === index && (
                    <i
                      key={`${active}-${running}`}
                      className={running ? "is-running" : ""}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
