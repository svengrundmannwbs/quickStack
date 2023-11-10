import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

const AddEditStudent = ({ id }) => {
  const isAddMode = !id;
  const navigate = useNavigate();

  const createStudent = (newStudent) => {
    setTimeout(() => {
      axios
        .post(import.meta.env.VITE_AXIOS_BASE + "student/add/", {
          newStudent,
        })
        .then(navigate("/student"))
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };

  function updateStudent(updateStudent) {
    setTimeout(() => {
      axios
        .put(import.meta.env.VITE_AXIOS_BASE + `student/update/${id}`, {
          updateStudent,
        })
        .then(navigate("/student"))
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }

  const schema = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    city: yup.string().trim().required(),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    city: "",
  };

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      createStudent(fields, setSubmitting);
    } else {
      updateStudent(fields, setSubmitting);
    }
  }

  return (
    //enableReinitialize?
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        const [student, setStudent] = useState({});

        useEffect(() => {
          if (!isAddMode) {
            axios
              .get(import.meta.env.VITE_AXIOS_BASE + `student/${id}`)
              .then((response) => {
                const fields = ["firstname", "lastname", "city"];
                fields.forEach((field) =>
                  setFieldValue(field, response.data[field], false)
                );
              })
              .catch((error) => {
                console.log("ERROR: ", error);
              });
            setStudent(student);
          }
        }, []);

        return (
          <Form>
            <h1>{isAddMode ? "Add Student" : `Edit Student ${id}`}</h1>
            <Row className="mb-3">
              <label>First Name</label>
              <Field
                name="firstname"
                type="text"
                className={
                  "form-control" +
                  (errors.firstname && touched.firstname ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="invalid-feedback"
              />
            </Row>
            <Row>
              <label>Last Name</label>
              <Field
                name="lastname"
                type="text"
                className={
                  "form-control" +
                  (errors.lastname && touched.lastname ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="invalid-feedback"
              />
            </Row>
            <Row>
              <label>City</label>
              <Field
                name="city"
                type="text"
                className={
                  "form-control" +
                  (errors.city && touched.city ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="city"
                component="div"
                className="invalid-feedback"
              />
            </Row>
            <Row>
              <Col>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Save
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                </button>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <Link
                  to={isAddMode ? "/students" : "/students"}
                  className="btn btn-link"
                >
                  <button className="btn btn-secondary">Cancel</button>
                </Link>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEditStudent;
