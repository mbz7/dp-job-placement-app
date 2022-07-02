import React, { useState } from "react";
import SelectedPriority from "./SelectedPriority";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { PersonCircle } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import Priority from "./Priority";

function JobDetails({ job, skillsArry, urgency }) {
  console.log(job);
  // console.log(priority);
  // const [urgency, setUrgency] = useState("");
  // const priority = [job.urgency];
  // setUrgency(priority);

  // console.log(skillsArry);
  // const skills = skillsArry.split(",");

  return (
    <>
      <div className="job-details-card-container mt-5 w-100">
        <div className="job-card-container-content">
          <Row>
            <Col lg={8} className="job-card-title-group">
              <h3 className="job-details-job_title">{job.role}</h3>
              <p className="job-card-client_name">{job.client_name} </p>
            </Col>
            <Col className="p-4 d-flex align-items-center justify-content-end"></Col>
          </Row>
          <hr />
          <Row className="d-flex flex-row mb-4 p-2">
            <Col>
              <p className="job-card-subheader">SKILLS</p>
              <Col lg={8} className="gap-3 mr-5">
                {job.skills}
                {/* <div>
                  {skillsArry.map((skill, id) => {
                    return (
                      <Button
                        className="job-card-skills-button m-2 text-dark"
                        key={id}
                      >
                        <span>{skill}</span>
                      </Button>
                    );
                  })}
                </div> */}
              </Col>
            </Col>
            <Col lg={4} className="d-flex flex-row-reverse align-right">
              <Col className="text-center">
                <p className="job-card-quantity">Quanity</p>
                <p className="job-card-quantity-number"> {job.quantity}</p>
              </Col>
              <Col className="text-center">
                <p className="job-card-quantity">Urgency</p>
                <div>
                  <SelectedPriority job={job} />
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
                  <p className="job-card-contact-text">{job.contact_name}</p>
                </Col>
              </Col>
              <Col lg={6} sm={6} className="d-flex flex-row gap-3">
                <Col lg={1}>
                  <Envelope size={30} />
                </Col>
                <Col>
                  <p className="job-card-contact-text">{job.email}</p>
                </Col>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
      {/* <Container fluid className="mt-5">
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
                <SelectedPriority job={job} />
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
      </Container> */}
    </>
  );
}

export default JobDetails;
