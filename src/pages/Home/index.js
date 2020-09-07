import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import WorkCard from '../../components/WorkCard';
import getTrendingForHomepage from '../../services/queries/homePage';
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
    if (response.error) {
      return this.setState({
        error: response.error,
        hasLoaded: true,
      });
    }
    const { anime, manga, lightnovel } = response;
    return this.setState({
      anime,
      manga,
      lightnovel,
      hasLoaded: true,
    });
  }

  render() {
    const { error, anime, manga, lightnovel, hasLoaded } = this.state;
    if (!hasLoaded) {
      return (<p>Loading content</p>);
    }
    if (error) {
      return (<p>{error}</p>);
    }
    return (
      <Container fluid>
        <div className="section">
          <h4>Light Novels</h4>
          <Row>
            {lightnovel.map((work) => (
              <WorkCard
                key={work.id}
                id={work.id}
                title={work.title.romaji}
                coverImage={work.coverImage.large}
                genres={work.genres.join(', ')}
                description={work.description}
              />
            ))}
          </Row>
        </div>
        <div className="section">
          <h4>Manga</h4>
          <Row>
            {manga.map((work) => (
              <WorkCard
                key={work.id}
                id={work.id}
                title={work.title.romaji}
                coverImage={work.coverImage.large}
                genres={work.genres.join(', ')}
                description={work.description}
              />
            ))}
          </Row>
        </div>
        <div className="section">
          <h4>Anime</h4>
          <Row>
            {anime.map((work) => (
              <WorkCard
                key={work.id}
                id={work.id}
                title={work.title.romaji}
                coverImage={work.coverImage.large}
                genres={work.genres.join(', ')}
                description={work.description}
              />
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default Home;
