import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import JobDetail from "./JobDetail";
import CandidateCards from "./CandidateCards";

function SelectedJob() {
  //scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [jobs, setJobs] = useState({
    client: [],
    candidates: [],
  });

  const client = jobs.client;
  const candidates = jobs.candidates;
  const { id } = useParams();

  // fetch jobs
  useEffect(() => {
    fetch(`/jobs/${id}`)
      .then((r) => r.json())
      .then((joblist) => {
        setJobs(joblist);
      });
  }, [id]);
  console.log(jobs);
  //   console.log(client);
  //   console.log(candidates);

  return (
    <>
      <JobDetail client={client} jobs={jobs} />
      <CandidateCards candidates={candidates} />
    </>
  );
}

export default SelectedJob;
