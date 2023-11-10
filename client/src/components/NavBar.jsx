import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState("default");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">QuickFullStackApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="sub-nav me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            activeKey={active}
            onSelect={(selectedKey) => setActive(selectedKey)}
          >
            <Nav.Link as={Link} to="/student" eventKey="/student">
              Students
            </Nav.Link>
            <Nav.Link as={Link} to="/instructor" eventKey="/instructor">
              Instructors
            </Nav.Link>
            <Nav.Link as={Link} to="/room" eventKey="/room">
              Rooms
            </Nav.Link>
            <Nav.Link as={Link} to="/course" eventKey="/course">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/batch" eventKey="/batch">
              Batches
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
