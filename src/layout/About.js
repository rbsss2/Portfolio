import React from "react";
import GoUp from "../components/GoUp";
import AboutContents from "../components/AboutContents";

//scss
import "../styles/about.scss";
function About(props) {
  return (
    <div className="section sec4">
      <div className="About">
        <GoUp />
        <AboutContents />
      </div>
    </div>
  );
}

export default About;
