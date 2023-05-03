import React from "react";

const LandingNav = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <b>MedSys</b>
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="/" className="nav__link">
                <i className="uil uil-estate nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/about" className="nav__link">
                <i className="uil uil-user nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="/departments" className="nav__link">
                <i className="uil uil-file-alt nav__icon" /> Departments
              </a>
            </li>
            <li class="nav__item">
              <a href="/docs" class="nav__link">
                <i class="uil uil-briefcase-alt nav__icon"></i> Doctors
              </a>
            </li>

            <li class="nav__item">
              <a href="/blog" class="nav__link">
                <i class="uil uil-scenery nav__icon"></i>Blog
              </a>
            </li>

            <li className="nav__item">
              <a href="/contects" className="nav__link">
                <i className="uil uil-message nav__icon" />
                Contact Us
              </a>
            </li>

            <li className="nav__item">
              <a href="/login" className="nav__link">
                <i className="uil uil-message nav__icon" />
                LOGIN
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingNav;
