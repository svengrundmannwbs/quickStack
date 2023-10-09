import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function StudentTable() {
  const [students, setStudents] = useState();

  const getStudents = async () => {
    await axios
      .get(import.meta.env.VITE_AXIOS_BASE + `student`)
      .then((res) => setStudents(res.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getStudents();
  }, [students]);

  const handleDelete = async (studentId) => {
    await axios.delete(
      import.meta.env.VITE_AXIOS_BASE + `student/delete/${studentId}`
    );
    alert(`Student with id ${studentId} successfully deleted`);
  };

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students ? (
            students.map((student, key) => (
              <tr key={key}>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.city}</td>
                <td>
                  <Link to={"/student/edit/" + student.id}>
                    <Button type="button" className="btn btn-warning">
                      Edit
                    </Button>
                  </Link>{" "}
                  <Button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    Del
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No Students found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default StudentTable;
