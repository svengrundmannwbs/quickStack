import pool from "../db/server.js";

export const getAllCourses = async (req, res) => {
  let queryString = `SELECT coursename, min_participants, max_participants,lastname,firstname FROM courses LEFT JOIN instructors ON instructors.id = instructor;`;

  try {
    const result = await pool.query(queryString);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

// TODO: getCourseById

// TODO: updateCourse

// TODO: deleteCourse

// TODO: addManyCourses
