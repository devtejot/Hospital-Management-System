import React, { useEffect, useState } from "react";
import axios from "axios";
import LandingNav from "./LandingNav";
import "../../styles/Docpage.css";
import LandingFooter from "./LandingFooter";
import { Row } from "antd";

const DoctorMain = () => {
  const [doctors, setDoctors] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <LandingNav />
      <section className="services section" id="services">
        <h2 className="section__title">Doctors</h2>
        <span className="section__subtitle">Meet the best doctors</span>
        <div className="container ">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Row gutter={20}>
              {doctors &&
                doctors.map((doctor) => (
                  <div className="dcard">
                    <div className="dcard-body">
                      <h5 className="dcard-header">
                        Dr. {doctor.firstName} {doctor.lastName}
                      </h5>
                      <div className="dcard-body">
                        <p>
                          <b>Phone Number : </b>
                          {doctor.phone}
                        </p>
                        <p>
                          <b>Specialization : </b>
                          {doctor.specialization}
                        </p>
                        <p>
                          <b>Experience : </b>
                          {doctor.experience}
                        </p>
                        <p>
                          <b>Fee per Visit : </b>
                          {doctor.feesPerCunsaltation}
                        </p>
                        <p>
                          <b>Timings : </b>
                          {doctor.timings[0]} - {doctor.timings[1]}
                        </p>
                        <p>
                          <b>Address : </b>
                          {doctor.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </Row>
          </div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default DoctorMain;
