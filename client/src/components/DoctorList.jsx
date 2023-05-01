import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div
        className="card-body"
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <h5 className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </h5>
        <div className="card-body">
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
  );
};

export default DoctorList;
