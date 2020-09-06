import React, { Component } from 'react';
import api from '../../services/api';
import WorkCard from '../../components/WorkCard';
import query from '../../services/searchPage';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: [],
      hasLoaded: false,
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
    const searchQuery = new URLSearchParams(search).get('query');
    this.setState({ searchQuery }, () => {
      this.getSearchResults();
    });
  }

  async getSearchResults() {
    try {
      const variables = { query: this.state.searchQuery };
      const response = await api.post('/', {
        query,
        variables,
      });
      const results = response.data.data.Page.media;
      this.setState({ results, hasLoaded: true });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { error, searchQuery, hasLoaded, results } = this.state;
    return (
      <div className="">
        <h4>
          Search Results:
          <span>{searchQuery}</span>
        </h4>
        {error && <p>{error.message}</p>}
        {!hasLoaded && <p>Loading</p>}
        {results.map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            title={work.title.romaji}
            coverImage={work.coverImage.large}
            genres={work.genres.join(', ')}
            description={work.description}
          />
        ))}
      </div>
    );
  }
}

export default Search;
