import { services } from "../data";
import { Eyebrow, Icon, Button } from "./Shared";
export default function Services({ onDetails }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-heading services-heading">
          <div>
            <Eyebrow>OUR SERVICES</Eyebrow>
            <h2>
              Complete <span>Digital</span> Solutions
            </h2>
            <p>
              We provide end-to-end digital services to turn your ideas into
              reality.
            </p>
          </div>
          <Button
            href="https://firnas.tech/our-services/"
            target="_blank"
            rel="noreferrer"
          >
            Explore All Services
          </Button>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.name} className="service-card">
              <div className={`icon-box ${service.color}`}>
                <Icon name={service.icon} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button
                className="text-link"
                onClick={() => onDetails(service)}
                aria-label={`Learn more about ${service.name}`}
              >
                Learn More <Icon name="arrow" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
