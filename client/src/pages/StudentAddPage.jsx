import { Row, Col, Container } from "react-bootstrap";
import AddStudent from "../components/AddStudent";

function StudentAddPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Student AddPage</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddStudent />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentAddPage;
