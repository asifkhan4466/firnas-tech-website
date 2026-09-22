import { useEffect, useRef } from "react";
const logo = "/assets/firnas-symbol.png";
import { socialLinks } from "../data";

const paths = {
  arrow: "M5 12h14m-5-5 5 5-5 5",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18ZM5 7h14M5 17h14",
  phone:
    "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 3h4m-3 14h2",
  pen: "m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14l-1 7 7-2M3 21h18",
  settings:
    "m9 3-1 3-3 1-2 4 2 2v3l4 3 3-1 3 1 4-3v-3l2-2-2-4-3-1-1-3H9Zm7 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  cart: "M2 3h3l3 13h11l3-10H6M9 21h.01M18 21h.01",
  cpu: "M6 6h12v12H6V6Zm3 3h6v6H9V9ZM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4",
  cloud:
    "M7 18a5 5 0 0 1-1-10 6 6 0 0 1 12 0 5 5 0 0 1-1 10M12 12v10m-3-7 3-3 3 3",
  compass: "m16 3 5 5-7 7-5-5 7-7ZM9 10 3 21l11-6M16 3l-1 6 6-1",
  play: "m9 5 11 7-11 7V5Z",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  call: "M7 3 3 5c0 9 7 16 16 16l2-4-5-3-2 2-6-6 2-2-3-5Z",
  pin: "M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Zm-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  bulb: "M8 15a7 7 0 1 1 8 0l-1 4H9l-1-4Zm1 7h6M12 2V0M3 5 1 3m20 2 2-2",
  palette:
    "M12 3a9 9 0 1 0 0 18c3 0 0-4 3-5h3c5-2 2-13-6-13ZM7 9h.01M10 6h.01M15 7h.01M18 11h.01",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18",
  rocket:
    "M9 15c-1-7 5-12 12-12 0 7-5 13-12 12ZM9 8H5l-3 6h7m7 1v4l-6 3v-7M6 17l-3 4m12-14h.01",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  check: "m5 12 4 4L19 6",
  pause: "M8 5v14M16 5v14",
  linkedin: "M5 9v11M5 4v.01M10 20V9h4v2c4-5 7-1 7 2v7M14 13v7",
  facebook: "M15 3h-3a4 4 0 0 0-4 4v4H5v4h3v7h4v-7h4l1-4h-5V7h3V3Z",
  instagram:
    "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm9 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1-5h.01",
};
export function Icon({ name, ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
export function Logo() {
  return (
    <a className="brand" href="#home" aria-label="FIRNAS.TECH home">
      <img src={logo} alt="FIRNAS.TECH — Where ideas find wings" />
      <span className="brand-name" aria-hidden="true">
        FIRNAS<span>.TECH</span>
        <small>WHERE IDEAS FIND WINGS</small>
      </span>
    </a>
  );
}
export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span />
      {children}
    </span>
  );
}
export function Button({ children, href, className = "", ...props }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} className={`button ${className}`} {...props}>
      {children}
      <Icon name="arrow" />
    </Tag>
  );
}
export function Socials() {
  return (
    <div className="socials">
      {Object.entries(socialLinks)
        .filter(([, url]) => Boolean(url))
        .map(([name, url]) => (
          <a
            key={name}
            href={url}
            aria-label={name}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={name.toLowerCase()} />
          </a>
        ))}
    </div>
  );
}
export function Modal({ item, close }) {
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="detail-modal"
      aria-labelledby="detail-title"
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button
        className="modal-close"
        aria-label="Close details"
        onClick={close}
      >
        <Icon name="close" />
      </button>
      <Eyebrow>{item.category ? "PROJECT OVERVIEW" : "WHAT WE DO"}</Eyebrow>
      <h2 id="detail-title">{item.title || item.name}</h2>
      <p>{item.detail || item.description}</p>
      {item.url && (
        <a
          className="text-link case-study-link"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.category ? "View official case study" : "Explore this service"}{" "}
          <Icon name="arrow" />
        </a>
      )}
      <Button href="#contact" onClick={close}>
        Let’s talk about your project
      </Button>
    </dialog>
  );
}
