import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditBar({ title, btnText, refetch }) {
  return (
    <Row md={4} lg={8} className="row align-items-center">
      <Col xs={0} lg={2}>
        <h3>{title}</h3>
      </Col>
      <Col sm={8} md={8} lg={8} xl={10}>
        <Button
          as={Link}
          to="add"
          variant="success"
          size="sm"
          className="text-nowrap"
        >
          {btnText}
        </Button>
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
  );
}

export default EditBar;
