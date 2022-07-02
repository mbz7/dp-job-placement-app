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
import Card from "react-bootstrap/Card";
import { PersonCircle } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";

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
      {/* <div className="job-card-container"></div> */}
      {/* <Card className="p-4 mb-4 bg-light rounded shadow-sm"> */}
      <div className="job-card-container">
        <div className="job-card-container-content">
          <Row>
            <Col lg={6} className="job-card-title-group">
              <h3 className="job-card-job_title">{role}</h3>
              <p className="job-card-client_name">{client} </p>
            </Col>
            <Col className="p-4 d-flex align-items-center justify-content-end">
              <Link to={`/jobs/${id}`}>
                <button
                  className="job-card-view-button"
                  as={Link}
                  to={`/jobs/${id}`}
                >
                  <span>Add / View Candidates</span>
                </button>
              </Link>
            </Col>
            {/* <Col
                  lg={3}
                  className="d-flex align-items-start justify-content-end"
                >
                  <div>
                    <Priority urgency={urgency} />
                  </div>
                </Col> */}
          </Row>
          <hr />
          <Row className="d-flex flex-row mb-4 p-2">
            <Col>
              <p className="job-card-subheader">SKILLS</p>
              <Col lg={8} className="gap-3 mr-5">
                <div>
                  {skillsArry.map((skill, id) => {
                    return (
                      <Button
                        className="job-card-skills-button m-2 text-dark"
                        // size="sm"
                        // variant="light"
                        key={id}
                      >
                        <span>{skill}</span>
                      </Button>
                    );
                  })}
                </div>
              </Col>
            </Col>
            <Col lg={4} className="d-flex flex-row-reverse align-right">
              {/* <Col lg={3}>
                    <p>{client} </p>
                  </Col>{" "}
                  <Col lg={3}>
                    <p>POC: {contact}</p>
                  </Col>{" "}
                  <Col lg={4}>
                    <p>Email: {email}</p>
                  </Col>{" "} */}
              <Col className="text-center">
                <p className="job-card-quantity">Quanity</p>
                <p className="job-card-quantity-number"> {quantity}</p>
              </Col>
              <Col className="text-center">
                <p className="job-card-quantity">Urgency</p>
                <div>
                  <Priority urgency={urgency} />
                </div>
              </Col>{" "}
            </Col>
          </Row>{" "}
          <hr />
          <Row className="d-flex flex-row p-2">
            <p className="job-card-subheader">CONTACT</p>
            <Row className="w-75 p-2">
              <Col lg={6} sm={6} className="d-flex flex-row gap-3">
                <Col lg={1}>
                  <PersonCircle size={30} />
                </Col>
                <Col>
                  <p className="job-card-contact-text">{contact}</p>
                </Col>
              </Col>
              <Col lg={6} sm={6} className="d-flex flex-row gap-3">
                <Col lg={1}>
                  <Envelope size={30} />
                </Col>
                <Col>
                  <p className="job-card-contact-text">{email}</p>
                </Col>
              </Col>
            </Row>
          </Row>
          {/* <strong>Client:</strong>  */}
          {/* <Button
          className="text-right mt-2 mb-1 btn-lg"
          as={Link}
          to={`/jobs/${id}`}
          variant="dark"
        >
          Add / View Candidates
        </Button> */}
        </div>
      </div>

      {/* <Container>
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
                className="text-right mt-2 btn-md mb-1 btn-lg w-100"
                as={Link}
                to={`/jobs/${id}`}
              >
                Add/View Candidates
              </Button>
            </ListGroup.Item>
          </ListGroup>

          <Col sm={4}>
            <div>
              <p>
                <strong>Point Of Contact:</strong>
              </p>
              <p>{contact}</p>
            </div>

            <p>{email}</p>
            <p>{role}</p>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default JobCard;
