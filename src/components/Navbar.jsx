import { useEffect, useRef, useState } from 'react';
import { navigation, websiteUrl, services } from '../data';
import { Logo, Button, Icon } from './Shared';

const aboutLinks = [
  ['About Us', '#about'],
  ['Our Team', 'https://firnas.tech/our-team/'],
  ['Careers', 'https://firnas.tech/careers/'],
  ['Clients', 'https://firnas.tech/clients/'],
];
const partners = [
  ['Abbottabad University of Science and Technology', '/assets/partner-aust.png'],
  ['COMSATS University Islamabad', '/assets/partner-comsats.png'],
  ['The Millennium Universal College', '/assets/partner-tmuc.png'],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const header = useRef(null);
  const triggers = useRef({});
  const panels = useRef({});
  const focusPanel = useRef(false);
  function close() { setDropdown(null); setOpen(false); }
  useEffect(() => {
    const outside = event => { if (!header.current?.contains(event.target)) close(); };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, []);
  useEffect(() => {
    if (dropdown && focusPanel.current) { panels.current[dropdown]?.querySelector('a')?.focus(); focusPanel.current = false; }
  }, [dropdown]);
  function keyDown(event) {
    if (event.key === 'Escape') {
      if (dropdown) { triggers.current[dropdown]?.focus(); setDropdown(null); }
      else setOpen(false);
    }
  }
  return <header className="site-header" ref={header} onKeyDown={keyDown} onBlur={event=>{ if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(null); }}>
    <div className="container nav-inner">
      <Logo />
      <nav id="main-navigation" className={open?'nav-links is-open':'nav-links'} aria-label="Main navigation">
        {navigation.map(name => {
          if (name !== 'About' && name !== 'Services') return <a key={name} href={`#${name.toLowerCase()}`} onClick={close}>{name}</a>;
          const expanded = dropdown === name;
          return <div className="nav-dropdown" key={name}>
            <button ref={element=>{triggers.current[name]=element;}} className={`nav-dropdown-trigger ${expanded?'expanded':''}`} aria-expanded={expanded} aria-controls={`nav-panel-${name}`} onClick={()=>setDropdown(expanded?null:name)} onKeyDown={event=>{if(event.key==='ArrowDown'){event.preventDefault();if(expanded)panels.current[name]?.querySelector('a')?.focus();else {focusPanel.current=true;setDropdown(name);}}}}>{name}<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg></button>
            {expanded && <div id={`nav-panel-${name}`} className="mega-panel" ref={element=>{panels.current[name]=element;}}><div className={`container mega-content ${name==='Services'?'mega-services':''}`}>
              <a className="mega-intro" href={name==='About'?'#about':'#services'} onClick={close}><strong>{name==='About'?'About ':'Explore '}<br />{name==='About'?'FIRNAS.TECH':'Our Services'}</strong><Icon name="arrow" /></a>
              {name==='About'?<>
                <div className="mega-column"><h3>About</h3><ul>{aboutLinks.map(([label,url])=><li key={label}><a href={url} onClick={close}><span/>{label}</a></li>)}</ul></div>
                <div className="mega-column"><h3>Resources</h3><ul><li><a href="#events" onClick={close}><span/>News and Events</a></li><li><a href="#locations" onClick={close}><span/>Our Locations</a></li></ul></div>
                <div className="mega-partners"><h3>Our partners & supporters</h3><div>{partners.map(([alt,src])=><img key={src} src={src} alt={alt} />)}</div></div>
              </>:<div className="mega-service-links">{services.map(service=><a key={service.name} href={service.url} onClick={close}><span className={`icon-box ${service.color}`}><Icon name={service.icon}/></span><span>{service.name}<small>{service.description}</small></span><Icon name="arrow"/></a>)}</div>}
            </div></div>}
          </div>;
        })}
      </nav>
      <a className="website-link" href={websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit the official FIRNAS.TECH website"><Icon name="globe"/></a>
      <Button href="#contact" className="nav-cta" onClick={close}>Let's Talk</Button>
      <button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>{setOpen(!open);setDropdown(null);}}><Icon name={open?'close':'menu'}/></button>
    </div>
  </header>;
}

