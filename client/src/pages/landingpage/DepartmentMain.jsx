import React from "react";
import LandingNav from "./LandingNav";
import LandingFooter from "./LandingFooter";

const DepartmentMain = () => {
  const workInfoData = [
    {
      image: "fa-solid fa-heart-pulse fa-2xl",
      title: "Cardiology",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-tooth fa-2xl",
      title: "Dental Care",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-brain fa-2xl",
      title: "Neurology",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-spinner fa-2xl",
      title: "Dermatologists",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-brands fa-apple fa-2xl",
      title: "Nutritionists",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-person fa-2xl",
      title: "Physical Therapists",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-person-dress fa-2xl",
      title: "Gynecology",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-microscope fa-2xl",
      title: "Orthopedic",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
    {
      image: "fa-solid fa-brain fa-2xl",
      title: "Psychotherapy",
      text: "This department focuses on the diagnosis, treatment, and prevention of heart-related diseases and conditions.",
    },
  ];
  return (
    <>
      <LandingNav />
      <section className="services section" id="services">
        <h2 className="section__title">Departments</h2>
        <span className="section__subtitle">What we offer</span>
        <div className="container ">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {workInfoData.map((menu) => {
              return (
                <div className="doccard">
                  <div className="dcard-body">
                    <h5 className="dcard-header">
                      <i className={menu.image}></i>
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                      className="departtital"
                    >
                      <h5 className="dcard-header">{menu.title}</h5>
                    </div>

                    <div className="dcard-body">
                      <p>{menu.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default DepartmentMain;
