import React, { Component } from 'react';
import WorkCard from '../../components/WorkCard';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [
        { id: '29839487' },
        { id: '29389482' },
        { id: '29839485' },
        { id: '20348409' },
        { id: '29834489' },
      ]
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
    const { query, results } = this.state;
    return (
      <div className="">
        <h4>
          Search Results:
          <span>{query}</span>
        </h4>
        {results.map((work) => (
          <WorkCard key={work.id} id={work.id} />
        ))}
      </div>
    );
  }
}

export default Search;
