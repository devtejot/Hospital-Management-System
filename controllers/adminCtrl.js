const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");
const appointmentModel = require("../models/appointmentModel");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    const count = await userModel.countDocuments({});
    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      data: users,
      count: count,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while fetching users",
      success: false,
      error,
    });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const count = await doctorModel.countDocuments({});
    res.status(200).send({
      message: "Doctors fetched successfully",
      success: true,
      data: doctors,
      count: count,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while fetching doctors",
      success: false,
      error,
    });
  }
};

const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, {
      status,
    });

    const user = await userModel.findOne({ _id: doctor.userId });
    const notification = user.notification;
    notification.push({
      type: "new-doctor-request-changed",
      message: `Your doctor account has been ${status}`,
      onClickPath: "/notification",
    });
    user.isDoctor = status === "approved" ? true : false;
    await user.save();

    res.status(200).send({
      message: "Doctor status updated successfully",
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in account status",
      success: false,
      error,
    });
  }
};

const getAllAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    const count = await appointmentModel.countDocuments({});
    res.status(200).send({
      message: "Appointments fetched successfully",
      success: true,
      data: appointments,
      count: count,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while fetching Appointments",
      success: false,
      error,
    });
  }
};

//delete user
const deleteUserController = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send({
        message: "User not found",
        success: false,
      });
      return;
    }
    res.status(200).send({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while deleting user",
      success: false,
      error,
    });
  }
};

module.exports = {
  getAllDoctorsController,
  getAllUsersController,
  changeAccountStatusController,
  getAllAppointmentsController,
  deleteUserController,
};
