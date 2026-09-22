import { Button } from "./Shared";
export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <h2>
            Let’s Build Something Great
            <br />
            <span>Together</span>
          </h2>
          <p>Have a project in mind? We’re just one message away.</p>
        </div>
        <Button href="#contact">Contact Us</Button>
      </div>
    </section>
  );
}
