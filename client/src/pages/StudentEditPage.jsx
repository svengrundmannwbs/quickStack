import { Row, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditStudent from "../components/EditStudent";

function StudentEditPage() {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <Col>
          <h1>Edit StudentsPage {id}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <EditStudent id={id} />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentEditPage;
