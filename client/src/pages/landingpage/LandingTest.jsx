import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  padding: 15,
  borderRadius: 15,
  height: "200px",
  color: "#fff",
  textAlign: "center",
  background: "#393E46",
};

const LandingTest = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <section className="testimonial section container">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">My client saying</span>

      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <div>
              <h3 className="testimonial__name">Arun Prashanth</h3>
              <span className="testimonial__client">Client</span>
            </div>
            <div>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
            </div>

            <p className="testimonial__description">
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div>
              <h3 className="testimonial__name">Arun Prashanth</h3>
              <span className="testimonial__client">Client</span>
            </div>
            <div>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
            </div>

            <p className="testimonial__description">
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div>
              <h3 className="testimonial__name">Arun Prashanth</h3>
              <span className="testimonial__client">Client</span>
            </div>
            <div>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
              <i class="fa-solid fa-star fa-2xs"></i>
            </div>

            <p className="testimonial__description">
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </h3>
        </div>
      </Carousel>
    </section>
  );
};

export default LandingTest;
