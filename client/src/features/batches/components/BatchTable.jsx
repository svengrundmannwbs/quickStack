import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Moment from "moment";

function BatchTable({ batches, loading, error }) {
  Moment.locale("de");

  const deleteBatch = (id) => {
    console.log(id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Batch short</th>
            <th>Batch type</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {batches ? (
            batches.map((batch, key) => (
              <tr key={key}>
                <td>{batch.shortname}</td>
                <td>{batch.name}</td>
                <td>{Moment(batch.start_date).format("DD.MM.yyyy")}</td>
                <td>{Moment(batch.end_date).format("DD.MM.yyyy")}</td>
                <td>
                  <Link to={"/batch/edit/" + batch.id}>
                    <Button type="button" className="btn btn-warning">
                      Edit
                    </Button>
                  </Link>{" "}
                  <Link to={"/batch/delete/" + batch.id}>
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

export default BatchTable;
