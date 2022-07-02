import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import JobDetails from "./JobDetails";
import CandidateCards from "./CandidateCards";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewCandidateAddForm from "./NewCandidateAddForm";
import Button from "react-bootstrap/Button";
import "../css/jobdetails.css";

function SelectedJob() {
  //scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [job, setJob] = useState({
    candidates: [],
  });

  const candidates = job.candidates;
  const { id } = useParams();
  const jobId = job.id;
  const urgency = job.urgency;
  // const skillsArry = job.skills;
  // console.log(priority);

  // fetch job
  useEffect(() => {
    fetch(`/jobs/${id}`)
      .then((r) => r.json())
      .then((joblist) => {
        setJob(joblist);
      });
  }, [id]);
  console.log(job);
  //   console.log(client);
  //   console.log(candidates);

  const addCandidate = (newCandidate) => {
    //fetch to add candidate to job
    //inside callback once you have a new image from that post fetch:
    setJob((job) => {
      return { ...job, candidates: [...job.candidates, newCandidate] };
    });
  };

  return (
    <>
      <Container className="m-auto">
        <Row className=" job-details-header">
          <Col className="d-flex align-items-center pt-3 mt-3">
            <Col lg={5}>
              <Button
                variant="outline-dark"
                className="text-right btn-md btn-md"
                as={Link}
                to={`/`}
              >
                Back To Jobs
              </Button>
            </Col>

            <Col>
              <h1 className="job-details-title">JOB DETAILS</h1>
            </Col>
          </Col>
        </Row>

        <JobDetails job={job} urgency={job.urgency} />

        <Row className="gap-5 ml-3 rounded">
          <Col lg={5}>
            <NewCandidateAddForm
              onAddNewCandidate={addCandidate}
              jobId={jobId}
            />
          </Col>

          <Col className="candidate-list-container rounded p-4">
            <Col>
              <h3 className="text-center mt-5 ">CANDIDATES</h3>
            </Col>
            <hr />

            <Col className="p-3">
              <CandidateCards candidates={candidates} />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SelectedJob;
