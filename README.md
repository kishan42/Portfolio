# Webfolio (Next.js)

Personal portfolio built with Next.js and React. Includes hero, portfolio cards, skills, testimonials, blog carousel, and contact/footer.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- GSAP animations
- Swiper sliders

## Getting Started
1) Install deps: `npm install`
2) Dev server: `npm run dev` (default http://localhost:3000)
3) Lint: `npm run lint`
4) Production build: `npm run build` then `npm start`

## Deploying to Vercel
- Push this repo to GitHub.
- In Vercel, import the repo (Framework: Next.js, install command: `npm install`, build command: `npm run build`).
- If the install cache causes issues, use “Clear build cache & redeploy.”

## Assets
- Images live under `public/assets/...` (hero: `public/assets/imgs/header/p0.jpg`, about: `public/assets/imgs/header/p2.jpg`, portfolio: `public/assets/imgs/works/1/1-7.png`).
- Adjust paths in components if you rename assets.

## Notes
- Node 18+ recommended (matches Vercel default).
- `node_modules`, `.next`, `out`, `.vercel`, and local env files are git-ignored.
- For consistent card sizes (blog/testimonials), layout uses flex with min-heights and clamped text.
