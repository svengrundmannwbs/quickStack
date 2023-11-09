import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BatchTable from "./components/BatchTable";
import useAxios from "../../lib/useAxios";
import axios from "../../services/studentsDb";

function BatchesPage() {
  const [batches, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/batch",
  });

  return (
    <Container fluid>
      <Row md={4} lg={8} className="row align-items-center">
        <Col xs={0} lg={2}>
          <h1>Batches</h1>
        </Col>
        <Col sm={8} md={8} lg={8} xl={10}>
          <Link to="/batch/add">
            <Button variant="success" size="sm" className="text-nowrap">
              Add batch
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
          <BatchTable batches={batches} error={error} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}

export default BatchesPage;
