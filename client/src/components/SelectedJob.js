import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import JobDetails from "./JobDetails";
import CandidateCards from "./CandidateCards";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewCandidateAddForm from "./NewCandidateAddForm";
import Button from "react-bootstrap/Button";

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

  // fetch job
  useEffect(() => {
    fetch(`/jobs/${id}`)
      .then((r) => r.json())
      .then((joblist) => {
        setJob(joblist);
      });
  }, [id]);
  // console.log(jobs);
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
      <Container className="align-center">
        <Col className="d-flex align-items-center pt-3">
          <Button
            variant="outline-dark"
            className="text-right btn-md btn-md"
            as={Link}
            to={`/`}
          >
            Back To Jobs
          </Button>
        </Col>

        <JobDetails job={job} urgency={urgency} />

        <Row>
          <Col>
            <NewCandidateAddForm
              onAddNewCandidate={addCandidate}
              jobId={jobId}
            />
          </Col>

          <Col lg={6} className="bg-light shadow-sm border">
            <Col>
              <h2 className="text-center mt-5">Candidates</h2>
            </Col>
            <hr />

            <Col>
              <CandidateCards candidates={candidates} />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SelectedJob;
