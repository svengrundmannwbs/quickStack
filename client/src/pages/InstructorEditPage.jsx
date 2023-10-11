import { Row, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddEditInstructor from "../components/AddEditInstructor";

function InstructorEditPage() {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <Col>
          <AddEditInstructor id={id} />
        </Col>
      </Row>
    </Container>
  );
}

export default InstructorEditPage;
