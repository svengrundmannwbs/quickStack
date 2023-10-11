import { Row, Col, Container } from "react-bootstrap";
import AddEditStudent from "../components/AddEditStudent";

function StudentAddPage() {
  return (
    <Container>
      <Row>
        <Col>
          <AddEditStudent />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentAddPage;
