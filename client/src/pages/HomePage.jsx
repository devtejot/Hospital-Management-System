import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row, Typography } from "antd";
import DoctorList from "../components/DoctorList";
import Box from "@mui/material/Box";

const HomePage = () => {
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
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="dashboard-container">
            <Typography.Title level={4}>Available Doctors</Typography.Title>
            <hr />
            <Row gutter={20}>
              {doctors &&
                doctors.map((doctor) => (
                  <Col span={8} xs={24} sm={24} lg={8}>
                    <DoctorList doctor={doctor} />
                  </Col>
                ))}
            </Row>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
