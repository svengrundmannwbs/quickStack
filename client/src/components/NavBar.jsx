import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">QuickFullStackApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/student">
              Students
            </Nav.Link>
            <Nav.Link as={Link} to="/instructor">
              Instructors
            </Nav.Link>
            <Nav.Link as={Link} to="/room">
              Rooms
            </Nav.Link>
            <Nav.Link as={Link} to="/course">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/batch">
              Batches
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
