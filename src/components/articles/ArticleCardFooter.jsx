import { VoteDisplay } from '../shared/VoteDisplay';
import { CommentLinkButton } from '../comments/CommentLinkButton';

export function ArticleCardFooter() {
  return (
    <footer className="article-card-footer-main">
      <h3>Article Card Footer</h3>
      <menu>
        <VoteDisplay /> <CommentLinkButton />
      </menu>
    </footer>
  );
}
