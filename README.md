# FIRNAS.TECH frontend

Responsive, frontend-only React website based on the supplied design. No backend, database, API, authentication, or message storage.

## Run

```sh
npm install
npm run dev
```

Production: `npm run build`. Inspect the production output with `npm run preview`.
On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Assets and configuration

- `public/assets/firnas-logo-white.png`: active official white/green wordmark; retired wing logos are in `public/assets/archive/`.
- `public/assets/references/website-design.png`: original design reference saved alongside local website images.
- All website photos, project previews, and video now come from FIRNAS.TECH. Original URLs are documented in `public/assets/SOURCES.md`.
- `companyVideoSrc` in `src/data.js` points to the downloaded official homepage MP4. It plays in a native HTML5 player with controls. It is described as a company website video, not an event recording.
- LinkedIn, Facebook, and Instagram in `src/data.js` use the profile links published by https://firnas.tech/. Unconfigured social links are omitted. No official YouTube link was found, so the event CTA links to the company’s news and events page. Set `youtubeUrl` when available.
- `public/assets/firnas-team.jpg`: company team collage from https://firnas.tech/wp-content/uploads/2026/02/about-us-bnanner-1024x703.jpg.
- `src/components/Hero.jsx`: three automatic slides, rotating every six seconds. Previous/next, direct slide selection, and pause controls are available. Rotation pauses on hover, keyboard focus, hidden browser tabs, and reduced-motion preferences.
- `src/redesign.css`: updated navy/teal design, laptop illustration, responsive layouts, and decorative globe. Base form and component styles remain in `src/styles.css`.
- `src/components/Testimonials.jsx`: short attributed excerpts from testimonials published on https://firnas.tech/, with a source link and manual carousel controls.
- Project content and services are editable arrays in `src/data.js`. Italo Milan, VanLock Security, and Rukan Albait use matching official images and links to their published case studies.

Contact and newsletter forms validate input and display demo confirmation messages only. They do not send or store data. Contact details, service categories, office locations and company statistics use verified official information; see `CONTENT_SOURCES.md`. Update the shared exports in `src/data.js` to maintain these details consistently across the site.

The logo is square; it is shown intact rather than reconstructed into the different horizontal logo layout in the reference.
