import React from "react";
import CandidateCard from "./CandidateCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function CandidateCards({ candidates, jobId }) {
  console.log(candidates);
  return (
    <>
      {/* List of Candidates */}
      <Col className="mt-5 text-left">
        <Row>
          <Col lg={3} xs={3}>
            <p>
              <strong>First Name</strong>
            </p>
          </Col>
          <Col lg={3} xs={3}>
            <p>
              <strong>Last Name</strong>
            </p>
          </Col>
          <Col lg={3} xs={3}>
            <p className="text-right">
              <strong>Phone Number</strong>
            </p>
          </Col>
          <Col lg={3} xs={3}>
            <p>
              <strong>City, State</strong>
            </p>
          </Col>
        </Row>

        <hr />

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
