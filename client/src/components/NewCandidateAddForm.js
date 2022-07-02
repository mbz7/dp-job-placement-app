import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NewCandidateAddForm({ jobId, onAddNewCandidate }) {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCityState, setNewCityState] = useState("");

  // POST new candidate
  function handleCandidateSubmit(e) {
    // e.preventDefault();
    const data = {
      job_id: jobId,
      first_name: newFirstName,
      last_name: newLastName,
      phone: newPhone,
      city_state: newCityState,
    };
    fetch("/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newCandidate) => onAddNewCandidate(newCandidate));
  }

  return (
    <>
      <Card className="mb-2 candidate-form-container">
        <Card.Body>
          <Form>
            <h4 className="text-center pb-3 candidate-form-text">
              Add A New Candidate For This Job
            </h4>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setNewFirstName(e.target.value)}
                type="name"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group
              onChange={(e) => setNewLastName(e.target.value)}
              className="mb-3"
              controlId="formBasicLastName"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group
              onChange={(e) => setNewPhone(e.target.value)}
              className="mb-3"
              controlId="formBasicPhoneNumber"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="name" placeholder="Enter Phone Number" />
            </Form.Group>
            <Form.Group
              onChange={(e) => setNewCityState(e.target.value)}
              className="mb-3"
              controlId="formBasicCityState"
            >
              <Form.Label>City, State</Form.Label>
              <Form.Control type="name" placeholder="Enter City, State" />
            </Form.Group>
            <Button
              onClick={handleCandidateSubmit}
              variant="primary"
              type="submit"
              className="w-50 candidate-form-button"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewCandidateAddForm;
