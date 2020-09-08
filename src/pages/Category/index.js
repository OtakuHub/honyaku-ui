import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Filter from '../../components/Filter';
import Sort from '../../components/Sorting';
import WorkCardList from '../../components/WorkCardList';
import getCategoryWork from '../../services/queries/categoryPage';
import './style.sass';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      results: [],
    };
  }

  componentDidMount() {
    this.getTrendingMedia();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getTrendingMedia();
    }
  }

  async getTrendingMedia() {
    const { match: { params } } = this.props;
    const workType = params.categoryName.toUpperCase();
    const response = await getCategoryWork(workType);
    return this.setState({ ...response });
  }

  render() {
    const { error, hasLoaded, results } = this.state;
    const { match: { params } } = this.props;

    if (!hasLoaded) {
      return (<p>Loading</p>);
    }

    if (error) {
      return (<p>{error.message}</p>);
    }

    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>
              Most trending:&nbsp;
              <span>{params.categoryName}</span>
            </h1>
          </Container>
        </Jumbotron>
        <Filter />
        <Sort />
        <WorkCardList workList={results} />
      </div>
    );
  }
}

export default Category;
