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
              <h1 className="home__title">
                We Provide Best
                <br />
                Healthcare
              </h1>
              <h3 className="home__subtitle">Meet the best doctors</h3>
              <p className="home__description">
                Great doctors if you need your family member to get effective
                <br /> immediate assistance, emergency treatment or a simple
                consultation.
              </p>
              <a href="/login" className="button button--flex">
                Make Appointment <i class="fa-solid fa-arrow-right"></i>
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
