import { Row, Container, Col, Button } from "react-bootstrap";
import EditBar from "../../components/EditBar";
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
      <EditBar title={"Students"} btnText={"Add"} refetch={refetch} />
      <Row>
        <Col>
          <BatchTable batches={batches} error={error} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}

export default BatchesPage;
