import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");
  const token = sessionStorage.getItem("token");
  const handleLogout = () => {
    window.confirm("Are You Sure");
    sessionStorage.clear();
    navigate("/login");
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
                to="/signup"
                className={path.pathname === `/signup` ? "text-primary" : ""}
              >
                Signup
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/login"
                className={path.pathname === `/login` ? "text-primary" : ""}
              >
                Login
              </Nav.Link>
              <br />
              {name && (
                <div style={{ marginLeft: "100px", marginRight: "10px" }}>
                  <h4>Welcome {name}</h4>
                </div>
              )}
              {token && (
                <Button variant="info" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
