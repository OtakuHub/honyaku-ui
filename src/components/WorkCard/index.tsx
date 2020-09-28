import React, { ReactElement } from 'react';
import { Card } from 'react-bootstrap';
import handleNavigation from '../../helper/navigation';

interface Props {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  genres: Array<string>;
}

const WorkCard: React.FC<Props> = ({ id, title, coverImage, description, genres }): ReactElement => (
  <Card style={{ minWidth: '15rem', marginTop: '1rem', cursor: 'pointer' }}>
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
        {genres.join(', ')}
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
