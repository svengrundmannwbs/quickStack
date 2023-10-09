import pool from "../db/server.js";

//GET all
export const getAllStudents = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM students ORDER BY id DESC;`);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

//GET single
export const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM students WHERE id = $1;`, [
      id,
    ]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "student id unknown" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

//POST single
export const addStudent = async (req, res) => {
  const { lastname, firstname, city } = req.body.newStudent;
  try {
    const result = await pool.query(
      "INSERT INTO students ( firstname, lastname, city) VALUES ($1, $2, $3) RETURNING *;",
      [firstname, lastname, city]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something broke" });
  }
};

//PUT single
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { lastname, firstname, city } = req.body.updateStudent;
  try {
    const result = await pool.query(
      "UPDATE students SET lastname = $1, firstname = $2, city = $3 WHERE id = $4 RETURNING *;",
      [lastname, firstname, city, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "something broke" });
    console.log(err);
  }
};

//DELETE single
export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM students WHERE ID = $1;", [id]);
    res.status(200).json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: "something broke" });
    console.log(err);
  }
};
