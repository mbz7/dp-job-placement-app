import React from "react";
import Priority from "./Priority";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function JobCard({ id, client, email, role, urgency, quantity, skills }) {
  const urgencyStyle = () => {
    if (urgency == "High") {
      return <p className="text-danger">{urgency}</p>;
    } else if (urgency == "Medium") {
      return <p className="text-warning">{urgency}</p>;
    } else {
      return <p className="text-success">{urgency}</p>;
    }
  };

  return (
    <>
      <div className="p-3 mb-4 border shadow-sm ">
        <h3>{client}</h3>
        <p>{email}</p>
        <p>{role}</p>
        <Priority urgency={urgency} />
        <Badge bg="primary" pill>
          {quantity}
        </Badge>
        {/* <p>{quantity}</p> */}
        <p>{skills}</p>
        <Button
          variant="dark"
          className="text-right mt-2 btn-md mb-1 btn-lg"
          as={Link}
          to={`/jobs/${id}`}
        >
          Add/View Candidates
        </Button>
      </div>
    </>
  );
}

export default JobCard;
