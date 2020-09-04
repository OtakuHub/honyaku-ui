import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class WorkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Gintama',
      image: 'https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
      description: 'The Amanto, aliens from outer space,... ',
    };
  }

  render() {
    const { title, image, description } = this.state;
    const { id } = this.props;
    return (
      <Col>
        <Card style={{ minWidth: '15rem', marginTop: '1rem' }}>
          <Card.Img
            style={{ height: '15rem', objectFit: 'cover' }}
            variant="top"
            src={image}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Link>
              <Link to={`/work/${id}`}>Read More</Link>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default WorkCard;
