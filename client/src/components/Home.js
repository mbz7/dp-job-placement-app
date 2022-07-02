import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import JobCards from "./JobCards";
import Col from "react-bootstrap/Col";
import "../css/home.css";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  // Search Filter Functions
  const changeSearchStringInState = (searchString) => {
    setSearch(searchString);
  };

  const filteredPost = () => {
    if (search.length > 0) {
      return jobs.filter(
        (job) =>
          job.role.toLowerCase().includes(search.toLowerCase()) ||
          job.client_name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return jobs;
    }
  };

  // GET - fetch all jobs
  useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((joblist) => {
        setJobs(joblist);
      });
  }, []);
  console.log(jobs);

  return (
    <>
      {/* Hero Section */}
      <div>
        <div className="home-hero">
          <h1>Job Openings</h1>
        </div>
        {/* Start of Search and Job Listings Container */}
        <Container>
          <Col>
            <Col className="home-search-container shadow">
              <h4 className="text-center">SEARCH FOR AVAILABLE JOBS</h4>
              <Col lg={8} className=" search-bar-container text-center m-auto">
                <div
                  className="ms-auto search-bar mx-auto"
                  controlId="formBasicSearch"
                >
                  <input
                    type="search"
                    placeholder="Search by Role or Client..."
                    onChange={(e) => changeSearchStringInState(e.target.value)}
                    className="w-100"
                  />
                </div>
              </Col>
            </Col>
          </Col>
          {/* Job Listings */}
          <Col className="mt-5">
            <JobCards jobs={filteredPost()} />
          </Col>
        </Container>
      </div>
    </>
  );
}
