import { ArticleCardBody } from './ArticleCardBody';
import { ArticleCardHeader } from './ArticleCardHeader';
import { ArticleCardFooter } from './ArticleCardFooter';

export function ArticleCard() {
  return (
    <article className="article-card-main">
      <h3>Article Card</h3>
      <ArticleCardHeader />
      <ArticleCardBody />
      <ArticleCardFooter />
    </article>
  );
}
