import { CommentHeader } from './CommentHeader';
import { CommentBody } from './CommentBody';
import { CommentFooter } from './CommentFooter';

export function CommentCard() {
  return (
    <article className="comment-card-main">
      <h3>Comment Card</h3>

      <CommentHeader />
      <CommentBody />
      <CommentFooter />
    </article>
  );
}
