import React from "react";
import JobCard from "./JobCard";

function JobCards({ jobs }) {
  // console.log(jobs);
  return (
    <>
      <h1>Job Page</h1>
      <hr />
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.id}
            id={job.id}
            client={job.client_name}
            email={job.email}
            role={job.role}
            urgency={job.urgency}
            quantity={job.quantity}
            skills={job.skills}
          />
        );
      })}
    </>
  );
}

export default JobCards;
