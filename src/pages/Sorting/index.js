import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOptions: [
        { value: 'defult', displayName: 'Default' },
        { value: 'date', displayName: 'Date' },
        { value: 'liked', displayName: 'Most Liked' },
        { value: 'followed', displayName: 'Most Followed' },
      ],
    };
  }

  render() {
    const { sortOptions } = this.state;
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
  }
}

export default Sort;
