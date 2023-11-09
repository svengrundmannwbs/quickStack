import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Moment from "moment";

function RoomTable({ rooms, loading, error }) {
  Moment.locale("de");

  const deleteRoom = (id) => {
    console.log(id);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !error && rooms && (
        <Table striped>
          <thead>
            <tr>
              <th>Room info</th>
              <th>Room type</th>
            </tr>
          </thead>
          <tbody>
            {rooms ? (
              rooms.map((room, key) => (
                <tr key={key}>
                  <td>{room.info}</td>
                  <td>{room.name}</td>
                  <td>
                    <Link to={"/room/edit/" + room.id}>
                      <Button type="button" className="btn btn-warning">
                        Edit
                      </Button>
                    </Link>{" "}
                    <Link to={"/room/delete/" + room.id}>
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
      )}
    </>
  );
}

export default RoomTable;
