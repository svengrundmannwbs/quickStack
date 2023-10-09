import pool from "../db/server.js";

//TODO: checkout package "sequelize" for automation of crud operations

//GET all
export const getAllInstructors = async (req, res) => {
  let queryString = `SELECT * FROM instructors ORDER BY id DESC`;
  try {
    const result = await pool.query(queryString);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

//GET single
export const getInstructorById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM instructors WHERE id = $1;`,
      [id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ message: "instructor id unknown" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

//POST single
export const addInstructor = async (req, res) => {
  const { lastname, firstname, title } = req.body.newInstructor;
  try {
    const result = await pool.query(
      "INSERT INTO instructors (lastname, firstname, title) VALUES ($1, $2, $3) RETURNING *;",
      [lastname, firstname, title]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

//PUT single
export const updateInstructor = async (req, res) => {
  const { id } = req.params;
  const { lastname, firstname, title } = req.body.updateInstructor;
  try {
    const result = await pool.query(
      "UPDATE instructors SET lastname = $1, firstname = $2, title = $3 WHERE id = $4 RETURNING *;",
      [lastname, firstname, title, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "something broke" });
    console.log(err);
  }
};

//DELETE single
export const deleteInstructor = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM instructors WHERE ID = $1;", [id]);
    res.status(200).json({ message: "Instructor deleted" });
  } catch (err) {
    res.status(500).json({ message: "something broke" });
    console.log(err);
  }
};
