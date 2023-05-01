import React from "react";
import LandingFooter from "./LandingFooter";
import LandingNav from "./LandingNav";

const BlogMain = () => {
  return (
    <>
      <LandingNav />
      <section className="services section" id="services">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">What we offer</span>
        <div className="container ">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="doccard">
              <div className="dcard-body">
                <h5 className="dcard-header">Dental</h5>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                  className="departtital"
                >
                  <h5 className="dcard-header">By j.k</h5>
                </div>

                <div className="dcard-body">
                  <p>
                    This department focuses on the diagnosis, treatment, and
                    prevention of heart-related diseases and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default BlogMain;
