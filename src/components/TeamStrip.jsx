
import { Eyebrow, Icon } from './Shared';

import members from '../data/team.json';
// Published names, roles and portraits: https://firnas.tech/our-team/.

export default function TeamStrip() {

  return <section id="team" className="team-strip section" aria-labelledby="team-title">
    <div className="container team-heading">
      <div><Eyebrow>THE PEOPLE BEHIND FIRNAS.TECH</Eyebrow><h2 id="team-title">Meet Our <span>Talent Network</span></h2><p>Creative minds. Skilled engineers. One shared vision.</p></div>
      <div className="team-actions"><a href="https://firnas.tech/our-team/" target="_blank" rel="noopener noreferrer">Meet the full team <Icon name="arrow" /></a></div>
    </div>
    <div className="team-window">
      <div className="team-track" style={{ '--team-count': members.length }}>
        {[0, 1].map(copy => <div className="team-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {members.map(member => <article className="team-card" key={member.name}>
            <img src={member.image} alt={copy ? '' : member.name} width="160" height="160" loading="lazy" />
            <h3>{member.name}</h3><p>{member.role}</p>
            {member.skills?.length > 0 && <div className="team-expertise"><small>{member.skillsLabel}</small><div className="team-skills">{member.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>}
            {member.linkedin && <a className="team-profile" href={member.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : 0} aria-label={`${member.name} on LinkedIn`}><Icon name="linkedin" /> LinkedIn</a>}
          </article>)}
        </div>)}
      </div>
    </div>
  </section>;
}
