import Layout from "../../components/Layout";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Box from "@mui/material/Box";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/home");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong");
    }
  };

  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        {
          userId: params.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="dashboard-container">
            <h2 className="text-center">Doctor Profile</h2>
            <hr />
            {doctor && (
              <Form
                layout="vertical"
                onFinish={handleFinish}
                className="m-3"
                initialValues={{
                  ...doctor,
                  timings: [
                    moment(doctor.timings[0], "HH:mm"),
                    moment(doctor.timings[1], "HH:mm"),
                  ],
                }}
              >
                <h4>Personal Datails:</h4>
                <Row gutter={20}>
                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Your first name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Your last name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Phone No"
                      name="phone"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Phone No" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Email"
                      name="email"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Your Email" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Website"
                      name="website"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Your Website" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Address"
                      name="address"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Your address" />
                    </Form.Item>
                  </Col>
                </Row>

                <h4>Professional Datails:</h4>
                <Row gutter={20}>
                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Specialization"
                      name="specialization"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Your Specialization" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Experience"
                      name="experience"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Experience" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Fees Per Cunsaltation"
                      name="feesPerCunsaltation"
                      required
                      rules={[{ required: true }]}
                    >
                      <Input type="text" placeholder="Amount" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Time"
                      name="timings"
                      required
                      rules={[{ required: true }]}
                    >
                      <TimePicker.RangePicker format="HH:mm" />
                    </Form.Item>
                  </Col>
                </Row>

                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                </div>
              </Form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
