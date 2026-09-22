import { useEffect, useState } from 'react';
import { offices } from '../data';
import { Eyebrow, Icon } from './Shared';

// Approximate city positions on the official illustrated map (not GPS tracking).
const positions = [[66.5,41], [13,37], [46,29], [51.5,20], [62.5,45.5]];
export default function GlobalPresence() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReduced(media.matches);
    const visibility = () => setHidden(document.hidden);
    motion(); visibility();
    media.addEventListener('change', motion);
    document.addEventListener('visibilitychange', visibility);
    return () => { media.removeEventListener('change', motion); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  const running = !paused && !interacting && !reduced && !hidden;
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => setActive(index => (index + 1) % offices.length), 2000);
    return () => clearTimeout(timer);
  }, [active, running]);
  const office = offices[active];
  function select(index) { setActive(index); setPaused(true); }
  return <section id="locations" className={`global-presence section location-radar ${running ? 'is-scanning' : ''}`} aria-labelledby="global-heading">
    <div className="container">
      <div className="section-heading centered"><Eyebrow>CONNECTED ACROSS THE WORLD</Eyebrow><h2 id="global-heading">One Team. <span>Five Countries.</span></h2><p>Explore our offices. A local presence, a global perspective.</p></div>
      <div className="location-layout">
        <div className="office-map" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}>
          <img src="/assets/office-world-map.png" alt="World map showing FIRNAS.TECH office locations" width="1024" height="608" loading="lazy" />
          {offices.map((item,index) => <button key={item.country} className={`map-beacon ${index===active?'is-active':''}`} style={{left:`${positions[index][0]}%`,top:`${positions[index][1]}%`,'--delay':`${index*.55}s`}} onClick={()=>select(index)} aria-label={`Show ${item.country} office in ${item.city}`} aria-pressed={active===index}><span className="beacon-ring"/><span className="beacon-ring second"/><span className="beacon-dot"/><span className="beacon-label">{item.city}</span></button>)}
          <div className="map-legend"><span/>Office locations <small>Illustrative map</small></div>
        </div>
        <div className="office-spotlight">
          <div className="spotlight-top"><span><i/>OFFICE SPOTLIGHT</span><button className="map-play" onClick={()=>setPaused(value=>!value)} aria-label={paused?'Resume office highlights':'Pause office highlights'} aria-pressed={paused}><Icon name={paused?'play':'pause'}/></button></div>
          <div className="spotlight-content" aria-live={running?'off':'polite'} aria-atomic="true"><span className="office-role">{office.role}</span><h3>{office.country}</h3><strong><Icon name="pin"/>{office.city}</strong><p>{office.address}</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`} target="_blank" rel="noopener noreferrer">View on Google Maps <Icon name="arrow"/></a></div>
          <div className="office-counter"><span>0{active+1} <small>/ 05</small></span><span>{running?'Exploring our offices':paused?'Location selected':'Office locations'}</span></div>
        </div>
      </div>
      <div className="office-selectors" aria-label="Select an office">{offices.map((item,index)=><button key={item.country} onClick={()=>select(index)} className={active===index?'active':''} aria-pressed={active===index}><span className="selector-dot"/>{item.country}<small>{item.city}</small></button>)}</div>
    </div>
  </section>;
}
