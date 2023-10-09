import pool from "../db/server.js";

export const getAllRooms = async (req, res) => {
  let queryString = `SELECT info, type as name FROM rooms LEFT JOIN room_types ON room_types.id = rooms.room_type;`;
  try {
    const result = await pool.query(queryString);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

// TODO: getRoomById

// TODO: updateRoom

// TODO: deleteRoom

// TODO: addManyRooms
