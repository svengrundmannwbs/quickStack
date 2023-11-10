import { Row, Container, Col, Button } from "react-bootstrap";
import StudentTable from "./components/StudentTable";
import EditBar from "../../components/EditBar";
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
      <EditBar title={"Students"} btnText={"Add"} refetch={refetch} />
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
