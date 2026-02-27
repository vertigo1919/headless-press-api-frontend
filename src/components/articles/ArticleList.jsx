import { ArticleCard } from './ArticleCard';

export function ArticleList({ articles }) {
  console.log('fetched articled >>>>', articles);
  return (
    <section className="article-list-main">
      <h2>Article List</h2>
      <ArticleCard />
    </section>
  );
}
