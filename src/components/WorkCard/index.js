import React from 'react';
import { Card } from 'react-bootstrap';
import handleNavigation from '../../helper/navigation';

const WorkCard = ({ id, title, coverImage, description, genres }) => (
  <Card style={{ minWidth: '15rem', marginTop: '1rem', cursor: 'pointer' }} >
    <Card.Img
      style={{ height: '15rem', objectFit: 'cover' }}
      variant="top"
      src={coverImage}
    />
    <Card.Body>
      <Card.Title>
        {title}
      </Card.Title>
      <Card.Subtitle>
        {genres}
      </Card.Subtitle>
      <Card.Text
        dangerouslySetInnerHTML={{ __html: description.substring(0, 100) }}
      />
      <Card.Link
        href="#"
        data-url={`/work/${id}`}
        onClick={handleNavigation}
      >
        Read More
      </Card.Link>
    </Card.Body>
  </Card>
);

export default WorkCard;
