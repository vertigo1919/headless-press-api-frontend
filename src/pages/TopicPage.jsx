import { FeedControls } from '../components/articles/FeedControls';
import { ArticleList } from '../components/articles/ArticleList';
import { TopicHeader } from '../components/topics/TopicHeader';

export function TopicPage() {
  return (
    <section className="topic-page-main">
      <h1>Topic Page</h1>
      <TopicHeader />
      <FeedControls />
      <ArticleList />
    </section>
  );
}
