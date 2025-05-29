import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const path = useLocation();
  const navigater = useNavigate();
  const loginUser = sessionStorage.getItem("name");
  const token = sessionStorage.getItem("token");

  const handleLogout = () => {
    window.confirm("Are you sure");
    navigater("/login-form");
    sessionStorage.clear("name");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/"
                className={path.pathname === `/` ? "text-primary" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/profile"
                className={path.pathname === `/profile` ? "text-primary" : ""}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/myform"
                className={path.pathname === `/myform` ? "text-primary" : ""}
              >
                Signup
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login-form"
                className={
                  path.pathname === `/login-form` ? "text-primary" : ""
                }
              >
                Login
              </Nav.Link>
            </Nav>
            {loginUser && (
              <div style={{ marginRight: "20px" }}>
                <h4>Hello , {loginUser}</h4>
              </div>
            )}
            {token && (
              <Button variant="outline-success" onClick={handleLogout}>
                Loguut
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
