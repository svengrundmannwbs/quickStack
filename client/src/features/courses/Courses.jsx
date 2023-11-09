import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseTable from "./components/CourseTable";
import useAxios from "../../lib/useAxios";
import axios from "../../services/studentsDb";

function CoursesPage() {
  const [courses, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/course",
  });

  if (error) {
    return error;
  }
  return (
    <Container fluid>
      <Row md={4} lg={8} className="row align-items-center">
        <Col xs={0} lg={2}>
          <h1>Courses</h1>
        </Col>
        <Col sm={8} md={8} lg={8} xl={10}>
          <Link to="/course/add">
            <Button variant="success" size="sm" className="text-nowrap">
              Add course
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
          <CourseTable courses={courses} error={error} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}

export default CoursesPage;
