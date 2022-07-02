import React from "react";
import JobCard from "./JobCard";
import Col from "react-bootstrap/Col";

function JobCards({ jobs }) {
  return (
    <>
      <Col className="mt-5">
        {/* iterate through jobs and assign props */}
        {jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              id={job.id}
              client={job.client_name}
              contact={job.contact_name}
              email={job.email}
              role={job.role}
              urgency={job.urgency}
              quantity={job.quantity}
              skills={job.skills}
            />
          );
        })}
      </Col>
    </>
  );
}

export default JobCards;
