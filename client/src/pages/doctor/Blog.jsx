import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import Box from "@mui/material/Box";
import { Typography } from "antd";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/blogs", { title, body, author });
      setBlogs([...blogs, res.data.blog]);
      setTitle("");
      setBody("");
      setAuthor("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="dashboard-container">
            <Typography.Title level={4}>Blog</Typography.Title>
            <hr />
            <div>
              <h6>Add Blog</h6>
              <form onSubmit={handleSubmit} className="blog-form">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="blog-input"
                  required
                />
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Body"
                  className="blog-input"
                  required
                ></textarea>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author"
                  className="blog-input"
                  required
                />
                <button type="submit" className="blog-btn">
                  Add Blog
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Blog;
