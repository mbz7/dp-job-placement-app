import React from "react";
import CandidateCard from "./CandidateCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CandidateCards({ candidates, jobId }) {
  return (
    <>
      {/* List of Candidates */}
      <Col className="mt-2 text-left">
        <Row className="candidate-list-headers mb-2">
          <Col lg={3} xs={3}>
            <p className="candidate-headers">
              <strong>First Name</strong>
            </p>
          </Col>
          <Col lg={3} xs={3}>
            <p className="candidate-headers">
              <strong>Last Name</strong>
            </p>
          </Col>
          <Col lg={3} xs={3}>
            <p className="candidate-headers">
              <strong>Phone</strong>
            </p>
          </Col>
          <Col lg={3} xs={3}>
            <p className="candidate-headers">
              <strong>City, State</strong>
            </p>
          </Col>
          <hr />
        </Row>

        {/* iterate through candidates */}
        {candidates.map((candidate) => {
          return (
            <CandidateCard
              key={candidate.id}
              firstName={candidate.first_name}
              lastName={candidate.last_name}
              phoneNumber={candidate.phone}
              city_state={candidate.city_state}
            />
          );
        })}
      </Col>
    </>
  );
}

export default CandidateCards;
