import { Row, Container, Col } from "react-bootstrap";

function StartPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>StartPage</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Current working options:</p>
          <ul>
            <li>Students (all CRUD Operations)</li>
            <li>Instructors (all CRUD Operations)</li>
            <li>Rooms (only R)</li>
            <li>Courses (only R)</li>
            <li>Batches (only R)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default StartPage;
