import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BatchTable from "../components/BatchTable";
import { useAxiosGet } from "../hooks/useAxios";

function BatchesPage() {
  const { data, error, loaded } = useAxiosGet(
    import.meta.env.VITE_AXIOS_BASE + "batch"
  );

  if (error) {
    return error;
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Batches{"  "}
            <Link to="/batch/add">
              <Button type="button" className="btn btn-success">
                Add Batch
              </Button>
            </Link>
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <BatchTable batches={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default BatchesPage;
