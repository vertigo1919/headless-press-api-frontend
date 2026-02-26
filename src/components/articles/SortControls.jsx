import { useState } from 'react';

export function SortControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState('New');

  const sortOptions = [
    { id: 'new', label: 'New' },
    { id: 'most_commented', label: 'Most Commented' },
    { id: 'least_commented', label: 'Least Commented' },
    { id: 'most_votes', label: 'Most Votes' },
    { id: 'least_votes', label: 'Least Votes' },
  ];

  // handlers functions for clicks
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSelection(label) {
    setSortType(label);
    setIsOpen(false);
  }

  return (
    <div className="sort-controls-main">
      <button onClick={toggleDropdown} className="sort-controls-dropdown-trigger">
        Sort: {sortType}
      </button>

      {isOpen && (
        <menu className="sort-controls-dropdown-menu">
          {sortOptions.map((option) => (
            <li key={option.id}>
              <button onClick={() => handleSelection(option.label)}>{option.label}</button>
            </li>
          ))}
        </menu>
      )}
    </div>
  );
}
