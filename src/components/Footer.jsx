import { useState } from "react";
import { navigation, websiteUrl, services, company } from "../data";
import { Logo, Icon } from "./Shared";
export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  async function subscribe(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubscribing(true);
    setSubscribed(false);
    setSubscriptionError(false);

    try {
      const response = await fetch("https://formspree.io/f/mgavkqyk", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree request failed");
      setSubscribed(true);
      form.reset();
    } catch {
      setSubscriptionError(true);
    } finally {
      setSubscribing(false);
    }
  }

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{company.summary}</p>
          <div className="footer-contact">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.phoneHref}>{company.phone}</a>
          </div>
          <a
            className="official-site"
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.firnas.tech <Icon name="arrow" />
          </a>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {navigation.map((name) => (
              <li key={name}>
                <a href={`#${name.toLowerCase()}`}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.name}>
                <a href={service.url} target="_blank" rel="noopener noreferrer">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates and news.</p>
          <form className="newsletter" onSubmit={subscribe}>
            <input type="hidden" name="_subject" value="For updates" />
            <input
              type="email"
              name="email"
              aria-label="Email for newsletter"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              disabled={subscribing}
            >
              <Icon name="arrow" />
            </button>
          </form>
          {subscribed && (
            <p className="newsletter-note" role="status">
              Thank you for subscribing.
            </p>
          )}
          {subscriptionError && (
            <p className="newsletter-note newsletter-error" role="alert">
              Subscription could not be sent. Please try again.
            </p>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} FIRNAS.TECH. All rights reserved.
          </span>
          <span>
            Designed with <b>♥</b> for a better tomorrow.
          </span>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
}
