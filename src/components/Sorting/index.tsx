import React, { ReactElement, useState } from 'react';

interface SortingOptions {
  value: string;
  displayName: string;
}

const Sort: React.FC = (): ReactElement => {
  const [sortOptions] = useState<Array<SortingOptions>>([
    { value: 'defult', displayName: 'Default' },
    { value: 'date', displayName: 'Date' },
    { value: 'liked', displayName: 'Most Liked' },
    { value: 'followed', displayName: 'Most Followed' },
  ]);

  return (
    <div>
      <label htmlFor="sorting">Sort</label>
      <select name="sorting" id="sort">
        {sortOptions.map(({ value, displayName }) => (
          <option key={value} value={value}>
            {displayName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
