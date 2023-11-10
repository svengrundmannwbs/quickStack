import { Row, Container, Col, Button } from "react-bootstrap";
import EditBar from "../../components/EditBar";
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
      <EditBar title={"Instructors"} btnText={"Add"} refetch={refetch} />
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
