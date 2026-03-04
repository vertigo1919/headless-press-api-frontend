import { CommentCard } from './CommentCard';

export function CommentsList({ comments }) {
  return (
    <section className="comments-list-main">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
}
