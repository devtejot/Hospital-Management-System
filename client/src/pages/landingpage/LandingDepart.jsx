import React from "react";

const LandingDepart = () => {
  return (
    <section className="services section container" id="services">
      <h2 className="section__title">Departments</h2>
      <span className="section__subtitle">
        The Departments provides information about the different medical
        specialties and services offered by our hospital. It is designed to help
        patients and their families learn more about the medical conditions and
        treatments we offer, and to help them make informed decisions about
        their healthcare.
      </span>
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
              <h5 className="dcard-header">
                <i className="fa-solid fa-heart-pulse fa-2xl"></i>
              </h5>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
                className="departtital"
              >
                <h5 className="dcard-header">Cardiology</h5>
              </div>

              <div className="dcard-body">
                <p>
                  This department focuses on the diagnosis, treatment, and
                  prevention of heart-related diseases and conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="doccard">
            <div className="dcard-body">
              <h5 className="dcard-header">
                <i className="fa-solid fa-tooth fa-2xl"></i>
              </h5>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
                className="departtital"
              >
                <h5 className="dcard-header">Dental Care</h5>
              </div>

              <div className="dcard-body">
                <p>
                  This department focuses on the diagnosis, treatment, and
                  prevention of heart-related diseases and conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="doccard">
            <div className="dcard-body">
              <h5 className="dcard-header">
                <i class="fa-solid fa-brain fa-2xl"></i>
              </h5>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
                className="departtital"
              >
                <h5 className="dcard-header">Neurology</h5>
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
  );
};

export default LandingDepart;
