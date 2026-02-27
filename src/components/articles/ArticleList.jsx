import { ArticleCard } from './ArticleCard';

export function ArticleList({ articles, viewType }) {
  console.log('fetched articled >>>>', articles);
  return (
    <section className="article-list-main">
      {/* <h2>Article List</h2> */}
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} viewType={viewType} />;
      })}
    </section>
  );
}
