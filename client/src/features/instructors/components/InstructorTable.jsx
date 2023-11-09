import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function InstructorTable({ instructors, error, loading, refetch }) {
  const handleDelete = async (instructorId) => {
    await axios.delete(
      import.meta.env.VITE_AXIOS_BASE + `instructor/delete/${instructorId}`
    );
    alert(`Instructor with id ${instructorId} successfully deleted`);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !error && instructors && (
        <Table striped>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructors ? (
              instructors.map((instructor, key) => (
                <tr key={key}>
                  <td>{instructor.firstname}</td>
                  <td>{instructor.lastname}</td>
                  <td>{instructor.title}</td>
                  <td>
                    <Link to={"/instructor/edit/" + instructor.id}>
                      <Button type="button" className="btn btn-warning">
                        Edit
                      </Button>
                    </Link>{" "}
                    <Button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(instructor.id)}
                    >
                      Del
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>No Instructors found</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default InstructorTable;
