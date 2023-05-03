import { DatePicker, TimePicker, message, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import Box from "@mui/material/Box";

const BookingPage = () => {
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const getData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //booking function
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
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
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  const handleAvailbility = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        {
          doctorId: params.doctorId,
          date: date,
          time: time,
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
        console.log(isAvailable);
        setIsAvailable(true);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
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
            <Typography.Title level={4}>Booking Page</Typography.Title>
            <hr />
            <div className="bookingpage">
              <div className="card-body">
                <h5 className="card-header">
                  <b>
                    Dr. {doctors.firstName} {doctors.lastName}
                  </b>
                </h5>
                <div className="card-body">
                  <p>
                    <b>Phone Number : </b>
                    {doctors.phone}
                  </p>
                  <p>
                    <b>Specialization : </b>
                    {doctors.specialization}
                  </p>

                  <p>
                    <b>Fee per Visit : </b>
                    {doctors.feesPerCunsaltation}
                  </p>

                  <p>
                    <b>Address : </b>
                    {doctors.address}
                  </p>
                  <div className="d-flex flex-column ">
                    <DatePicker
                      className="m-2"
                      format="DD-MM-YYYY"
                      onChange={(value) => {
                        setDate(moment(value).format("DD-MM-YYYY"));
                      }}
                    />
                    <TimePicker
                      className="m-2"
                      format="HH:mm"
                      onChange={(value) => {
                        setTime(moment(value).format("HH:mm"));
                      }}
                    />
                    <button
                      className="btn btn-primary mt-2"
                      onClick={handleAvailbility}
                    >
                      Check Availability
                    </button>
                    <button
                      className="btn btn-dark mt-2"
                      onClick={handleBooking}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default BookingPage;
