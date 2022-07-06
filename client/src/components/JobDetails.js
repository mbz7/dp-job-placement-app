import React, { useState, useEffect } from "react";
import SelectedPriority from "./SelectedPriority";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { PersonCircle } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";

// import Split from "react-split";

function JobDetails({ job, skillsArry, urgency }) {
  const [skills, setSkills] = useState([]);

  // console.log(skillsArry);
  // let urgency = job.urgency;

  const stringSkills = job.skills || "";
  // console.log(stringSkills);
  // console.log(typeof stringSkills);

  useEffect(() => {
    setSkills(stringSkills.split(/[ ,]+/));
  }, [stringSkills]);

  // console.log(skills);
  // console.log(typeof skills);

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
          <Row className="d-flex flex-row mb-4 p-2 gap-5">
            <Col lg={7}>
              <p className="job-card-subheader">SKILLS</p>
              {/* <Col lg={8} className="gap-3 mr-5 mb-4">
                {job.skills}
              </Col> */}
              <Col className="gap-3 mr-5 mb-3">
                <div>
                  {/* function to map through new skills array and input each into a styled button */}
                  {skills.map((skill, id) => {
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
            <Col lg={4} className="d-flex flex-row-reverse quantity-urgency">
              <Col className="text-center">
                <p className="job-card-quantity">Quanity</p>
                <p className="job-card-quantity-number"> {job.quantity}</p>
              </Col>
              <Col className="text-center">
                <p className="job-card-quantity">Urgency</p>
                <div>
                  <SelectedPriority urgency={urgency} />
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
