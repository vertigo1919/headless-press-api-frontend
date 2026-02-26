import { VoteControl } from '../shared/VoteControl';
import { DeleteButton } from './DeleteButton';
export function CommentFooter() {
  return (
    <footer className="comment-footer-main">
      <h4>Comment Footer</h4>
      <menu className="comment-footer-buttons">
        <VoteControl />
        <DeleteButton />
      </menu>
    </footer>
  );
}
