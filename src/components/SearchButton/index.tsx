import React, { ReactElement, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import history from '../../history';
import Filter from '../Filter';
import './style.sass';

const SearchButton: React.FC = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(`/search?query=${query}`);
    handleClose();
    setQuery('');
  };

  return (
    <div>
      <Button
        variant="warning"
        className="search"
        onClick={handleShow}
      >
        Search
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Find what you are looking for</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Label>
                Search
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter an anime, manga or light novel title"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Filter />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchButton;
