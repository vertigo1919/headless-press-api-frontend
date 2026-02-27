import { SortControls } from './SortControls';
import { ViewToggle } from './ViewToggle';

export function FeedControls({ sortLabel, setSortLabel, viewType, setViewType }) {
  return (
    <menu className="feed-controls-main">
      {/* <h2>Feed Controls</h2> */}
      <SortControls sortLabel={sortLabel} setSortLabel={setSortLabel} />
      <ViewToggle viewType={viewType} setViewType={setViewType} />
    </menu>
  );
}
