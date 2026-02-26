import { FeedControls } from '../components/articles/FeedControls';
import { ArticleList } from '../components/articles/ArticleList';
import { TopicsHeader } from '../components/topics/TopicsHeader';

export function TopicPage() {
  return (
    <section className="topic-page-main">
      <TopicsHeader />
      <FeedControls />
      <ArticleList />
    </section>
  );
}
