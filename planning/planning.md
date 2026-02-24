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
| `/u/:username`         | User's articles           | `GET /api/articles?author=:username` + `GET /api/users/:username`          |

> **Note:** `GET /api/topics` is called on app mount to populate the hamburger menu topic drawer — not tied to a specific route.

> **Note:** The `:slug` in `/p/:article_id/:slug` is not stored in the database. It is generated client-side in React from the article title. I will implement at a later stage.

> **Note:** I want to set up all routes share a common PageLayout component (Navbar + Footer) rendered via a pathless parent route using <Outlet />. Navbar and Footer only load once and persist across navigation.

## Screens & Features

### 1. Home Feed `/`

<table>
<tr>
<td valign="top" width="360">
<img src="/planning/assets/screens/1_home.png" alt="Home" width="350">
</td>
<td valign="top">

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

</td>
</tr>
</table>

### 2. Single Article `/p/:article_id/:slug`

<table>
<tr>
<td valign="top" width="360">
<img src="/planning/assets/screens/2_article.png" alt="Home" width="350">
</td>
<td valign="top">

- **Article header** — topic icon, topic link, author, time since posted
- **Full article body**
- **Vote buttons** — upvote/downvote, one vote per session, uses optimistic rendering
- **Comments** — username, orange OP badge (if commenter is article author), time, vote buttons
- **Delete button** — visible only on comments by the logged-in user, uses optimistic rendering, deletes comment immediately
- **"Join the conversation" bar** — sticky bottom; expands to text input with Cancel and Post.
- **Dot menu** — share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home and GitHub

</td>
</tr>
</table>

### 3. Topic Page `/p/:topic`

<table>
<tr>
<td valign="top" width="360">
<img src="/planning/assets/screens/3_topic.png" alt="Home" width="350">
</td>
<td valign="top">

- **Topic header** — topic avatar and topic name
- **Sort controls** — same options as home feed
- **View toggle** — extended / compact
- **Article cards** — username, time, title, excerpt, votes, comments
- **Dot menu** share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home and GitHub

</td>
</tr>
</table>

### 4. User Page `/u/:username`

<table>
<tr>
<td valign="top" width="360">
<img src="/planning/assets/screens/4_user.png" alt="Home" width="350">
</td>
<td valign="top">

- **User header** — avatar, display name, `u/username`, post count
- **Article list** — all articles by this user in card format
- **Article cards** — topic tag, time, title, excerpt, votes, comments
- **Back button** — returns to previous page
- **Dot menu** share article
- **User icon** (top right) — links to logged-in user profile
- **Footer** — Home and GitHub

</td>
</tr>
</table>

## Components

```text
App
└── BrowserRouter
    └── UserContext (hard-coded sample user, needed to implement delete comment and user page)
        └── Routes
            └── Route (no path) → PageLayout N.B. Navbar & Footer mount once; <Outlet /> renders active page
                ├── Navbar (defines children as TopicList)
                │   ├── Drawer (SOC shows children)
                │   │   └── TopicList (receives topics from NavBar)
                │   ├── SearchBar
                │   └── UserAvatar
                ├── Outlet (this is rendered dynamically based on URL)
                │   ├── Route "/" → HomePage
                │   │   ├── FeedControls
                │   │   │   ├── SortControls
                │   │   │   └── ViewToggle
                │   │   └── ArticleList
                │   │       └──  map ArticleCard  ← display only, links to article
                │   │
                │   ├── Route "/p/:topic" → TopicPage
                │   │   ├── TopicHeader
                │   │   ├── FeedControls
                │   │   └── ArticleList
                │   │       └── map ArticleCard  ← display only, links to article
                │   │
                │   ├── Route "/p/:article_id/:slug" → ArticlePage
                │   │   ├── ArticleHeader
                │   │   ├── ArticleBody
                │   │   ├── VoteButtons
                │   │   ├── CommentList
                │   │   │   └── Comment[]
                │   │   │       ├── VoteButtons
                │   │   │       └── DeleteButton (if author equals currentUser)
                │   │   └── CommentComposer (collapsed vs  expanded state ← conditional on click)
                │   │
                │   └── Route "/u/:username" → UserPage
                │       ├── UserHeader
                │       └── ArticleList
                │           └── map ArticleCard ← display only, links to article
                │
                └── Footer

```

