import { Row, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditInstructor from "../components/EditInstructor";

function InstructorEditPage() {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <Col>
          <h1>Instructor EditPage {id}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <EditInstructor id={id} />
        </Col>
      </Row>
    </Container>
  );
}

export default InstructorEditPage;
