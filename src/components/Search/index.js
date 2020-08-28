import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import history from '../../history';
import Filter from '../Filter';
import './style.sass';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      query: '',
    };
  }

  handleShow = () => this.setState({ show: true });

  handleClose = () => this.setState({ show: false });

  handleSeach = ({ target }) => {
    this.setState({ query: `${target.value}` });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?${this.state.query}`);
    this.handleClose();
    this.setState({ query: '' });
  }

  render() {
    const { show, query } = this.state;
    return (
      <div>
        <Button
          variant="outline-primary"
          className="search"
          onClick={this.handleShow}
        >
          Search
        </Button>
        <Modal show={show} onHide={this.handleClose}>
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
                  onChange={this.handleSeach}
                />
              </Form.Group>
              <Form.Group>
                <Filter />
              </Form.Group>
              <Button variant="outline-success" type="submit" onClick={this.handleSubmit}>
                Search
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Search;
