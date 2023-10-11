import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseTable from "../components/CourseTable";
import { useAxiosGet } from "../hooks/useAxios";

function CoursesPage() {
  const { data, error, loaded } = useAxiosGet(
    import.meta.env.VITE_AXIOS_BASE + "course"
  );

  if (error) {
    return error;
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Courses{"  "}
            <Link to="/course/add">
              <Button type="button" className="btn btn-success">
                Add Course
              </Button>
            </Link>
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <CourseTable courses={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default CoursesPage;
