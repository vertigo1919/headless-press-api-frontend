import { FeedControls } from '../components/articles/FeedControls';
import { ArticleList } from '../components/articles/ArticleList';

export function HomePage() {
  return (
    <section className="home-page-main">
      <h1>Home Page</h1>
      <FeedControls />
      <ArticleList />
    </section>
  );
}
