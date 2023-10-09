import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const EditStudent = ({ id }) => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    city: "",
  });
  const navigate = useNavigate();

  function updateStudent(updateStudent) {
    axios
      .put(import.meta.env.VITE_AXIOS_BASE + `student/update/${id}`, {
        updateStudent,
      })
      .then()
      .catch((error) => {
        console.log(error);
      });
  }

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
    updateStudent(form);
    navigate("/students");
    alert(`Student with id ${id} successfully edited`);
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_AXIOS_BASE + `student/${id}`)
      .then((res) => setForm(res.data))
      .catch((error) => {
        setResponse((actual) => (actual = error.response.data));
      });
  }, []);

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
                onChange={(e) => setField("firstName", e.target.value)}
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
                onChange={(e) => setField("lastName", e.target.value)}
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

export default EditStudent;
