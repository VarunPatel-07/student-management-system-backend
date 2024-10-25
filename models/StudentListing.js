const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentListSchema = new Schema({
  EnrolmentNo: {
    type: String,
    trim: true,
    required: true,
    unique: true, // Ensures enrolment number is unique
  },
  studentName: {
    type: String,
    trim: true,
    required: true,
  },
  division: {
    type: String,
    trim: true,
    required: true,
  },
  branch: {
    type: String,
    trim: true,
    required: true,
  },
  Grade: {
    type: String,
    trim: true,
    required: true,
  },
  ClassCoordinator: {
    type: String,
    trim: true,
    required: true,
  },
});

// Create the model
const StudentList = mongoose.model("StudentList", StudentListSchema);

module.exports = StudentList;
