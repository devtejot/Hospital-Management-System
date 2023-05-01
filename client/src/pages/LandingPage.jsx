import React from "react";
import LandingTest from "./landingpage/LandingTest";
import LandingContect from "./landingpage/LandingContect";
import LandingFooter from "./landingpage/LandingFooter";
import LandingDoctors from "./landingpage/LandingDoctors";
import LandingAbout from "./landingpage/LandingAbout";
import LandingMain from "./landingpage/LandingMain";
import LandingDepart from "./landingpage/LandingDepart";

const LandingPage = () => {
  return (
    <div>
      <LandingMain />
      <LandingDepart />
      <LandingAbout />
      <LandingDoctors />
      <LandingTest />
      <LandingContect />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
