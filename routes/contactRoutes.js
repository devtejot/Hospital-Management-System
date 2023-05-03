const express = require("express");
const router = express.Router();
const Contact = require("../models/contectModel");

// Handle POST request to '/api/contact'
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({
      name,
      email,
      message,
    });
    await contact.save();
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Error while sending message",
    });
  }
});

module.exports = router;
