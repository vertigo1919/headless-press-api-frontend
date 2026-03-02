import { formatDistanceToNowStrict } from 'date-fns';
import { useShare } from '../../hooks/useShare';
// import { Link } from 'react-router-dom';

export function ArticleHeader({ article }) {
  const timeStamp = formatDistanceToNowStrict(article.created_at)
    .replace(' minutes', 'm')
    .replace(' hours', 'h')
    .replace(' days', 'd')
    .replace(' years', 'y');

  // I'm using my custom hook to obtain here a handle share function that I can call
  // when share button is clicked
  const { handleShare } = useShare();

  return (
    <header className="article-header">
      <div className="article-header-meta">
        <div className="article-header-user-image-container">
          <img
            className="article-header-user-image"
            src={article.author_avatar_url}
            alt={article.author}
          ></img>
        </div>
        <div className="article-header-topic-name">p/{article.topic}</div>
        <span className="article-header-user-name"> u/{article.author} </span>
        <span className="article-header-separator"> · </span>
        <span className="article-header-time-stamp">{timeStamp}</span>

        <button
          className="article-header-more-btn"
          type="button"
          onClick={() => handleShare(article.title, window.location.href)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* math for share icon */}
            <circle cx="18" cy="5" r="3">
              {' '}
            </circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>

      <h1 className="article-header-title">{article.title}</h1>
    </header>
  );
}
