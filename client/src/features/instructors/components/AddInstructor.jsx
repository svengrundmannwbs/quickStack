import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const AddInstructor = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    title: "",
  });
  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const createInstructor = (newInstructor) => {
    axios
      .post(import.meta.env.VITE_AXIOS_BASE + "instructor/add/", {
        newInstructor,
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    const myForm = event.currentTarget;
    if (myForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    createInstructor(form);
    navigate("/instructors");
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formFirstNameText">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setField("firstname", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formLastNameText">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setField("lastname", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formTitleText">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setField("title", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>{""}</Col>
        </Row>
        <Row>
          <Col>
            <Link to="/instructors">
              <Button variant="secondary">Cancel</Button>
            </Link>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <Button variant="primary" onClick={handleSubmit}>
              Add Instructor
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddInstructor;
