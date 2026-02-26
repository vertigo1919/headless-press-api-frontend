import { VoteControl } from '../shared/VoteControl';
import { CommentLabel } from '../comments/CommentLabel';

export function ArticleFooter() {
  return (
    <footer className="article-footer-main">
      <h3>Article Footer</h3>
      <VoteControl />
      <CommentLabel />
    </footer>
  );
}
