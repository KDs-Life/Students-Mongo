import express from "express";
import "./DB/server.js";
import studentsRouter from "./routes/studentsRouter.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/students", studentsRouter);

app.listen(port, () => console.log(`server is running on port:${port}`));
