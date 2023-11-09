import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";

function StudentTable({ students, error, loading, refetch }) {
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !error && students && (
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
      )}
      {!loading && !error && !students && (
        <Alert variant="success">No entries found</Alert>
      )}
    </>
  );
}

export default StudentTable;
