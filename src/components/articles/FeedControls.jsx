import { SortControls } from './SortControls';
import { ViewToggle } from './ViewToggle';

export function FeedControls() {
  return (
    <menu className="feed-controls-main">
      <SortControls />
      <ViewToggle />
    </menu>
  );
}
