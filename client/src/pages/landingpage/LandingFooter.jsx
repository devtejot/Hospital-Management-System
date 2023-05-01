import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container"></div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>About Us</span>
            <span>Help</span>
            <span>Contect</span>
            <span>Carrers</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>Test@gmail.com</span>
            <span>press@gmail.com</span>
            <span>contact@gmail.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
