import React, { ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';
import './style.sass';

const Loading: React.FC = (): ReactElement => (
  <div className="spinner">
    <Spinner animation="grow" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
