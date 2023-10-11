import { Row, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddEditStudent from "../components/AddEditStudent";

function StudentEditPage() {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <Col>
          <AddEditStudent id={id} />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentEditPage;
