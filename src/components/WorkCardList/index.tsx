import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WorkCard from '../WorkCard';


interface Work {
  id: string;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
    extraLarge: string;
    medium: string;
    color: string;
  };
  description: string;
  genres: Array<string>;
}

interface Props {
  workList: Array<Work>;
}

const WorkCardList: React.FC<Props> = ({ workList }) => (
  <Row>
    {workList.map((work) => (
      <Col key={work.id}>
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title.romaji}
          coverImage={work.coverImage.large}
          genres={work.genres}
          description={work.description}
        />
      </Col>
    ))}
  </Row>
);

export default WorkCardList;
