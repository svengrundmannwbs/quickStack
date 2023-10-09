import { Row, Col, Container } from "react-bootstrap";
import AddInstructor from "../components/AddInstructor";

function InstructorAddPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Instructor AddPage</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddInstructor />
        </Col>
      </Row>
    </Container>
  );
}

export default InstructorAddPage;
