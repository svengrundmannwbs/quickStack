import express from "express";
import * as instructorController from "../controller/instructorController.js";

const instructorRouter = express.Router();

instructorRouter.route("/").get(instructorController.getAllInstructors);
instructorRouter.route("/add").post(instructorController.addInstructor);
instructorRouter.route("/:id").get(instructorController.getInstructorById);
instructorRouter
  .route("/update/:id")
  .put(instructorController.updateInstructor);
instructorRouter
  .route("/delete/:id")
  .delete(instructorController.deleteInstructor);

export default instructorRouter;
