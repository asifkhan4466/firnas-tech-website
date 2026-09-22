import { Eyebrow, Icon } from "./Shared";
import { processSteps } from "../data";
export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-heading centered">
          <Eyebrow>OUR PROCESS</Eyebrow>
          <h2>
            From Idea to <span>Impact</span>
          </h2>
        </div>
        <div className="process-grid">
          {processSteps.map(([title, text, icon], index) => (
            <div className="process-step" key={title}>
              <div className={`process-icon step-${index}`}>
                <span className="step-number">0{index + 1}</span>
                <Icon name={icon} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
