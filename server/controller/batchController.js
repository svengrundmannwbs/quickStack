import pool from "../db/server.js";

export const getAllBatches = async (req, res) => {
  let queryString = `SELECT shortname, name, start_date, end_date FROM batches;`;
  try {
    const result = await pool.query(queryString);
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "something broke" });
  }
};

// TODO: getBatchById

// TODO: updateBatch

// TODO: deleteBatch

// TODO: addManyBatches
