# PressIt — Planning Documentation

> 🎨 [View Interactive Prototype on Figma](https://www.figma.com/proto/ckT1daSU4xjWEM9DCPLZRM/Headless-Press-API-front-end?node-id=0-1&t=GSGX4uLt2lVfTIgt-1)

## Logo

|                Full Logo                 |                       Minimal                       |
| :--------------------------------------: | :-------------------------------------------------: |
| ![Full](/public/assets/pressIt_logo.png) | ![Minimal](/public/assets/pressIt_logo_minimal.png) |

A retro-styled robot operating a printing press, surrounded by upvote/downvote arrows. The minimal version is used as the in-app avatar inside the search bar and as the favicon to be easier to recognise at smaller size.

---

## Colour Palette

![Colour Palette](/planning/assets/pressit_palette.png)

| Name         | Hex       | Usage                         |
| ------------ | --------- | ----------------------------- |
| Press Orange | `#E75A2D` | Primary accent, OP badge      |
| Press Navy   | `#204056` | Logo border, dark UI elements |
| Press Cream  | `#FFE7AE` | Warm highlights, hover states |
| Black        | `#000000` | App background                |
| Off-white    | `#F6F0E2` | Other                         |
| White        | `#FFFFFF` | Pure white text, icons        |

## Typography

**Plus Jakarta Sans** — single font family across UI.

## Routes

| Route                  | View                      | API                                                                        |
| ---------------------- | ------------------------- | -------------------------------------------------------------------------- |
| `/`                    | Home feed                 | `GET /api/articles?sort_by=&order=`                                        |
| `/p/:topic`            | Topic article list        | `GET /api/articles?topic=:topic`                                           |
| `/p/:article_id/:slug` | Single article + comments | `GET /api/articles/:article_id` + `GET /api/articles/:article_id/comments` |
| `/p/:article_id/:slug` | Post comment              | `POST /api/articles/:article_id/comments`                                  |
| `/p/:article_id/:slug` | Delete comment            | `DELETE /api/comments/:comment_id`                                         |
| `/p/:article_id/:slug` | Vote on article           | `PATCH /api/articles/:article_id`                                          |
| `/u/:username`         | User's articles           | `GET /api/articles?author=:username`                                       |

> **Note:** `GET /api/topics` is called on app mount to populate the hamburger menu topic drawer — not tied to a specific route.

> **Note:** The `:slug` in `/p/:article_id/:slug` is not stored in the database. It is generated client-side in React from the article title.

## Screens & Features

### 1. Home Feed `/`

![Home](/planning/assets/screens/1_home.png)

- **Search bar** with PressIt logo
- **Hamburger menu** — opens left drawer listing all topics
- **Sort controls** — New, Most Commented, Least Commented, Most Votes, Least Votes
- **View toggle** — extended (title + excerpt) or compact (title only); reflected in URL
- **Article cards** — topic tag, time since posted, title, excerpt, vote count, comment count
- **Topic icons** alongside topic tag, link to `/p/:topic`
- **Comment count button** — navigates to article comment section
- **Dot menu** — share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home (`/`) and GitHub

---

### 2. Single Article `/p/:article_id/:slug`

![Article](/planning/assets/screens/2_article.png)

- **Article header** — topic icon, topic link, author, time since posted
- **Full article body**
- **Vote buttons** — upvote/downvote, one vote per session
- **Comments** — username, orange OP badge (if commenter is article author), time, vote buttons
- **Delete button** — visible only on comments by the logged-in user
- **"Join the conversation" bar** — sticky bottom; expands to text input with Cancel and Post
- **Dot menu** — share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home and GitHub

---

### 3. Topic Page `/p/:topic`

![Topic](/planning/assets/screens/3_topic.png)

- **Topic header** — topic avatar and topic name
- **Sort controls** — same options as home feed
- **View toggle** — extended / compact
- **Article cards** — username, time, title, excerpt, votes, comments
- **Dot menu** share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home and GitHub

---

### 4. User Page `/u/:username`

![User](/planning/assets/screens/4_user.png)

- **User header** — avatar, display name, `u/username`, post count
- **Article list** — all articles by this user in card format
- **Article cards** — topic tag, time, title, excerpt, votes, comments
- **Back button** — returns to previous page
- **Dot menu** share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home and GitHub

---

## Components

```
App
├── Wrapper ?
├── Navbar (changes layout depending on route — especially on article page)
│   ├── HamburgerMenu (→ TopicList )
│   ├── SearchBar
│   └── UserAvatar → /u/:username
├── Routes
│   ├── / → HomePage
│   │   ├── FeedControls
│   │   │   ├── SortControls
│   │   │   └── ViewToggle
│   │   └── ArticleList → map ArticleCard  ← display only, links to article
│   ├──  → TopicPage → /p/:topic
│   │   ├── TopicHeader
│   │   ├── FeedControls
│   │   │   ├── SortControls
│   │   │   └── ViewToggle
│   │   └── ArticleList → map ArticleCard  ← display only, links to article
│   ├── ArticlePage → /p/:article_id/:slug
│   │   ├── ArticleHeader
│   │   ├── ArticleBody
│   │   ├── VoteButtons
│   │   ├── CommentList → map Comment
│   │   │   ├── VoteButtons
│   │   │   └── DeleteButton (if author equals currentUser)
│   │   └── CommentComposer (sticky)
│   │       ├── collapsed: "Join the conversation" bar
│   │       └── expanded: Input + Cancel + Post ← conditional on click
│   └── /u/:username → UserPage
│       ├── UserHeader
│       └── ArticleList → map ArticleCard
└── Footer
```

## States

To finish

- currentUser
- isLoading

add others, organised by component

## Nice to have

- User authentication (currently just hard-coded in constants file with currentUser equals "sampleUser" ? or a state?). Look into UseContext
