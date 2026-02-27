export function ArticleCardBody({ article, viewType }) {
  const body = article.body;

  const isLong = body.length > 350;

  const articlePreview = isLong ? body.slice(0, 350).trim() + '...' : body;

  return (
    <div className="article-card-body">
      {viewType === 'extended' && <p className="article-card-body-text">{articlePreview}</p>}
    </div>
  );
}
