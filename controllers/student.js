import Student from "../models/Student.js";

export const getAllStudents = async (req, res, next) => {
  try {
    const student = await Student.find();
    if (!student.length) {
      throw { statusCode: 404, message: "student not found" };
    }
    res.json(student);
  } catch (error) {
    next(error);
  }
};
export const getStudentById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    if (!student) {
      throw { statusCode: 404, message: "student not found" };
    }
    res.send(student);
  } catch (error) {
    next(error);
  }
};

export const addStudent = async (req, res, next) => {
  try {
    const { name, first_name, email } = req.body;

    const newStudent = await Student.create({
      name,
      first_name,
      email,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

export const updateStudent = async (req, res, next) => {
  const { id } = req.params;
  const { name, first_name, email } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, first_name, email },
      { new: true }
    );
    if (!updatedStudent) {
      throw { statusCode: 404, message: "student not found" };
    }
    res.json(updatedStudent);
  } catch (error) {
    next(error);
  }
};

export const addTagToStudent = async (req, res, next) => {
  const { id } = req.params;
  const { tag } = req.body;

  try {
    const student = await Student.findById(id);
    if (!student) {
      throw { statusCode: 404, message: "Student not found" };
    }

    student.tags.push(tag);
    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    next(error);
  }
};

export const deleteStudent = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      throw { statusCode: 404, message: "Student not found" };
    }
    res.status(200).json({ message: "Student was deleted" });
  } catch (error) {
    next(error);
  }
};
