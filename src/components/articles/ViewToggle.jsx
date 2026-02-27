import { useState } from 'react';

export function ViewToggle({ viewType, setViewType }) {
  const [isOpen, setIsOpen] = useState(false);

  // handlers functions for clicks
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSelection(type) {
    setViewType(type);
    setIsOpen(false);
  }

  return (
    <div className="view-toggle-main">
      <button onClick={toggleDropdown} className="view-toggle-dropdown-trigger">
        View: {viewType === 'extended' ? 'Extended' : 'Compact'}
      </button>

      {isOpen && (
        <menu className="view-toggle-dropdown-menu">
          <li>
            <button onClick={() => handleSelection('extended')}>Extended</button>
          </li>
          <li>
            <button onClick={() => handleSelection('compact')}>Compact</button>
          </li>
        </menu>
      )}
    </div>
  );
}
