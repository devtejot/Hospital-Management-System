import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingFooter from "./LandingFooter";
import LandingNav from "./LandingNav";

const BlogMain = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <LandingNav />
      <section className="services section container" id="services">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">
          Explore our blog to discover helpful tips, inspiring stories, and
          valuable resources that can improve your health and wellbeing. From
          nutrition and fitness to mental health and parenting, we cover a wide
          range of topics that matter to you.
        </span>
        <div className="container ">
          {blogs.map((blog) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div className="blogcard">
                <div className="card-body">
                  <h5 className="card-header">{blog.title}</h5>

                  <div className="card-body">
                    <p>{blog.body}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                    className="departtital"
                  >
                    <h5 className="card-header">Author: {blog.author}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default BlogMain;
