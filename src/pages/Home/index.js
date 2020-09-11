import React, { Component } from 'react';
import WorkCardList from '../../components/WorkCardList';
import getTrendingForHomepage from '../../services/queries/homePage';
import Loading from '../../components/Loading';
import './style.sass';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasLoaded: false,
      anime: [],
      manga: [],
      lightnovel: [],
    };
  }

  componentDidMount() {
    this.getTrendingMedia();
  }

  async getTrendingMedia() {
    const response = await getTrendingForHomepage();
    return this.setState({ ...response });
  }

  render() {
    const { error, anime, manga, lightnovel, hasLoaded } = this.state;
    if (!hasLoaded) {
      return (<Loading />);
    }
    if (error) {
      return (<p>{error}</p>);
    }
    return (
      <div>
        <div className="section">
          <h4>Light Novels</h4>
          <WorkCardList workList={lightnovel} />
        </div>
        <div className="section">
          <h4>Manga</h4>
          <WorkCardList workList={manga} />
        </div>
        <div className="section">
          <h4>Anime</h4>
          <WorkCardList workList={anime} />
        </div>
      </div>
    );
  }
}

export default Home;
