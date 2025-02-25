import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center">
          {/* Spinner with custom size and animation */}
          <Spinner
            animation="border"
            role="status"
            style={{ width: '4rem', height: '4rem', borderWidth: '0.5em' }}
            className="mb-3"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          {/* Optional: Add a loading text */}
          <h3 className="mt-3" style={{ color: '#007bff', fontWeight: 'bold' }}>
            Loading...
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Loader;