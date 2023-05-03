import React, { useState } from "react";
import axios from "axios";

function LandingContect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/contact", { name, email, message });
      setResponse(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button className="button button--flex">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LandingContect;
