export function ArticleCardBody({ article, viewType }) {
  const body = article.body;

  const isLong = body.length > 350;

  const articlePreview = isLong ? body.slice(0, 160).trim() + '...' : body;

  return (
    <div className="article-card-body">
      <p className="article-card-body-text">{articlePreview}</p>
    </div>
  );
}
