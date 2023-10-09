import express from "express";
import cors from "cors";
import "./db/server.js";
import { errorHandler } from "./middleware/ErrorHandler.js";
import batchRouter from "./routes/batchRouter.js";
import courseRouter from "./routes/courseRouter.js";
import instructorRouter from "./routes/instructorRouter.js";
import roomRouter from "./routes/roomRouter.js";
import studentRouter from "./routes/studentRouter.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json()); //bodyparser

app.use("/batch", batchRouter);
app.use("/course", courseRouter);
app.use("/instructor", instructorRouter);
app.use("/room", roomRouter);
app.use("/student", studentRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log("backend is running on port: ", port);
});
