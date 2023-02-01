import React from "react";
import GoUp from "../components/GoUp";
import AboutContents from "../components/AboutContents";
import Nav from "./Nav";

//scss
import "../styles/about.scss";
function About(props) {
  return (
    <div className="About">
      <Nav />
      <GoUp />
      <AboutContents />
    </div>
  );
}

export default About;
