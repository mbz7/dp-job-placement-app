import React from "react";
import SelectedPriority from "./SelectedPriority";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PersonCircle } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";

function JobDetails({ job, skillsArry, urgency }) {
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
    </>
  );
}

export default JobDetails;