## States

### UserContext

`const currentUser`

### NavBar (always on)

#### API requests: GET topics

- `const [topics, setTopics]= useState([])` > passed down to TopicList
- `const [isLoading, setIsLoading]= useState(false)`
- `const [error, setError]= useState(null)`
- `const [isDrawerOpen, setIsDrawerOpen]= useState(false)`

#### UI: Search bar

- `const [searchInput, setSearchInput]= useState("")`
- `const [searchQuery, setSearchQuery]= useState("")`
- `const [searchResults, setSearchResults]= useState([])`

### HomePage (ROUTE /)

#### API requests: GET articles

- `const [articles, setArticles]= useState([])`
- `const [isLoading, setIsLoading]= useState(false)`
- `const [error, setError]= useState(null)`

#### UI: sorting

- `const [filter, setFilter]= useState({"criteria": "date", "order": "desc"})`
  other values are votes and comments for criteria and asc for order

#### UI: article view type (extended vs compact)

- `const [viewType, setViewType]= useState("extended")`
  other value is "compact"

### ArticlePage (ROUTE /p/:article_id/:slug)

#### API requests: GET article

- `const [article, setArticle]= useState(null)` N.B. object not array
- `const [articleIsLoading, setArticleIsLoading]= useState(false)`
- `const [articleError, setArticleError]= useState(null)`

#### GET comments

- `const [comments, setComments]= useState([])`
- `const [commentsIsLoading, setCommentsIsLoading]= useState(false)`
- `const [commentsError, setCommentsError]= useState(null)`

### VoteButtons Component

- `const [currentVote, setCurrentVote] = useState(0);`
  to allow users to vote just once

#### API requests: PATCH votes

- `const [voteError, setVoteError]= useState(null)`
- no isLoading state because of optimistic rendering

### DeleteButton Component

#### API requests: DELETE comment

- `const [deleteCommentError, setDeleteCommentError]= useState(null)`
- no isLoading state because of optimistic rendering

#### API requests: POST comment

- `const [postCommentError, setPostCommentError]= useState(null)`
- `const [postCommentIsLoading, setPostCommentIsLoading]= useState(false)`

#### UI: comment composer

- `const [isComposerOpen, setIsComposerOpen]= useState(false)`

### TopicPage (ROUTE /p/:topic)

#### API requests: GET articles

- `const [articles, setArticles]= useState([])`
- `const [isLoading, setIsLoading]= useState(false)`
- `const [error, setError]= useState(null)`

#### UI: sorting

- `const [filter, setFilter]= useState({"criteria": "date", "order": "desc"})` other values are votes and comments for criteria and asc for order

#### UI: article view type (extended vs compact)

- `const [viewType, setViewType]= useState("extended")` other value is "compact"

### TopicPage (ROUTE /u/:username)

#### API requests: GET username

- `const [username, setUsername]= useState(null)` N.B. object not array
- `const [usernameIsLoading, setUsernameIsLoading]= useState(false)`
- `const [usernameError, setUsernameError]= useState(null)`

#### GET articles

- `const [articles, setArticles]= useState([])`
- `const [articlesIsLoading, setArticlesIsLoading]= useState(false)`
- `const [articlesError, setArticlesError]= useState(null)`

## Nice to have

- Add slug to article (generated by react or better in database)
- Skeleton loader
- Make ArticleList interactive so you can vote from there too
- Implemen Full User authentication
- Refactor isLoading and Error status with either
  - Single string status: e.g. idle, success, loading, error
  - Or with [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
