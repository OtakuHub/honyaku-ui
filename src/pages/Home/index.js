import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import WorkCard from '../../components/WorkCard';
import './style.sass';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [
        { id: '29839287' },
        { id: '29389e82' },
        { id: '29839285' },
        { id: '20348209' },
        { id: '29834289' },
      ],
      mangas: [
        { id: '29439287' },
        { id: '29589e82' },
        { id: '29639285' },
        { id: '20148209' },
        { id: '29434289' },
      ],
      lightnovels: [
        { id: '29839487' },
        { id: '29389482' },
        { id: '29839485' },
        { id: '20348409' },
        { id: '29834489' },
      ],
    };
  }

  render() {
    const { animes, mangas, lightnovels } = this.state;
    return (
      <Container fluid>
        <div className="section">
          <h4>Light Novels</h4>
          <Row>
            {lightnovels.map((novel) => (
              <WorkCard key={novel.id} id={novel.id} />
            ))}
          </Row>
        </div>
        <div className="section">
          <h4>Manga</h4>
          <Row>
            {mangas.map((manga) => (
              <WorkCard key={manga.id} id={manga.id} />
            ))}
          </Row>
        </div>
        <div className="section">
          <h4>Anime</h4>
          <Row>
            {animes.map((anime) => (
              <WorkCard key={anime.id} id={anime.id} />
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default Home;
