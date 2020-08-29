import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    this.getSearchQuery();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getSearchQuery();
    }
  }

  getSearchQuery() {
    const { search } = this.props.location;
    const query = new URLSearchParams(search).get('query');
    this.setState({ query });
  }

  render() {
    const { query } = this.state;
    return (
      <h2>
        Search Results:
        <span>{query}</span>
      </h2>
    );
  }
}

export default Search;
