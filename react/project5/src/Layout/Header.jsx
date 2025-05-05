import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const data1 = "Zeeshan Khan";
  const word = "Hello";
  const DataId = "This is All Product Page";
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={`/about/${data1}/${word}`}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={`/product`}>
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/galery">
                Galery
              </Nav.Link>
              <Nav.Link as={Link} to="/usestate">
                useState
              </Nav.Link>

              <Nav.Link as={Link} to="/myform">
                My Form
              </Nav.Link>
              <Nav.Link as={Link} to="/hform">
                HW Form
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
