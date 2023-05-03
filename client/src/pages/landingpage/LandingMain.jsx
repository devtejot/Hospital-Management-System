import React from "react";
import LandingNav from "./LandingNav";
import BannerImage from "../../assets/surgery-1807541__480.jpg";

const LandingPage = () => {
  return (
    <div className="home-container">
      <div className="home-bannerImage-container"></div>
      <LandingNav />
      <section className="section" id="home">
        <div className="container">
          <div className="home__content gridhome">
            <div>
              <h1 className="home__title">Your Health is Our Priority</h1>
              <h3 className="home__subtitle">Meet the best doctors</h3>
              <p className="home__description">
                We understand that your health is important to you. That's why
                we go above and beyond to ensure that you receive the highest
                quality care possible.
              </p>
              <a href="/login" className="button button--flex">
                Make Appointment
              </a>
            </div>
            <div className="">
              <img className="homeimg" src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
