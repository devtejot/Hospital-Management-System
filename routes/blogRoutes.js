const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const newBlog = new Blog({
      title,
      body,
      author,
    });
    await newBlog.save();

    res.status(201).send({
      success: true,
      message: "Blog Added Successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while adding blog",
    });
  }
});

module.exports = router;
