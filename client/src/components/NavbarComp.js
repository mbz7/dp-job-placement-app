import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/data_piper_logo.png";

function NavbarComp() {
  return (
    <>
      <Navbar className="nav-styles">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
