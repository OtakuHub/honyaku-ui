import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WorkCard = ({ id, title, coverImage, description, genres }) => (
  <Col>
    <Card style={{ minWidth: '15rem', marginTop: '1rem' }}>
      <Card.Img
        style={{ height: '15rem', objectFit: 'cover' }}
        variant="top"
        src={coverImage}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{genres}</Card.Subtitle>
        <Card.Text
          dangerouslySetInnerHTML={{ __html: description.substring(0, 100) }}
        />
        <Card.Link>
          <Link to={`/work/${id}`}>Read More</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  </Col>
);

export default WorkCard;
