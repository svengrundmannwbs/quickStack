import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

const AddEditInstructor = ({ id }) => {
  const isAddMode = !id;
  const navigate = useNavigate();

  const createInstructor = (newInstructor) => {
    setTimeout(() => {
      axios
        .post(import.meta.env.VITE_AXIOS_BASE + "instructor/add/", {
          newInstructor,
        })
        .then(navigate("/instructor"))
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };

  function updateInstructor(updateInstructor) {
    setTimeout(() => {
      axios
        .put(import.meta.env.VITE_AXIOS_BASE + `instructor/update/${id}`, {
          updateInstructor,
        })
        .then(navigate("/instructor"))
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }

  const schema = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    title: yup.string().trim().required(),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    title: "",
  };

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      createInstructor(fields, setSubmitting);
    } else {
      updateInstructor(fields, setSubmitting);
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
        const [instructor, setInstructor] = useState({});

        useEffect(() => {
          if (!isAddMode) {
            axios
              .get(import.meta.env.VITE_AXIOS_BASE + `instructor/${id}`)
              .then((response) => {
                const fields = ["firstname", "lastname", "title"];
                fields.forEach((field) =>
                  setFieldValue(field, response.data[field], false)
                );
              })
              .catch((error) => {
                console.log("ERROR: ", error);
              });
            setInstructor(instructor);
          }
        }, []);

        return (
          <Form>
            <h1>{isAddMode ? "Add Instructor" : `Edit Instructor ${id}`}</h1>
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
              <label>Title</label>
              <Field
                name="title"
                type="text"
                className={
                  "form-control" +
                  (errors.title && touched.title ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="title"
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
                  to={isAddMode ? "/instructor" : "/instructor"}
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

export default AddEditInstructor;
