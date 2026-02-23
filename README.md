<p align="center">
  <img src="./public/assets/pressIt_logo.png" alt="PressIt logo" width="120" />
</p>

<p align="center">A Reddit-inspired news aggregator — React frontend for the Headless Press API</p>

<p align="center">
  <a href="https://www.figma.com/proto/ckT1daSU4xjWEM9DCPLZRM/Headless-Press-API-front-end?node-id=0-1&t=GSGX4uLt2lVfTIgt-1">📱 Prototype</a> ·
  <a href="./design/DESIGN.md">🎨 Design Docs</a> ·
  <a href="https://PLACEHOLDER.netlify.app">🚀 Live Demo</a> ·
  <a href="https://github.com/vertigo1919/headless-press-api"> 🌐 Backend Repo</a>
</p>

---

## Overview

PressIt is a news aggregator built with React. Users can browse articles across topics, vote on content, read and post comments, and explore articles by author. It consumes the [Headless Press API](https://github.com/vertigo1919/headless-press-api) — a custom RESTful news API built with Node.js and Express.

## Screens

|                  Home Feed                  |                      Article                      |                     Topic                     |                    User                     |
| :-----------------------------------------: | :-----------------------------------------------: | :-------------------------------------------: | :-----------------------------------------: |
| ![Home](./design/assets/screens/1_home.png) | ![Article](./design/assets/screens/2_article.png) | ![Topic](./design/assets/screens/3_topic.png) | ![User](./design/assets/screens/4_user.png) |

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — typography
- [Vite](https://vitejs.dev/) — build tool

## Routes

| Path                   | View                                    |
| ---------------------- | --------------------------------------- |
| `/`                    | Home feed — all articles, sortable      |
| `/p/:topic`            | Topic page — articles filtered by topic |
| `/p/:article_id/:slug` | Single article + comments               |
| `/u/:username`         | User profile — articles by author       |

## Getting Started

### Prerequisites

- Node.js v18+
- Backend API running — see [Headless Press API](https://github.com/vertigo1919/headless-press-api)

### Installation

## In progress

© 2026 PressIt — Andrea Bellini
