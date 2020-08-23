import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.sass';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button
          variant="outline-primary"
          className="search"
        >
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
