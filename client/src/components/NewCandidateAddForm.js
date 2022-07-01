import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import { Form, Button, Col, Stack } from "react-bootstrap";

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
      <Card bg="light" className="mb-2">
        <Card.Body>
          <Form>
            <h4 className="text-center pb-3">
              Add A New Candidate For This Job
            </h4>
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
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* <Col className="mb-3">
        <h5 className="h5-lb">Add An Image Below</h5>
      </Col>
      <hr />
      <Stack direction="vertical" gap={3}>
        <Col>
          <Form.Label htmlFor="inputPassword5" className="">
            Image Url
          </Form.Label>
          <Form.Control
            onChange={(e) => setNewImageUrl(e.target.value)}
            size="sm"
            type="text"
            placeholder="Add Image URL Here..."
            className="p-2 mb-3"
          />
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5" className="">
            Image Title
          </Form.Label>
          <Form.Control
            onChange={(e) => setNewImageTitle(e.target.value)}
            size="sm"
            type="text"
            placeholder="Add Title"
            className="p-2 mb-3"
          />
        </Col>
        <div className="vr m-2" />
        <Col lg={2}>
          <Button
            className=" mx-auto btn-lg w-100"
            variant="dark"
            onClick={handleImageSubmit}
          >
            SUBMIT
          </Button>
        </Col>
      </Stack> */}
    </>
  );
}

export default NewCandidateAddForm;
