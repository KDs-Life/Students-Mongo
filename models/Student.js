import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim: true,
  },
  first_name: {
    type: String,
    required: [true, "First-Name is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "E-Mail is required"],
    unique: true,
    trim: true,
  },
});

export default mongoose.model("Student", studentSchema);
