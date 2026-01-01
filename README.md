🌟 Veynor — AI-Powered Learning & Consistency Platform

Veynor is a modern, learner-first platform designed to help individuals build real skills with consistency, not just consume content.
It combines expert-curated learning roadmaps, an AI mentor, and gamified habit tracking to guide users from confusion → clarity → competence.

Unlike traditional learning platforms that stop at content delivery, Veynor focuses on execution, daily progress, and long-term skill mastery.

🚀 Vision & Philosophy

“Skills don’t grow from motivation. They grow from systems.”

Veynor is built on three core principles:

Guided Learning – Clear roadmaps remove decision fatigue.

AI Assistance – Instant, contextual help when learners are stuck.

Consistency > Intensity – Daily streaks beat short bursts of effort.

The platform is ideal for students, self-learners, developers, and early-stage professionals who want structured growth without overwhelm.

✨ Key Features
🤖 AI Mentor

Conversational AI mentor powered by OpenAI

Answers questions, explains concepts, and suggests next steps

Context-aware guidance aligned with the selected roadmap

Backend REST API (/api/ask) for clean separation of concerns

🗺️ Learning Roadmaps

Skill-based, expert-curated roadmaps (e.g., Web Development, Data Science)

Step-by-step progression with unlockable resources

Designed to reduce “what should I learn next?” anxiety

🔥 Consistency Tracker

Daily learning streaks with visual feedback

Countdown timers and calendar-based progress view

Encourages habit formation instead of passive learning

🏆 Gamification & Motivation

Achievement badges and milestone rewards

Skill unlocks tied to streak completion

Smooth micro-interactions and celebratory animations

🎨 Modern, Responsive UI

High-contrast, accessible design

Motion-based feedback using Framer Motion

Fully responsive across desktop, tablet, and mobile

🧠 Tech Stack
Frontend

React 19

React Router

Tailwind CSS

Framer Motion

Lucide Icons

Axios

Backend

Node.js

Express.js

OpenAI API

REST-based architecture

Tooling & Deployment

CRA build pipeline

Netlify / Vercel compatible static build

Backend deployable on Render, Railway, Fly.io, etc.

📁 Project Structure
veynor_app/
├── src/                # React source (components, pages, hooks)
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.js
│
├── public/             # Static assets
├── build/              # Production build output
│
├── veynor-backend/     # Express backend for AI Mentor
│   ├── index.js
│   └── routes/
│
└── README.md

✅ Prerequisites

Node.js 18+

npm

OpenAI API key (for AI Mentor functionality)

⚡ Quick Start — Frontend
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm start


The app will be available at:
👉 http://localhost:3000

🤖 Backend Setup — AI Mentor
1️⃣ Install backend dependencies
cd veynor-backend
npm install

2️⃣ Configure environment variables

Create a .env file inside veynor-backend/:

OPENAI_API_KEY=your_api_key_here
PORT=5000

3️⃣ Start the backend server
node index.js


The AI mentor endpoint will be available at:
👉 http://localhost:5000/api/ask

📜 Available Scripts (Frontend)
Command	Description
npm start	Start development server
npm run build	Create production build
npm test	Run tests
🌍 Deployment Guide
Frontend

Run npm run build

Deploy the build/ folder to:

Netlify

Vercel

AWS S3

Any static hosting provider

Backend

Deploy veynor-backend/ separately

Supported platforms:

Render

Railway

Fly.io

Update the AI Mentor API URL in the frontend if needed

📦 Publishing to GitHub
git init
git add .
git commit -m "chore: initialize Veynor learning platform"
git branch -M main
git remote add origin https://github.com/<your-username>/Veynor-learning-platform.git
git push -u origin main


Recommended GitHub topics:

learning-platform
react
ai-mentor
tailwindcss
edtech
productivity

🛣️ Future Roadmap

🔐 User authentication & profiles

☁️ Cloud sync for streaks, badges, and progress

📊 Learning analytics dashboard (weekly/monthly insights)

🧠 Personalized AI-generated roadmaps

📱 PWA & mobile-first optimizations

🤝 Community & peer accountability features

🤝 Contributing

Contributions are welcome!
If you have ideas around learning science, UX, AI guidance, or scalability — feel free to open an issue or submit a pull request.

📄 License

This project is licensed under the MIT License.
You’re free to use, modify, and distribute it.

⭐ Final Note

Veynor is not just a learning app — it’s a system for building skills that last.
If this project helped or inspired you, consider giving it a ⭐ on GitHub.
