import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const AddStudent = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    city: "",
  });

  const createStudent = (newStudent) => {
    console.log(newStudent);
    axios
      .post(import.meta.env.VITE_AXIOS_BASE + "student/add/", {
        newStudent,
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const handleSubmit = (event) => {
    const myForm = event.currentTarget;
    if (myForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    createStudent(form);
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
                defaultValue={form.firstname}
                onChange={(e) => setField("firstname", e.target.value)}
                required
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
                defaultValue={form.lastname}
                onChange={(e) => setField("lastname", e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formCityText">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                defaultValue={form.city}
                onChange={(e) => setField("city", e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>{""}</Col>
        </Row>
        <Row>
          <Col>
            <Link to="/students">
              <Button variant="secondary">Cancel</Button>
            </Link>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <Button variant="primary" onClick={handleSubmit}>
              Save changes
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddStudent;
