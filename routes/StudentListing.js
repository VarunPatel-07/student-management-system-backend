const express = require("express");
const StudentList = require("../models/StudentListing");
const routes = express.Router();

routes.post("/addStudent", async (req, res) => {
  const { EnrolmentNo, StudentName, division, branch, ClassCoordinator, Grade } = req.body;
  const studentInfo = await StudentList.create({
    EnrolmentNo,
    branch,
    division,
    studentName: StudentName,
    ClassCoordinator,
    Grade,
  });

  return res.status(200).json({
    message: "the student has been added successfully",
    data: studentInfo,
    success: true,
  });
});
routes.get("/fetchStudentsInfo", async (req, res) => {
  const studentInfo = await StudentList.find();
  return res.status(200).json({
    message: "the student info has been fetched successfully",
    data: studentInfo,
    success: true,
  });
});
routes.put("/editStudent", async (req, res) => {
  const { studentId } = req.query;
  const { EnrolmentNo, StudentName, division, branch, ClassCoordinator, Grade } = req.body;

  // Build the update object with correct field names
  const obj = {
    ...(EnrolmentNo && { EnrolmentNo }),
    ...(StudentName && { studentName: StudentName }), // Fix field name
    ...(division && { division }),
    ...(branch && { branch }),
    ...(ClassCoordinator && { ClassCoordinator }),
    ...(Grade && { Grade }),
  };

  console.log("Update Object:", obj);

  // Perform the update
  const updatedInfo = await StudentList.findByIdAndUpdate(studentId, { $set: obj }, { new: true });
  console.log("Updated Student Info:", updatedInfo);

  return res.status(200).json({
    message: "Student information has been updated successfully",
    data: updatedInfo,
    success: true,
  });
});

module.exports = routes;
