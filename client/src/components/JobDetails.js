import React from "react";
import Priority from "./Priority";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function JobDetails({ job }) {
  console.log(job);
  // console.log(client);
  const urgency = job.urgency;
  return (
    <>
      <Container fluid className="mt-5">
        <Row className="p-3 mb-4 border shadow-sm text-left">
          <Col>
            <h2>{job.client_name}</h2>
          </Col>
          <Col sm={6}>
            <p>{job.contact}</p>
            <p>{job.email}</p>
            <p>{job.role}</p>
            <Stack direction="horizontal" gap={3}>
              <div>
                <Priority urgency={urgency} />
              </div>
              <div>
                <Badge className="p-2" bg="secondary">
                  Jobs Needed:
                  {job.quantity}
                </Badge>
              </div>
            </Stack>
          </Col>
          <Col>
            <p>{job.skills}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobDetails;
