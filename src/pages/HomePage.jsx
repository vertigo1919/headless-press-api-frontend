import { FeedControls } from '../components/articles/FeedControls';
import { ArticleList } from '../components/articles/ArticleList';

export function HomePage() {
  return (
    <div className="page home-page">
      <FeedControls />
      <ArticleList />
    </div>
  );
}
