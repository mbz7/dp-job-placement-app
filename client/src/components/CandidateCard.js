import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function CandidateCard({ firstName, lastName, phoneNumber, city_state }) {
  return (
    <div>
      <Row className="candidate-list">
        <Col lg={3} sm={3}>
          <p>{firstName}</p>
        </Col>
        <Col lg={3} sm={3}>
          <p>{lastName}</p>
        </Col>
        <Col lg={3} sm={3}>
          <p className="text-right">{phoneNumber}</p>
        </Col>
        <Col lg={3} sm={3}>
          <p>{city_state}</p>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default CandidateCard;
