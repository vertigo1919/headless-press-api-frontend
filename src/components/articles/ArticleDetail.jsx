import { ArticleHeader } from './ArticleHeader';
import { ArticleBody } from './ArticleBody';
import { ArticleFooter } from './ArticleFooter';

export function ArticleDetail() {
  return (
    <article className="article-detail-main">
      <h2>Article Detail</h2>
      <ArticleHeader />
      <ArticleBody />
      <ArticleFooter />
    </article>
  );
}
