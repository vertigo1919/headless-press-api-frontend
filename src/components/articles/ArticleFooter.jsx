import { VoteControl } from '../shared/VoteControl';
import { CommentLinkButton } from '../comments/CommentLinkButton';

export function ArticleFooter({ article }) {
  return (
    <footer className="article-footer-main">
      <VoteControl article={article} />
      <CommentLinkButton article={article} />
    </footer>
  );
}
