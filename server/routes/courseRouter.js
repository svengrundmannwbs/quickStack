import express from "express";
import * as courseController from "../controller/courseController.js";

const courseRouter = express.Router();

courseRouter.route("/").get(courseController.getAllCourses);

// courseRouter
//   .route("/:id")
//   .get(courseController.getCourseById)
//   .put(courseController.updateCourse)
//   .delete(courseController.deleteCourse);
// courseRouter.route("/addMany").post(courseController.addManyCourses);

export default courseRouter;
