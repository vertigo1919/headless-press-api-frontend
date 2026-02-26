import { UserHeader } from '../components/user/UserHeader';
import { ArticleList } from '../components/articles/ArticleList';

export function UserPage() {
  return (
    <section className="user-page-main">
      <h1>User Page</h1>
      <UserHeader />
      <ArticleList />
    </section>
  );
}
