import { Row, Container, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

function Unauthorized() {
  const { isLoggedIn, role } = useAuth();
  return (
    <Container>
      <Row>
        <Col>
          <h2>NotImplemented</h2>
          <div>Role: {role}</div>
          <div>isLoggedin: {isLoggedIn}</div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Unauthorized;
