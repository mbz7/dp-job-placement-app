import React from "react";
import Priority from "./Priority";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";

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
  const skillsArry = skills.split(",");
  console.log(skillsArry);

  return (
    <>
      <Container>
        <Row className="p-3 mb-4 border shadow-sm text-left bg-light">
          <Col>
            <h2>{role}</h2>
          </Col>

          <ListGroup variant="flush" className="w-50">
            <Col>
              <ListGroup.Item>
                <strong>Client:</strong> {client}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Point Of Contact:</strong> {contact}
              </ListGroup.Item>
            </Col>
            <ListGroup.Item>
              <strong>Email:</strong> {email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Quantity:</strong> {quantity}
            </ListGroup.Item>

            <ListGroup.Item>
              <Stack direction="horizontal" gap={3}>
                <div>
                  <Priority urgency={urgency} />
                </div>
                {/* <div>
                  <Badge className="p-2" bg="secondary">
                    Quantity:
                    {quantity}
                  </Badge>
                </div> */}
              </Stack>
            </ListGroup.Item>
            <ListGroup.Item>
              <Col className="">
                <p>
                  <strong>Skills:</strong>
                </p>
                <div>
                  {skillsArry.map((skill, id) => {
                    return (
                      <Button
                        className="m-1 border"
                        size="sm"
                        variant="light"
                        key={id}
                      >
                        {skill}
                      </Button>
                    );
                  })}
                </div>
              </Col>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                // variant="default"
                className="text-right mt-2 btn-md mb-1 btn-lg w-100"
                as={Link}
                to={`/jobs/${id}`}
              >
                Add/View Candidates
              </Button>
            </ListGroup.Item>
          </ListGroup>

          <Col sm={4}>
            {/* <div>
              <p>
                <strong>Point Of Contact:</strong>
              </p>
              <p>{contact}</p>
            </div>

            <p>{email}</p>
            <p>{role}</p> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobCard;
