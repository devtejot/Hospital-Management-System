const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
  getAllAppointmentsController,
  deleteUserController,
} = require("../controllers/adminCtrl");
const userModel = require("../models/userModels");

// get all doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// get all users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// post account status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

//get all appointment
router.get("/getAllAppointments", authMiddleware, getAllAppointmentsController);

//delete user from database
router.delete("/deleteUser/:id", deleteUserController);

module.exports = router;
