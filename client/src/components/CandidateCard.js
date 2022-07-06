import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CandidateCard({ firstName, lastName, phoneNumber, city_state }) {
  return (
    <div>
      <Row className="candidate-list">
        <Col lg={3} xs={3}>
          <p>{firstName}</p>
        </Col>
        <Col lg={3} xs={3}>
          <p>{lastName}</p>
        </Col>
        <Col lg={3} xs={3}>
          <p>{phoneNumber}</p>
        </Col>
        <Col lg={3} xs={3}>
          <p>{city_state}</p>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default CandidateCard;
