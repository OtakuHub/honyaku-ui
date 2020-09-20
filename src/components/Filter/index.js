import React, { useState } from 'react';

const Filter = () => {
  const [filters] = useState([
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
        {filters.map((filter) => (
          <option value={filter.value}>{filter.displayName}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
