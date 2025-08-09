<div align="center">

# Odaryum — Digital Attention & Focus Assistant (MVP)

Detect, recover, and reinforce your focus in the age of distraction.


</div>

---

Odaryum (from Turkish "odak alanın, zihnin" ≈ "your focus space, your mind") helps individuals notice digital distraction, return from momentary attention slips, and strengthen sustained focus with supportive micro‑content.

This repository contains the web MVP built with Next.js. It demonstrates the product vision, interaction patterns, and content layer that will power the full mobile experience.

### Table of contents
- Overview
- Core features
- Target audience
- Architecture and tech stack
- Getting started
- Configuration
- Project structure
- Data and content
- Roadmap
- Privacy and data protection
- Deployment (GitHub Pages)
- Contributing

## Overview
Odaryum enables mindful management of attention time. Instead of drifting into attention‑sucking feeds, users are gently nudged back and offered short, meaningful alternatives that support wellbeing and personal growth.

## Core features
- **Attention tracking**: Detects distracting patterns and gently warns when entering attention‑draining zones (e.g., short‑form feeds). In the web MVP this is simulated and driven by local data.
- **Focus Mode**: Temporarily silences nudges, reduces visual noise, and helps maintain a deep‑work state for a selected duration.
- **Recall nudges**: When users spend extended time in short‑video loops (Shorts, Reels, etc.), a courteous prompt asks: “You planned a quick look. Want to come back now?”
- **Alternative actions**: When distraction is detected, offer three quick options:
  - 1‑minute breathing exercise
  - 3‑minute micro‑content (e.g., book summary)
  - 1‑minute useful fact or mini habit
  - 1‑minute gratitude prompt
- **Notification system**: Light, motivating, awareness‑raising messages at key moments, e.g., “It seems your attention drifted”, “Climb out of the rabbit hole”, “Pay attention — time is precious”.
- **Content layer**: Daily, attention‑friendly “knowledge cards” that create a positive learning loop.

## Target audience
- University students, freelancers, and corporate professionals
- Individuals seeking to reduce social media overuse
- Users interested in mindfulness and personal development

## Architecture and tech stack
This repository focuses on the web MVP. The long‑term product includes native mobile apps and a backend.

- **This repo (Web MVP)**
  - Framework: Next.js 15 (App Router, static export)
  - UI: Tailwind CSS 4, Radix UI Primitives, Lucide Icons
  - Animation & notifications: Framer Motion, Sonner
  - Build: Static export for GitHub Pages (with `basePath` support)

- **Planned (Mobile & Backend)**
  - Mobile: Flutter (iOS + Android)
  - Backend: Dart + Firebase (Auth, Analytics, Push) or Java + MongoDB
  - Notifications: Firebase Cloud Messaging (FCM)
  - AI (optional): Behavioral suggestions and content recommendations

## Getting started
Prerequisites: Node.js 20+, npm

Install dependencies and start the dev server:

```bash
npm ci
npm run dev
```

Build a static export:

```bash
npm run build
# Output is generated in ./out
```

Lint code:

```bash
npm run lint
```

Open `http://localhost:3000` in your browser during development.

## Configuration
This project supports static hosting at a subpath via `NEXT_PUBLIC_BASE_PATH`:

- For root hosting (e.g., custom domain or `username.github.io`): leave empty
- For project pages (e.g., `/repo-name`): set to `"/repo-name"`

Example (build):

```bash
NEXT_PUBLIC_BASE_PATH=/odaryum-mvp npm run build
```

## Project structure
Key folders and files:

```
odaryum-mvp/
  data/                     # Local data powering the MVP content and behavior
    distraction-apps.json
    micro-contents.json
    recall-suggestions.json
  src/
    app/                    # Next.js App Router (layout, pages, styles)
    components/
      attention/            # Attention tracking helpers and UI
      focus/                # Focus Mode experience
      notifications/        # In-app banners/toasts
      content/              # Micro-content grid/cards
      recall/               # Gentle recall prompts
      ui/                   # Reusable UI primitives (button, card, dialog, ...)
    lib/                    # Utilities (e.g., classNames)
  public/                   # Static assets (SVGs, icons)
  next.config.ts            # Static export + basePath
```

## Data and content
The MVP ships with sample datasets to simulate behavior and content:

- `data/distraction-apps.json`: List of apps/patterns considered distracting
- `data/micro-contents.json`: Short, daily knowledge cards
- `data/recall-suggestions.json`: Gentle recall prompts and alternatives

These are read on the client to power the demo experience. In production, these will be provided by the backend and personalized.

## Roadmap
- MVP
  - Escalating protection: 10 min soft nudge → 30 min stronger nudge with vibration → 60 min hard modal
  - Daily micro‑content cards and quick alternatives
  - Basic analytics for anonymous usage patterns
- Post‑MVP
  - Device‑level app tracking (mobile)
  - User‑configurable distraction list and thresholds
  - Push notifications via FCM
  - AI‑assisted suggestions based on attention behavior
  - Data export and deletion controls

## Privacy and data protection
Odaryum is designed with privacy in mind:

- KVKK and GDPR alignment with data minimization and anonymization
- Clear consent flows for permissions
- No unnecessary personal data stored in the MVP web demo

## Deployment (GitHub Pages)
This project is preconfigured for static export and GitHub Pages via GitHub Actions:

- `next.config.ts` uses `output: "export"` and `trailingSlash: true`
- The workflow auto‑sets `NEXT_PUBLIC_BASE_PATH` based on repository type
- On push to `main`, the site is built and deployed to Pages

See `docs/github_page_deploy.md` for details.

## Contributing
Contributions are welcome. Please open an issue to discuss significant changes or feature proposals. For small improvements, feel free to submit a pull request.

---

© Odaryum. All rights reserved. License to be defined.
