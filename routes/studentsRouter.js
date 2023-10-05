import express from "express";
import * as studentsController from "../controllers/student.js";

const studentsRouter = express.Router();

studentsRouter
  .route("/")
  .get(studentsController.getAllStudents)
  .post(studentsController.addStudent);

studentsRouter
  .route("/:id")
  .get(studentsController.getStudentById)
  .put(studentsController.updateStudent)
  .delete(studentsController.deleteStudent);

studentsRouter.patch("/:id/addTag", studentsController.addStudent);

export default studentsRouter;
