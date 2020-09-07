import React, { Component } from 'react';
import WorkCard from '../../components/WorkCard';
import getSearchResults from '../../services/queries/searchPage';

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
    this.getSearchQueryFromURL();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getSearchQueryFromURL();
    }
  }

  getSearchQueryFromURL() {
    const { search } = this.props.location;
    const searchQuery = new URLSearchParams(search).get('query');
    this.setState({ searchQuery }, () => {
      this.handleSearch();
    });
  }

  async handleSearch() {
    const response = await getSearchResults(this.state.searchQuery);
    if (response.error) {
      return this.setState({
        error: response.error,
        hasLoaded: true,
      });
    }
    return this.setState({
      results: response.results,
      hasLoaded: true,
    });
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
