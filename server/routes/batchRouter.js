import express from "express";
import * as batchController from "../controller/batchController.js";

const batchRouter = express.Router();

batchRouter.route("/").get(batchController.getAllBatches);

// batchRouter
//   .route("/:id")
//   .get(batchController.getBatchById)
//   .put(batchController.updateBatch)
//   .delete(batchController.deleteBatch);
// batchRouter.route("/addMany").post(batchController.addManyBatches);

export default batchRouter;
