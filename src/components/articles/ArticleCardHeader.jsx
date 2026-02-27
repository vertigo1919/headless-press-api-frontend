import { formatDistanceToNowStrict } from 'date-fns';
import { Link } from 'react-router-dom';

// I still need to add share functionality to more button

export function ArticleCardHeader({ article, viewType }) {
  const articlePath = `/p/${article.topic}/comment/${article.article_id}`;

  const timeStamp = formatDistanceToNowStrict(article.created_at)
    .replace(' minutes', 'm')
    .replace(' hours', 'h')
    .replace(' days', 'd')
    .replace(' years', 'y');

  const titleClass = `article-card-header-title ${viewType === 'compact' ? 'article-card-header-title-compact' : ''}`;

  return (
    <header className="article-card-header">
      <div className="article-card-header-meta">
        <div className="article-card-header-topic-image-container">
          <img
            className="article-card-header-topic-image"
            src={article.topic_img_url}
            alt={article.topic}
          ></img>
        </div>
        <span className="article-card-header-topic-name">p/{article.topic}</span>
        <span className="article-card-header-time-stamp">{timeStamp}</span>
        <button className="article-card-header-more-btn" type="button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="5" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="10" cy="15" r="2" />
          </svg>
        </button>
      </div>
      <Link to={articlePath} className="article-card-header-title-link">
        <h2 className={titleClass}>{article.title}</h2>
      </Link>
    </header>
  );
}
