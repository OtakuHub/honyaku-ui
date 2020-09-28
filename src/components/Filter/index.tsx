import React, { ReactElement, useState } from 'react';

interface filters {
  value: string;
  displayName: string;
}

const Filter: React.FC = (): ReactElement => {
  const [filters] = useState<Array<filters>>([
    { value: 'genre', displayName: 'Select Genre' },
    { value: 'action', displayName: 'Action' },
    { value: 'adventure', displayName: 'Adventure' },
    { value: 'comedy', displayName: 'Comdey' },
    { value: 'drama', displayName: 'Drama' },
    { value: 'isekai', displayName: 'Isekai' },
    { value: 'romance', displayName: 'Romance' },
    { value: 'thriller', displayName: 'Thriller' },
  ]);

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <select name="filter" id="genrefilter">
        {filters.map(({ value, displayName }) => (
          <option key={value} value={value}>
            {displayName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
