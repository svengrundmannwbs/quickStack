import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const EditInstructor = ({ id }) => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    city: "",
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const navigate = useNavigate();

  function updateInstructor(updateInstructor) {
    axios
      .put(import.meta.env.VITE_AXIOS_BASE + `instructor/update/${id}`, {
        updateInstructor,
      })
      .then()
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    const myForm = event.currentTarget;
    if (myForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    updateInstructor(form);
    navigate("/instructors");
    alert(`Instructor with id ${id} successfully edited`);
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_AXIOS_BASE + `instructor/${id}`)
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
                defaultValue={form.lastname}
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
                defaultValue={form.title}
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
              Save changes
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EditInstructor;
