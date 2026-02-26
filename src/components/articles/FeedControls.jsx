import { SortControls } from './SortControls';
import { ViewToggle } from './ViewToggle';

export function FeedControls() {
  return (
    <section className="feed-controls-main">
      <SortControls />
      <ViewToggle />
    </section>
  );
}
