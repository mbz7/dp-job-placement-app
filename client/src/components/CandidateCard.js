import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function CandidateCard({ firstName, lastName, phoneNumber, city_state }) {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
            <p>{firstName}</p>
          </Col>
          <Col sm={2}>
            <p>{lastName}</p>
          </Col>
          <Col>
            <p>{phoneNumber}</p>
          </Col>
          <Col>
            <p>{city_state}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CandidateCard;
