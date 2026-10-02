# Harrison Burchett portfolio

Canonical page: `index.html`. Styles, script and media: `portfolio/`.

The existing Cloudflare Pages project is `harrison-burchett-cv` (preview hostname `astro-blog-starter-template-dlp.pages.dev`). GitHub checks confirm automatic deployment from this repository. The root HTML supports the current static Pages configuration. The Astro home route renders the same HTML, with prebuild/predev asset synchronization.

## Content provenance

- Latest user-confirmed credits (October 2, 2026): Director of Photography on UFC Embedded; Videographer on UFC Countdown and UFC The Walk. No producer or field-producer credits. This supersedes the earlier all-DP instruction.
- Biography: user-supplied five-year UFC background, Kentucky Athletics experience, and Overhand co-founder role.
- Official series previews are representative UFC program material, not claims of sole authorship of every shot.
- On-location photo: existing Overhand repository founders photo.
- All six shared Overhand interview stills remain excluded at Harrison's direction.
- Email and Instagram: original live homepage.

## Design references

- https://www.steveannisdop.com/ — image-led selection, quiet navigation, direct contact.
- https://rinayang.com/ — restrained portfolio presentation, career detail separate from work.

The design is original. No reference-site code or imagery was copied.

## Editing

Supply exact reel and episode/shot selects before adding individual DP credits. Current credits are explicitly at series level. Update video IDs in `portfolio/main.js` and labels/images in `index.html`. YouTube embeds load only after a visitor presses play. A YouTube link provides a fallback if embeds are blocked.

## Verification

Run `npm run build`. For the static Pages configuration, serve the repository root. Check mobile/desktop overflow, internal anchors, dialog open/close/Escape/focus restoration, and expandable experience rows. Verify deployment using the Cloudflare check on the pushed commit.

## Typography revision

Syne 600/700 for display text and Manrope 400/500 for body text. Fonts are self-hosted; OFL licenses are included. UFC copy rewritten to describe concrete shooting work.

## User-selected episodes

- Embedded: https://www.youtube.com/watch?v=yn77Z3wvejM — UFC 319 Embedded: Vlog Series - Episode 2. Credit: Director of Photography.
- Countdown: https://www.youtube.com/watch?v=1rhA2WVNWHM — UFC 326 Countdown - Full Episode. Credit: Videographer.
- The Walk video unchanged. Credit: Videographer.
