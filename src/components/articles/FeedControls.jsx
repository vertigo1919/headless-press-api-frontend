import { SortControls } from './SortControls';
import { ViewToggle } from './ViewToggle';

export function FeedControls() {
  return (
    <menu className="feed-controls-main">
      <h2>Feed Controls</h2>
      <SortControls />
      <ViewToggle />
    </menu>
  );
}
