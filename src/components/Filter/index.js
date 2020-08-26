import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: [
        { value: 'genre', displayName: 'Select Genre' },
        { value: 'action', displayName: 'Action' },
        { value: 'adventure', displayName: 'Adventure' },
        { value: 'comedy', displayName: 'Comdey' },
        { value: 'drama', displayName: 'Drama' },
        { value: 'isekai', displayName: 'Isekai' },
        { value: 'romance', displayName: 'Romance' },
        { value: 'thriller', displayName: 'Thriller' },
      ],
    };
  }

  render() {
    const { filterOptions } = this.state;
    return (
      <div>
        <label htmlFor="filter">Filter</label>
        <select name="filter" id="genrefilter">
          {filterOptions.map((filters) => (
            <option value={filters.value}>{filters.displayName}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Filter;
