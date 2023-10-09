import express from "express";
import * as roomController from "../controller/roomController.js";

const roomRouter = express.Router();

roomRouter.route("/").get(roomController.getAllRooms);

// roomRouter
//   .route("/:id")
//   .get(roomController.getRoomById)
//   .put(roomController.updateRoom)
//   .delete(roomController.deleteRoom);
// roomRouter.route("/addMany").post(roomController.addManyRooms);

export default roomRouter;
