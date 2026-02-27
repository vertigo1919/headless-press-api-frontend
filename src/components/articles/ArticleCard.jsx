import { ArticleCardBody } from './ArticleCardBody';
import { ArticleCardHeader } from './ArticleCardHeader';
import { ArticleCardFooter } from './ArticleCardFooter';

export function ArticleCard({ article, viewType }) {
  return (
    <article className="article-card-main">
      {/* <h3>Article Card</h3> */}
      <ArticleCardHeader article={article} viewType={viewType} />
      <ArticleCardBody article={article} viewType={viewType} />
      <ArticleCardFooter article={article} viewType={viewType} />
    </article>
  );
}
