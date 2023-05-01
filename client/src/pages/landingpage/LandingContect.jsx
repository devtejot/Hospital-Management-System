import React, { useState } from "react";
import axios from "axios";

function LandingContect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to the backend route to save the contact message
    try {
      const response = await axios.post("/api/v1//contact", {
        name,
        email,
        message,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    // Clear the input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact section " id="contact">
      <h2 className="section__title">Contact Us</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon" />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+91 9564865515</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">temp@gmail.com</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Gandhinagar, Gujarat</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor className="contact__label">
                Name
              </label>
              <input
                type="text"
                className="contact__input"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="contact__content">
              <label htmlFor className="contact__label">
                Email
              </label>
              <input
                type="email"
                className="contact__input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor className="contact__label">
              Message
            </label>
            <textarea
              name
              id
              cols={0}
              rows={7}
              className="contact__input"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <div>
            <button className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LandingContect;
