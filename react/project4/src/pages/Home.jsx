import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Slider from "../components/Slider";
import { Card } from "react-bootstrap";
import Carddesign from "../components/Carddesign";
import ImagesCard from "../components/ImagesCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      style={{
        border: "2px solid white",
        borderRadius: "10px",
        marginTop: "15px",
      }}
    >
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ backgroundColor: "#7367F0" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "700", color: "#161c31" }}
          >
            Awesome Mart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{ color: "#161c31" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "#161c31" }}>
                Link
              </Nav.Link>
              <NavDropdown
                title="Category"
                id="basic-nav-dropdown"
                style={{ color: "#161c31" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Men Clothes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Women Clothes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Children Clothes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Slider */}
      <Slider />
      <br />
      <h1 className="text-center text-white">---- All Products ---- </h1>
      <br />
      <div
        className="d-flex justify-content-around flex-wrap"
        style={{ gap: "20px" }}
      >
        <Carddesign />
      </div>
      <br />
      <div className="container">
        <ImagesCard />
      </div>
      <br />
      <br />
      <div className="m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
