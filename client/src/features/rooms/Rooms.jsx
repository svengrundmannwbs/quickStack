import { Row, Container, Col, Button } from "react-bootstrap";
import EditBar from "../../components/EditBar";
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
      <EditBar title={"Rooms"} btnText={"Add"} refetch={refetch} />
      <Row>
        <Col>
          <RoomTable rooms={rooms} error={error} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}

export default RoomsPage;
