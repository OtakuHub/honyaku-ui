import React, { Component } from 'react';
import Loading from '../../components/Loading';
import WorkCardList from '../../components/WorkCardList';
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
    return this.setState({ ...response });
  }

  render() {
    const { error, searchQuery, hasLoaded, results } = this.state;
    if (!hasLoaded) {
      return (<Loading />);
    }
    if (error) {
      return (<p>{error.message}</p>);
    }
    return (
      <div className="">
        <h4>
          Search Results:
          <span>{searchQuery}</span>
        </h4>
        <WorkCardList workList={results} />
      </div>
    );
  }
}

export default Search;
