import React, { useState, useEffect } from "react";
import JobCards from "./JobCards";
import SelectedJob from "./SelectedJob";

export default function Home() {
  const [jobs, setJobs] = useState([]);

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
      <JobCards jobs={jobs} />
      {/* <SelectedJob /> */}
    </>
  );
}
