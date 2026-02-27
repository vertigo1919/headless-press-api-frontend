import downvoteIcon from '../../../src/assets/icons/downvote-icon.svg';
import upvoteIcon from '../../../src/assets/icons/upvote-icon.svg';

export function VoteDisplay({ article }) {
  return (
    <div className="votes-display">
      <img src={upvoteIcon} alt="upvote-icon" className="votes-display-upvote-icon" />
      <span className="vote-count">{article.votes}</span>
      <img src={downvoteIcon} alt="downvote-icon" className="votes-display-downvote-icon" />
    </div>
  );
}
