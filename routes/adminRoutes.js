const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
  contectUs,
} = require("../controllers/adminCtrl");
const Contact = require("../models/contectModel");

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

router.post("/contact", contectUs);

module.exports = router;
