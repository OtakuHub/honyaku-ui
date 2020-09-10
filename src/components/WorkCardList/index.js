import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WorkCard from '../WorkCard';

const WorkCardList = ({ workList }) => (
  <Row>
    {workList.map((work) => (
      <Col key={work.id}>
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title.romaji}
          coverImage={work.coverImage.large}
          genres={work.genres.join(', ')}
          description={work.description}
        />
      </Col>
    ))}
  </Row>
);

export default WorkCardList;
