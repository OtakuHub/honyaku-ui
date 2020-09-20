import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import WorkCardList from '../../components/WorkCardList';
import getSearchResults from '../../services/queries/searchPage';

const Search = ({ location }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState([{
    error: null,
    hasLoaded: false,
  }]);

  useEffect(() => {
    const handleSearch = async () => {
      const res = await getSearchResults(query);
      setResponse({ ...res });
    };

    handleSearch();
  }, [query]);

  useEffect(() => {
    const getSearchQueryFromURL = async () => {
      const searchQuery = new URLSearchParams(location.search).get('query');
      setQuery(searchQuery);
    };

    getSearchQueryFromURL();
  }, [location.search]);

  if (!response.hasLoaded) {
    return (<Loading />);
  }
  if (response.error) {
    return (<p>{response.error.message}</p>);
  }
  return (
    <div className="">
      <h4>
        Search Results:
        <span>{query}</span>
      </h4>
      <WorkCardList workList={response.results} />
    </div>
  );
};

export default Search;
