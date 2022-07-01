import React from "react";
import Priority from "./Priority";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function JobCard({
  id,
  client,
  contact,
  email,
  role,
  urgency,
  quantity,
  skills,
}) {
  return (
    <>
      <Container>
        <Row className="p-3 mb-4 border shadow-sm text-left">
          <Col>
            <h2>{client}</h2>
          </Col>
          <Col sm={6}>
            <p>{contact}</p>
            <p>{email}</p>
            <p>{role}</p>
            <Stack direction="horizontal" gap={3}>
              <div>
                <Priority urgency={urgency} />
              </div>
              <div>
                <Badge className="p-2" bg="secondary">
                  Jobs Needed:
                  {quantity}
                </Badge>
              </div>
            </Stack>
          </Col>
          <Col>
            <p>{skills}</p>
            <Button
              variant="dark"
              className="text-right mt-2 btn-md mb-1 btn-lg"
              as={Link}
              to={`/jobs/${id}`}
            >
              Add/View Candidates
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobCard;
