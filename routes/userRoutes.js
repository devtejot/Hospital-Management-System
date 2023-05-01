const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmentController,
  bookingAvailbilityController,
  userAppointmentController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const { route } = require("./doctorRoutes");

//route object
const router = express.Router();

//routes
//LOGIN
router.post("/login", loginController);

//REGISTER
router.post("/register", registerController);

//AUTH
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification Doctor
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notification Doctor
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//get all doctor
router.get("/getAllDoctors", authMiddleware, getAllDoctorController);

//book appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//booking availablity
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailbilityController
);

//appointments list
router.get("/user-appointments", authMiddleware, userAppointmentController);

module.exports = router;
