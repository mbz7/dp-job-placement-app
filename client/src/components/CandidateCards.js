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
      <Col className="mt-5 p-3 text-left">
        <Row>
          <Col>
            <p>
              <strong>First Name</strong>
            </p>
          </Col>
          <Col>
            <p>
              <strong>Last Name</strong>
            </p>
          </Col>
          <Col>
            <p>
              <strong>Phone Number</strong>
            </p>
          </Col>
          <Col>
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
