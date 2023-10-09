import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InstructorTable from "../components/InstructorTable";
import { useAxiosGet } from "../hooks/useAxios";

function InstructorsPage() {
  const { data, error, loaded } = useAxiosGet(
    import.meta.env.VITE_AXIOS_BASE + "instructor"
  );

  if (error) {
    return error;
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            InstructorPages{"  "}
            <Link to="/instructor/add">
              <Button type="button" className="btn btn-success">
                Add instructor
              </Button>
            </Link>
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <InstructorTable instructors={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default InstructorsPage;
