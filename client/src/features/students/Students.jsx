import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentTable from "./components/StudentTable";
import useAxios from "../../lib/useAxios";
import axios from "../../services/studentsDb";

function StudentsPage() {
  const [students, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/student",
  });

  const handleDelete = async (studentId) => {
    await axios.delete(
      import.meta.env.VITE_AXIOS_BASE + `student/delete/${studentId}`
    );
    alert(`Student with id ${studentId} successfully deleted`);
  };

  return (
    <Container fluid>
      <Row md={4} lg={8} className="row align-items-center">
        <Col xs={0} lg={2}>
          <h1>Students</h1>
        </Col>
        <Col sm={8} md={8} lg={8} xl={10}>
          <Button
            as={Link}
            to="add"
            variant="success"
            size="sm"
            className="text-nowrap"
          >
            Add student
          </Button>
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
          <StudentTable
            students={students}
            error={error}
            loading={loading}
            refetch={refetch}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentsPage;
