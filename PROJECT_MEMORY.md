# Qima Qama Project Memory

## Purpose

Qima Qama is a digital cultural knowledge platform for preserving, organizing, and sharing iTaukei/Fijian cultural knowledge. The project focuses on traditions, language, customs, identity, provinces, stories, cultural protocols, and learning resources.

The long-term goal is to turn the current website into a stronger app-like product: faster, more organized, mobile-friendly, easier to expand, and suitable for future cultural learning features.

## Current Website

The current project is a Next.js app using React, TypeScript, Tailwind CSS, Motion, GSAP, and Lenis. It is deployed on Vercel and connected to GitHub.

Live production site:

https://qimaqama.org

GitHub repository:

https://github.com/retrosilver17/qima-qama

The site includes:

- A homepage with cultural hero content, Fijian imagery, greetings, and links into the main learning areas.
- Traditions pages for cultural practices.
- Provinces pages and a Fiji provinces map asset.
- Definitions/glossary pages for cultural terms.
- Protocol content.
- Na iVosavosa vakaViti language/idiom content.
- Noda iYau cultural resource articles.
- About page.
- Local assets for images, resource thumbnails, maps, icons, and audio.

## Existing Content Areas

### Traditions

This area explains iTaukei cultural practices such as sevusevu, meke, lovo, tabua, yaqona, and other customs. Each tradition can have a detail page with explanation, cultural context, imagery, and meaning.

### Provinces

This area helps users explore Fiji's provinces and their cultural identity. The current site includes province data and a Fiji province SVG map.

### Definitions

This is a glossary-style section for explaining important Fijian cultural terms used across the platform.

### Protocol

This section focuses on cultural etiquette, correct conduct, ceremonial order, and respectful behavior in traditional settings.

### Na iVosavosa vakaViti

This section focuses on Fijian sayings, expressions, meanings, and cultural interpretation.

### Noda iYau

This section contains deeper cultural resource articles about traditional items, customs, leadership, relationships, tabua, yaqona, ceremonies, wedding practices, childbirth customs, colonial leadership, and related topics.

## Design Direction

The design should feel:

- Respectful
- Educational
- Warm
- Cultural
- Clean
- Editorial
- Modern
- Easy to read

The visual identity currently uses a calm light interface with slate, emerald, white, and warm accent colors. Cultural imagery should remain central, but the design should not treat culture as decoration. The content should feel carefully presented and easy to learn from.

## Important Lesson From Current Build

Do not hide core content behind heavy animations.

The previous scroll reveal animation used hidden initial states, which made content feel delayed or missing on refresh. The correct direction is:

- Content must appear immediately on page load.
- Animations should support the experience, not block reading.
- Use lightweight hover/tap/page polish.
- Avoid blur or opacity-based reveal effects for important content.
- Performance and trust matter more than decorative motion.

## Recent Work Completed

The homepage animation system was adjusted so content remains visible immediately on load. The reveal wrapper now avoids hiding content before JavaScript runs. Cards still have small smooth hover/tap interactions.

Recent commits include:

- `385e9ca Add smoother homepage animations`
- `9a4f74d Tune homepage reveal performance`
- `0c25071 Keep homepage content visible on load`

The latest version was pushed to GitHub and deployed to Vercel production.

## Next Goal

Create a new app folder/project and transfer or rebuild Qima Qama into a stronger app-like structure.

The new app should keep the same mission and content, but improve:

- Mobile navigation
- Content structure
- Loading speed
- Search and discovery
- Layout consistency
- Typography scale
- App-like interactions
- Accessibility
- Future maintainability

## Suggested New App Structure

Potential sections:

- Home dashboard or discovery page
- Traditions library
- Tradition detail pages
- Provinces explorer
- Province detail pages
- Definitions/glossary
- Idioms and language section
- Protocol guide
- Noda iYau resources/articles
- About page
- Search page
- Optional saved/bookmarked content
- Optional admin/content editing system later

## Transfer Priorities

Preserve and reuse:

- Qima Qama name and mission
- Existing cultural data
- Existing article/resource content
- Existing images and thumbnails
- Fiji province map asset
- Glossary/definitions structure
- Traditions structure
- Noda iYau article structure
- Calm emerald/slate visual identity
- Respectful cultural learning tone

Improve:

- Mobile responsiveness
- Navigation clarity
- Page loading behavior
- Search/filtering
- Content organization
- Image optimization
- Reusable components
- Accessibility
- Performance

## Product Vision

Qima Qama should become a modern cultural knowledge app for iTaukei/Fijian heritage. It should preserve the educational and cultural purpose of the existing site while becoming cleaner, faster, easier to navigate, and ready to grow into a full cultural learning platform.
