## v0.0.1-mvp — First Release

Release date: 2025-08-09

Channel: Public preview (MVP demo)

### TL;DR
- **Scope**: Web MVP showcasing attention awareness, gentle recall nudges, and a supportive content layer
- **Build**: Static Next.js export, deployable to GitHub Pages
- **Data**: Local JSON datasets that simulate behaviors and content
- **Out of scope**: No backend, accounts, analytics, or push notifications yet

### Highlights
- **Attention tracking (simulated)**: Detect distracting patterns and gently warn about attention drifts
- **Focus Mode**: Reduce noise for a selected duration to support deep work
- **Recall nudges**: Courteous prompts when looping in short‑video feeds
- **Alternatives on distraction**:
  - 1‑minute breathing exercise
  - 3‑minute micro‑content (book‑style summary)
  - 1‑minute useful fact / mini habit
  - 1‑minute gratitude prompt
- **Notification banners/toasts**: Motivational and awareness‑raising micro‑messages
- **Daily micro‑content cards**: Attention‑friendly knowledge cards

### What’s included
- UI and interaction patterns representing the product vision
- Local datasets powering the demo experience
- A static export pipeline for frictionless hosting

### Technical notes
- **Framework**: Next.js 15 (App Router) with `output: "export"` and `trailingSlash: true`
- **UI**: Tailwind CSS 4, Radix UI Primitives, Lucide Icons
- **Motion & notifications**: Framer Motion, Sonner
- **Hosting**: GitHub Pages via GitHub Actions
- **Base path**: `NEXT_PUBLIC_BASE_PATH` for subpath deployments (e.g., `/repo-name`)
- **Data sources**:
  - `data/distraction-apps.json`
  - `data/micro-contents.json`
  - `data/recall-suggestions.json`

### Installation and usage
Prerequisites: Node.js 20+, npm

```bash
npm ci
npm run dev
# visit http://localhost:3000
```

Build a static export:

```bash
# optional for project pages
export NEXT_PUBLIC_BASE_PATH=/odaryum-mvp
npm run build
# output → ./out
```

More details are available in `README.md` (setup, structure, and configuration).

### Deployment (GitHub Pages)
- The repository includes a workflow that builds and deploys on push to `main`
- `NEXT_PUBLIC_BASE_PATH` is auto‑resolved based on repository type
- For step‑by‑step guidance, see [`docs/github_page_deploy.md`](./github_page_deploy.md)

### Known limitations (by design in MVP)
- No native (device‑level) application tracking; this is simulated for the web demo
- No authentication, analytics, or push notifications
- No data persistence across reloads; personalization is not yet implemented
- Not optimized as a PWA; mobile behavior may vary by device and browser

### Privacy and data protection
- Designed with KVKK/GDPR principles in mind (data minimization, anonymization)
- The web MVP does not collect or store personal data

### Roadmap (next)
- Device‑level attention tracking (mobile: Flutter)
- Configurable distraction lists and escalation thresholds
- Backend (Firebase or Java + MongoDB), analytics, and push notifications (FCM)
- AI‑assisted suggestions and content recommendations
- Data export and deletion controls

### Breaking changes
None in this initial release.

### Acknowledgements
Built with Next.js, Tailwind CSS, Radix, Framer Motion, Sonner, and GitHub Actions.


