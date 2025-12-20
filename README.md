# Veynor - Learning Platform

Veynor is a modern learning platform that blends expert-led roadmaps, AI guidance, and gamified consistency tracking to help learners grow new skills. The UI is built with React, Tailwind CSS, and Framer Motion for an animated, high-contrast experience.

## Highlights
- AI Mentor chatbot backed by OpenAI for personalized guidance and answers.
- Curated learning roadmaps (Web Dev, Data Science) that unlock resources as streaks grow.
- Consistency tracker with daily streaks, countdowns, and calendar view.
- Achievement badges and unlockable skills with celebratory micro-interactions.
- Responsive layout with animated hero, expert highlights, and rich gradients.

## Tech Stack
- Frontend: React 19, React Router, Framer Motion, Tailwind CSS, Lucide icons.
- Backend: Node.js + Express with OpenAI API (REST endpoint at `/api/ask`).
- Tooling: CRA build pipeline, Axios for API calls, Netlify-ready static build.

## Project Structure
```
veynor_app/
	src/            # React app (pages, components, assets)
	veynor-backend/ # Express API for the AI mentor
	public/         # CRA static assets
	build/          # Production build output
```

## Prerequisites
- Node.js 18+ and npm.
- OpenAI API key for the AI mentor endpoint.

## Quick Start (frontend)
1) Install deps
```
npm install
```
2) Run dev server
```
npm start
```
The app runs on http://localhost:3000.

## Backend (AI Mentor)
1) Install deps
```
cd veynor-backend
npm install
```
2) Configure environment
```
OPENAI_API_KEY=your_api_key_here
PORT=5000  # optional
```
Create a `.env` file in `veynor-backend/` with the values above.
3) Start the server
```
node index.js
```
The React client calls the mentor at `http://localhost:5000/api/ask`.

## Available Scripts (frontend)
- `npm start` – start the dev server.
- `npm run build` – create a production build in `build/`.
- `npm test` – run CRA tests.

## Deployment
- Static hosting (Netlify, Vercel, S3, etc.): run `npm run build` and deploy the `build/` folder.
- Ensure the backend is deployed separately (Render, Railway, Fly.io, etc.) and update the mentor endpoint URL in `AIMentor` if it changes.

## Publishing to GitHub
1) Create a new repo on GitHub named `Veynor-learning-platform` (GitHub replaces spaces with hyphens).
2) From the project root:
```
git init
git add .
git commit -m "chore: init Veynor learning platform"
git branch -M main
git remote add origin https://github.com/<your-user>/Veynor-learning-platform.git
git push -u origin main
```
3) Add a short description and topics like `learning-platform`, `react`, `ai-mentor`, `tailwind` on GitHub.

## Roadmap Ideas
- Save mentor conversations per user and sync across devices.
- Add progress analytics with charts and weekly goals.
- Add authentication and user profiles with cloud storage for streaks and badges.

