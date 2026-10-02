# Harrison Burchett portfolio

Canonical page: `index.html`. Styles, script and media: `portfolio/`.

The existing Cloudflare Pages project is `astro-blog-starter-template` (preview hostname `astro-blog-starter-template-dlp.pages.dev`). GitHub checks confirm automatic deployment from this repository. The root HTML supports the current static Pages configuration. The Astro home route renders the same HTML, with prebuild/predev asset synchronization.

## Content provenance

- Biography: Harrison's supplied professional background; UFC Embedded camera/producer role; prior Kentucky Athletics work; Overhand co-founder.
- UFC Countdown: videographer credit from existing Overhand site biography.
- The Walk: series-level field producer credit listed in public 2026 Sports Emmy nominee search results and corroborated by production colleagues. No award claim is made on the site.
- Official series previews: https://www.youtube.com/watch?v=Ti6DNRFKZKA and https://www.youtube.com/watch?v=bWdgMTECklE . Thumbnails are representative UFC series artwork, not individual Harrison camera frames.
- On-location photo: existing `harrisonburchett/Overhand/assets/img/founders.jpg`; caption follows the source repository.
- All six Overhand interview stills were excluded after Harrison identified them as Jake's/shared work.
- Contact email and Instagram: existing live homepage.

## Design references

- https://www.steveannisdop.com/ — image-led selection, quiet navigation, direct contact.
- https://rinayang.com/ — restrained portfolio presentation, career detail separate from work.

The design is original. No reference-site code or imagery was copied.

## Editing

Supply exact reel and episode/shot selects before adding individual DP credits. Current credits are explicitly at series level. Update video IDs in `portfolio/main.js` and labels/images in `index.html`. YouTube embeds load only after a visitor presses play. A YouTube link provides a fallback if embeds are blocked.

## Verification

Run `npm run build`. For the static Pages configuration, serve the repository root. Check mobile/desktop overflow, internal anchors, dialog open/close/Escape/focus restoration, and expandable experience rows. Verify deployment using the Cloudflare check on the pushed commit.
