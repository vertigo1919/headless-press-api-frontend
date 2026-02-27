import { VoteDisplay } from '../shared/VoteDisplay';
import { CommentLinkButton } from '../comments/CommentLinkButton';

export function ArticleCardFooter({ article, viewType }) {
  return (
    <footer className="article-card-footer-main">
      <menu>
        {viewType === 'extended' && (
          <>
            <VoteDisplay article={article} /> <CommentLinkButton article={article} />
          </>
        )}
      </menu>
    </footer>
  );
}
