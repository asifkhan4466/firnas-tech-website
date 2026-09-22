import { Button, Eyebrow, Icon } from "./Shared";
import { company } from "../data";
const values = [
  ["globe", "Global Delivery", "Across five countries"],
  ["code", "Software Products", "Web, mobile and AI"],
  ["cpu", "Dedicated Teams", "Specialists for your project"],
  ["rocket", "Flexible Engagement", "Team or fixed-price models"],
];
export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <Eyebrow>ABOUT FIRNAS.TECH</Eyebrow>
          <h2>
            Technology With
            <br />
            <span>A Higher Purpose</span>
          </h2>
          <p>
            {company.summary} Based in Abbottabad, our team supports clients
            through dedicated engineering teams and fixed-price project
            delivery.
          </p>
          <Button
            href="https://firnas.tech/about/"
            target="_blank"
            rel="noreferrer"
          >
            More About Us
          </Button>
        </div>
        <div className="about-visual">
          <div className="about-orbit" />
          <img
            className="team-photo"
            src="/assets/firnas-team.jpg"
            alt="The FIRNAS.TECH team connecting with students at a career event"
            loading="lazy"
            width="1024"
            height="703"
          />
          <div className="about-badge">
            <Icon name="rocket" />
            <strong>
              Turning Ideas
              <br />
              Into Opportunities
            </strong>
          </div>
          <div className="values-card">
            {values.map(([icon, title, text]) => (
              <div key={title}>
                <span>
                  <Icon name={icon} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
