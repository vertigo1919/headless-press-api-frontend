<p align="center">
  <img src="./public/assets/pressIt_logo.png" alt="PressIt logo" width="350" />
</p>

<p align="center">A Reddit-inspired news aggregator — React frontend for the Headless Press API</p>

<p align="center">
  <a href="https://www.figma.com/proto/ckT1daSU4xjWEM9DCPLZRM/Headless-Press-API-front-end?node-id=0-1&t=GSGX4uLt2lVfTIgt-1">📱 Prototype</a> ·
  <a href="./planning/planning.md">💡 Planning Docs</a> ·
  <a href="https://PLACEHOLDER.netlify.app">🚀 Live Demo</a> ·
  <a href="https://github.com/vertigo1919/headless-press-api"> 🌐 Backend Repo</a>
</p>

---

## Overview

PressIt is a news aggregator built with React. The goal was to recreate the core Reddit functionalities while keeping the UI minimal while practicing React. Users can browse articles across topics, vote on content, read and post comments, and explore articles by author.It connects to my [Headless Press API](https://github.com/vertigo1919/headless-press-api) (Node + Express), which handles articles, topics, comments and voting.

## UI Design

For full details see <a href="./planning/planning.md">💡 planning docs</a> as well as the 🎨 [Interactive Prototype on Figma](https://www.figma.com/proto/ckT1daSU4xjWEM9DCPLZRM/Headless-Press-API-front-end?node-id=0-1&t=GSGX4uLt2lVfTIgt-1)

| Home                                                           | Article                                                           | Topic                                                           | User                                                           |
| -------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------- |
| <img src="./planning/assets/screens/1_home.png" width="260" /> | <img src="./planning/assets/screens/2_article.png" width="260" /> | <img src="./planning/assets/screens/3_topic.png" width="260" /> | <img src="./planning/assets/screens/4_user.png" width="260" /> |

## Routes

| Path                   | View                                    |
| ---------------------- | --------------------------------------- |
| `/`                    | Home feed — all articles, sortable      |
| `/p/:topic`            | Topic page — articles filtered by topic |
| `/p/:article_id/:slug` | Single article + comments               |
| `/u/:username`         | User profile (articles by author)       |

## Installation

### Prerequisites

- Node.js v20.19.6 (see `.nvmrc`)

### Setup

1. Clone the frontend repository:

```bash
git clone https://github.com/vertigo1919/headless-press-api-frontend
cd headless-press-api-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env.development.local file in the project root and set the API URL to one of the following:

```env
# Option A — use the hosted API (no backend setup required)
VITE_API_BASE_URL=https://headless-press-api.onrender.com/api
```

```env
# Option B — run the backend locally
# Clone https://github.com/vertigo1919/headless-press-api and follow its setup instructions
VITE_API_BASE_URL=http://localhost:9090/api
```

```env
# Option C — deploy your own backend to a hosting service (e.g. Render, Railway, Fly.io)
# Clone https://github.com/vertigo1919/headless-press-api, deploy it, then set a new env variable on the hosting service you used
VITE_API_BASE_URL=https://[your-app-name].onrender.com/api
```

### Tech Stack

- Runtime: Node.js v20.19.6
- Build Tool: Vite
- UI Library: React v19
- Routing: React Router v7
- Testing: Jest
- Code Quality: ESLint, Prettier, Husky, lint-staged
