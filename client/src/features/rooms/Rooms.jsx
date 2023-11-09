import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RoomTable from "./components/RoomTable";
import useAxios from "../../lib/useAxios";
import axios from "../../services/studentsDb";

function RoomsPage() {
  const [rooms, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/room",
  });

  if (error) {
    return error;
  }
  return (
    <Container fluid>
      <Row md={4} lg={8} className="row align-items-center">
        <Col xs={0} lg={2}>
          <h1>Rooms</h1>
        </Col>
        <Col sm={8} md={8} lg={8} xl={10}>
          <Link to="/room/add">
            <Button variant="success" size="sm" className="text-nowrap">
              Add room
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
          <RoomTable rooms={rooms} error={error} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}

export default RoomsPage;
