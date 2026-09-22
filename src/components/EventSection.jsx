import { useState } from "react";
import { companyVideoSrc, youtubeUrl } from "../data";
import { Eyebrow, Icon } from "./Shared";

export default function EventSection() {
  const [videoError, setVideoError] = useState(false);
  return (
    <section id="events" className="event-section">
      <div className="container event-grid">
        <div className="event-copy">
          <Eyebrow>OUR STORY & COMMUNITY</Eyebrow>
          <h2>
            Ideas, People & <span>Possibilities</span>
          </h2>
          <p>
            Discover the people behind FIRNAS.TECH and explore real moments
            from our events, partnerships and community initiatives.
          </p>
          <a
            className="recent-event"
            href="https://firnas.tech/news-and-events/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/firnas-community.webp"
              alt="FIRNAS.TECH community visit to SOS Youth Village Abbottabad"
              width="1024"
              height="662"
              loading="lazy"
            />
            <span>
              Connecting with our community
              <small>
                Explore our latest events <Icon name="arrow" />
              </small>
            </span>
          </a>
          {youtubeUrl && (
            <a
              className="button"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="play" />
              Watch on YouTube
              <Icon name="arrow" />
            </a>
          )}
        </div>
        <figure className="company-film">
          <div className="event-media">
            {!companyVideoSrc ? (
              <a href="https://firnas.tech/news-and-events/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/firnas-community.webp" alt="FIRNAS.TECH visiting SOS Youth Village Abbottabad" style={{width:'100%', height:'auto', display:'block'}} />
              </a>
            ) : videoError ? (
              <div className="video-error">
                <p>The video could not load.</p>
                <a
                  className="button"
                  href="https://firnas.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on FIRNAS.TECH
                  <Icon name="arrow" />
                </a>
              </div>
            ) : (
              <video
                controls
                preload="metadata"
                playsInline
                src={companyVideoSrc}
                onError={() => setVideoError(true)}
                aria-label="Video featured on the official FIRNAS.TECH website"
              >
                Your browser does not support embedded video.{" "}
                <a href={companyVideoSrc}>Open the video</a>.
              </video>
            )}
          </div>
          <figcaption>
            FIRNAS.TECH community moments{" "}
            <a
              href="https://firnas.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website <Icon name="arrow" />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
