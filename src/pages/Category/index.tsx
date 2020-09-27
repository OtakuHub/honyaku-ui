import React, { useState, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import Loading from '../../components/Loading';
import Filter from '../../components/Filter';
import Sort from '../../components/Sorting';
import WorkCardList from '../../components/WorkCardList';
import getCategoryWork from '../../services/queries/categoryPage';
import './style.sass';

type TParams = {
  categoryName: string;
}

const Category: React.FC<RouteComponentProps<TParams>> = ({ match: { params }, location }) => {
  const [response, setResponse] = useState({
    results: [],
    error: null,
    hasLoaded: false,
  });

  useEffect(() => {
    const getTrendingMedia = async () => {
      const workType = params.categoryName.toUpperCase();
      const res = await getCategoryWork(workType);
      setResponse({ ...res });
    };

    getTrendingMedia();
  }, [params.categoryName]);

  if (!response.hasLoaded) {
    return (<Loading />);
  }

  if (response.error) {
    return (<p>{response.error.message}</p>);
  }

  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>{`Most trending: ${params.categoryName}`}</h1>
        </Container>
      </Jumbotron>
      <Filter />
      <Sort />
      <WorkCardList workList={response.results} />
    </div>
  );
};

export default Category;
