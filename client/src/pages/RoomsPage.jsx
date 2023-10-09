import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RoomTable from "../components/RoomTable";
import { useAxiosGet } from "../hooks/useAxios";

function RoomsPage() {
  const { data, error, loaded } = useAxiosGet(
    import.meta.env.VITE_AXIOS_BASE + "room"
  );

  if (error) {
    return error;
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            RoomsPage{"  "}
            <Link to="/room/add">
              <Button type="button" className="btn btn-success">
                Add room
              </Button>
            </Link>
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <RoomTable rooms={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default RoomsPage;
