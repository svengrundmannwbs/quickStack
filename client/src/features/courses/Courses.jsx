import { Row, Container, Col, Button } from "react-bootstrap";
import EditBar from "../../components/EditBar";
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
      <EditBar title={"Courses"} btnText={"Add"} refetch={refetch} />
      <Row>
        <Col>
          <CourseTable courses={courses} error={error} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}

export default CoursesPage;
