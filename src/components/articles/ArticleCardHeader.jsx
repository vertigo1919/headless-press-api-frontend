export function ArticleCardHeader({ article }) {
  // I may need to import as a prop viewType laterdown the line
  const timeStamp = article.created_at;

  return (
    <header className="article-card-header-main">
      <img
        className="article-card-header-topic-image"
        src={article.topic_img_url}
        alt={article.topic}
      ></img>
      <span className="article-card-header-topic-name">p/{article.topic}</span>
      <span className="article-card-header-time-stamp">p/{timeStamp}</span>
      <div>{article.title}</div>
    </header>
  );
}
