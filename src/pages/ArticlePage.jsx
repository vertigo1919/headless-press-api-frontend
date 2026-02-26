import { ArticleDetail } from '../components/articles/ArticleDetail';
import { CommentsList } from '../components/comments/CommentsList';
import { CommentComposer } from '../components/comments/CommentComposer';

export function ArticlePage() {
  return (
    <section className="article-page-main">
      <h1>Article Page</h1>
      <ArticleDetail />
      <CommentsList />
      <CommentComposer />
    </section>
  );
}
