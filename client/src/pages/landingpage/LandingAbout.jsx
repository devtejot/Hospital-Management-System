import React from "react";
import AboutBackgroundImage from "../../assets/surgery-1807541__480.jpg";

const LandingAbout = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Us</h2>
      <span className="section__subtitle">
        Digitally transforming your hospital for more efficient healthcare
      </span>
      <div className="about__container container grid">
        <img className="about__img" src={AboutBackgroundImage} alt="" />
        <div className="about__data">
          <p className="about__description">
            A smart hospital offers a smooth, human-centric experience that
            improves patient outcomes, increases productivity and revenues, and
            enhances eco-efficiency. But how can you overcome the complexities
            that are associated with digitally transforming your healthcare
            facility? Siemens provides the strategy, expertise, and solutions to
            ensure your digital journey is a successful one.
          </p>

          <div className="about__buttons">
            <a href="/contects" className="button button--flex">
              Contect Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
