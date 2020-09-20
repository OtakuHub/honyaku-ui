import React, { useState } from 'react';

const Sort = () => {
  const [sortOptions] = useState([
    { value: 'defult', displayName: 'Default' },
    { value: 'date', displayName: 'Date' },
    { value: 'liked', displayName: 'Most Liked' },
    { value: 'followed', displayName: 'Most Followed' },
  ]);

  return (
    <div>
      <label htmlFor="sorting">Sort</label>
      <select name="sorting" id="sort">
        {sortOptions.map((sorts) => (
          <option value={sorts.value}>{sorts.displayName}</option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
