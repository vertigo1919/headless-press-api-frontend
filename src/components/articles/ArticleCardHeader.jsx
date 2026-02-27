import { formatDistanceToNowStrict } from 'date-fns';

export function ArticleCardHeader({ article }) {
  // I may need to import as a prop viewType laterdown the line
  const timeStamp = formatDistanceToNowStrict(article.created_at)
    .replace(' minutes', 'm')
    .replace(' hours', 'h')
    .replace(' days', 'd')
    .replace(' years', 'y');

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
      </div>
      <h2>{article.title}</h2>
    </header>
  );
}
