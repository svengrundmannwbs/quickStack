import express from "express";
import * as studentController from "../controller/studentController.js";

const studentRouter = express.Router();

studentRouter.route("/").get(studentController.getAllStudents);
studentRouter.route("/add").post(studentController.addStudent);
studentRouter.route("/:id").get(studentController.getStudentById);
studentRouter.route("/update/:id").put(studentController.updateStudent);
studentRouter.route("/delete/:id").delete(studentController.deleteStudent);

export default studentRouter;
