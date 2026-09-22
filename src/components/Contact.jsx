import { useState } from "react";
import { Eyebrow, Icon, Button, Socials } from "./Shared";
import { company, services } from "../data";
export default function Contact({ notify }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setSent(false);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/mgavkqyk", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree request failed");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>
            We’d Love to <span>Hear From You</span>
          </h2>
          <p>
            Have a project, idea or just want to say hello?
            <br />
            Email or call our team to discuss your project.
          </p>
          <div className="contact-details">
            {[
              ["mail", "Email", company.email, `mailto:${company.email}`],
              [
                "mail",
                "Sales",
                company.salesEmail,
                `mailto:${company.salesEmail}`,
              ],
              ["call", "Pakistan", company.phone, company.phoneHref],
              [
                "call",
                "Sweden",
                company.internationalPhone,
                company.internationalPhoneHref,
              ],
              [
                "pin",
                "Global Delivery Center",
                company.address,
                "https://firnas.tech/contact/",
              ],
            ].map(([icon, label, value, href]) => (
              <div className="contact-detail" key={label}>
                <span className="contact-icon">
                  <Icon name={icon} />
                </span>
                <div>
                  <strong>{label}</strong>
                  {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                </div>
              </div>
            ))}
            <div className="contact-detail">
              <span className="contact-icon">
                <Icon name="globe" />
              </span>
              <div>
                <strong>Follow Us</strong>
                <Socials notify={notify} />
              </div>
            </div>
          </div>
          <div className="contact-globe" aria-hidden="true">
            <div className="globe-sphere">
              <Icon name="globe" />
              <span className="globe-land land-one" />
              <span className="globe-land land-two" />
            </div>
            <span className="globe-orbit" />
            <span className="globe-label">
              Let’s
              <br />
              Connect!
            </span>
            <span className="globe-caption">
              Global
              <br />
              Impact.
            </span>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Your Name
              <input
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Your Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <label>
            Subject
            <select name="_subject" defaultValue="" required>
              <option value="" disabled>
                Select a subject
              </option>
              {services.map((service) => (
                <option key={service.name}>{service.name}</option>
              ))}
              <option>General Inquiry</option>
            </select>
          </label>
          <label>
            Your Message
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here…"
              required
              maxLength={5000}
            />
          </label>
          <Button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </Button>
          <p className="form-note">
            Frontend demo · Messages are not sent or stored.
          </p>
          {sent && (
            <div className="form-success" role="status">
              <Icon name="check" />
              <span>
                Thank you! Your message has been received.
                <small>
                  This is a demo confirmation. Email us to get in touch.
                </small>
              </span>
            </div>
          )}
          {error && (
            <div className="form-success form-error" role="alert">
              <span>Message could not be sent. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
