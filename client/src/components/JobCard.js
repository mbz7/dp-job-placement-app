import React from "react";
import Priority from "./Priority";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  // function to split job skills array so that it can styled into individual buttons
  const skillsArry = skills.split(",");

  return (
    <>
      <div className="job-card-container">
        <div className="job-card-container-content">
          <Row>
            <Col lg={6} className="job-card-title-group">
              <h3 className="job-card-job_title">{role}</h3>
              <p className="job-card-client_name">{client} </p>
            </Col>
            <Col className="p-4 add-view-container">
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
          </Row>
          <hr />
          <Row className="d-flex flex-row mb-4 p-2 gap-5">
            <Col lg={7}>
              <p className="job-card-subheader">SKILLS</p>
              <Col className="gap-3 mr-5 mb-3">
                <div>
                  {/* function to map through new skills array and input each into a styled button */}
                  {skillsArry.map((skill, id) => {
                    return (
                      <Button
                        className="job-card-skills-button m-2 text-dark align-center px-4"
                        key={id}
                      >
                        <span>{skill}</span>
                      </Button>
                    );
                  })}
                </div>
              </Col>
            </Col>
            <Col
              lg={4}
              className="d-flex flex-row align-right quantity-urgency"
            >
              <Col className="text-center">
                <p className="job-card-quantity">Quanity</p>
                <p className="job-card-quantity-number"> {quantity}</p>
              </Col>
              <Col className="mx-auto">
                <Col>
                  <p className="job-card-quantity">Urgency</p>
                </Col>
                <Col>
                  <Priority urgency={urgency} />
                </Col>
              </Col>{" "}
            </Col>
          </Row>{" "}
          <hr />
          <Row className="d-flex flex-row p-2 w-75">
            <p className="job-card-subheader">CONTACT</p>
            <Row className=" p-2">
              <Col
                lg={4}
                md={12}
                className="d-flex flex-row align-items-start gap-4"
              >
                <Col lg={1}>
                  <PersonCircle size={30} />
                </Col>
                <Col>
                  <p className="job-card-contact-text">{contact}</p>
                </Col>
              </Col>
              <Col lg={6} sm={12} className="d-flex flex-row gap-3">
                <Col lg={1}>
                  <Envelope size={30} />
                </Col>
                <Col>
                  <p className="job-card-contact-text">{email}</p>
                </Col>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}

export default JobCard;
