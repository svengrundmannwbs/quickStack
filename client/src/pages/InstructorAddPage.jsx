import { Row, Col, Container } from "react-bootstrap";
import AddEditInstructor from "../components/AddEditInstructor";

function InstructorAddPage() {
  return (
    <Container>
      <Row>
        <Col>
          <AddEditInstructor />
        </Col>
      </Row>
    </Container>
  );
}

export default InstructorAddPage;
