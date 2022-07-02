import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import logo from "../assets/data_piper_logo.png";

function NavbarComp() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Navbar className="nav-styles">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
