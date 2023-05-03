import React from "react";

const LandingDoctors = () => {
  const doctors = [
    {
      firstName: "Richard",
      lastName: "Porter",
      phone: "02225331807",
      specialization: "Cardiology",
      experience: "5",
      address:
        "052 Kuhic Stravenue, Suite 510, 92566, Luellatown, Washington, United States",
    },
    {
      firstName: "John",
      lastName: "Davis",
      phone: "02222089392",
      specialization: "Psychotherapy",
      experience: "2",
      address:
        "148 Kris Inlet, Apt. 076, 64373, East Lulashire, Illinois, United States",
    },
    {
      firstName: "Thomas",
      lastName: "Fernandez",
      phone: "04428233416",
      specialization: "Dental Care",
      experience: "4",
      address:
        "697 Deontae Garden, Apt. 246, 90446-6078, New Lane, Utah, United States",
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Doctors</h2>
      <span className="section__subtitle">Meet Our Doctors</span>
      <div className="servicecontainer ">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {doctors.map((doctor) => (
            <div className="dcard">
              <div className="dcard-body">
                <h5 className="dcard-header">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h5>
                <div className="dcard-body">
                  <p>Phone Number :{doctor.phone}</p>
                  <p>Specialization :{doctor.specialization}</p>
                  <p>Experience :{doctor.experience}</p>

                  <p>Address :{doctor.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingDoctors;
