import { projects } from "../data";
import { Eyebrow, Icon } from "./Shared";
export default function Projects({ onDetails, notify }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading heading-row">
          <div>
            <Eyebrow>OUR PROJECTS</Eyebrow>
            <h2>
              Projects That Make an <span>Impact</span>
            </h2>
          </div>
          <a
            className="text-link"
            href="https://firnas.tech/work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <Icon name="arrow" />
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <button
              className="project-card"
              key={project.title}
              onClick={() => onDetails(project)}
            >
              <img
                className="project-image"
                src={project.image}
                alt={`${project.title} project by FIRNAS.TECH`}
                loading="lazy"
                width="1024"
                height="670"
              />
              <div className="project-info">
                <h3>
                  {project.title}
                  <Icon name="arrow" />
                </h3>
                <div className="tags">
                  <span>
                    {project.title === "Italo Milan" ? "Shopify" : "Web Design"}
                  </span>
                  <span>{project.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
