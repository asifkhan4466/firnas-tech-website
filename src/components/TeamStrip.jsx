
import { Eyebrow, Icon } from './Shared';

// Names, roles and portraits from https://firnas.tech/#talent-network.
const members = [
  { name: 'Noman Tariq', role: 'Backend Developer', image: 'team-noman.png', skills: ['Python', 'AI', 'Computer Vision'] },
  { name: 'Asfand Yar', role: 'Graphic Designer', image: 'team-asfand.png', skills: ['Photoshop', 'Illustrator', 'Figma'] },
  { name: 'Asim Tariq', role: 'Mobile App Developer', image: 'team-asim.png', skills: ['Android', 'iOS', 'Java'] },
  { name: 'Muhammad Haris', role: 'CMS Developer', image: 'team-haris.png', skills: ['WordPress', 'Shopify', 'Webflow'] },
];

export default function TeamStrip() {

  return <section id="team" className="team-strip section" aria-labelledby="team-title">
    <div className="container team-heading">
      <div><Eyebrow>THE PEOPLE BEHIND FIRNAS.TECH</Eyebrow><h2 id="team-title">Meet Our <span>Talent Network</span></h2><p>Creative minds. Skilled engineers. One shared vision.</p></div>
      <div className="team-actions"><a href="https://firnas.tech/our-team/" target="_blank" rel="noopener noreferrer">Meet the full team <Icon name="arrow" /></a></div>
    </div>
    <div className="team-window">
      <div className="team-track">
        {[0, 1].map(copy => <div className="team-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {members.map(member => <article className="team-card" key={member.name}>
            <img src={`/assets/${member.image}`} alt={copy ? '' : member.name} width="160" height="160" loading="lazy" />
            <h3>{member.name}</h3><p>{member.role}</p>
            <div className="team-skills">{member.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>)}
      </div>
    </div>
  </section>;
}
