import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InstructorTable from "./components/InstructorTable";
import useAxios from "../../lib/useAxios";
import axios from "../../services/studentsDb";

function InstructorsPage() {
  const [instructor, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/instructor",
  });

  if (error) {
    return error;
  }
  return (
    <Container fluid>
      <Row md={4} lg={8} className="row align-items-center">
        <Col xs={0} lg={2}>
          <h1>Instructors</h1>
        </Col>
        <Col sm={8} md={8} lg={8} xl={10}>
          <Link to="/instructor/add">
            <Button variant="success" size="sm" className="text-nowrap">
              Add instructor
            </Button>
          </Link>
          {"  "}
          <Button
            onClick={() => refetch()}
            variant="success"
            size="sm"
            className="text-nowrap"
          >
            Reload
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <InstructorTable
            instructors={instructor}
            error={error}
            loading={loading}
            refetch={refetch}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default InstructorsPage;
