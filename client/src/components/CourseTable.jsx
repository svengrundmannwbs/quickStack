import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Moment from "moment";

function CourseTable({ courses, loading, error }) {
  Moment.locale("de");

  const deleteCourse = (id) => {
    console.log(id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Course info</th>
            <th>min Participants</th>
            <th>max Participants</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {courses ? (
            courses.map((course, key) => (
              <tr key={key}>
                <td>{course.coursename}</td>
                <td>{course.min_participants}</td>
                <td>{course.max_participants}</td>
                <td>
                  {course.firstname} {course.lastname}
                </td>
                <td>
                  <Link to={"/course/edit/" + course.id}>
                    <Button type="button" className="btn btn-warning">
                      Edit
                    </Button>
                  </Link>{" "}
                  <Link to={"/course/delete/" + course.id}>
                    <Button type="button" className="btn btn-danger">
                      Del
                    </Button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}></td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default CourseTable;
