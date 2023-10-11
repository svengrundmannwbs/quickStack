import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentTable from "../components/StudentTable";

function StudentsPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Students{"  "}
            <Link to="/student/add">
              <Button type="button" className="btn btn-success">
                Add student
              </Button>
            </Link>
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <StudentTable />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentsPage;
