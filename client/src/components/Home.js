import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import JobCards from "./JobCards";
import SelectedJob from "./SelectedJob";
import Col from "react-bootstrap/Col";
import "../css/home.css";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

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

  // fetch jobs
  useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((joblist) => {
        setJobs(joblist);
      });
  }, []);
  console.log(jobs);

  // useEffect(() => {
  //   fetch("/jobs")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setJobs(data);
  //     });
  // }, []);

  return (
    <>
      <div>
        <div className="home-hero">
          <h1>Job Openings</h1>
        </div>
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
          <Col className="mt-5">
            <JobCards jobs={filteredPost()} />
          </Col>
          {/* <SelectedJob /> */}
        </Container>
      </div>
    </>
  );
}
