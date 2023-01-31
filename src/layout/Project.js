import React from "react";

import ProjectContents from "../components/ProjectContents";
import ProjectScroll from "../components/ProjectScroll";

import ProjectSwiper from "../components/ProjectSwiper";

// scss
import "../styles/project.scss";
import Nav from "./Nav";
function Project(props) {
  return (
    <div className="project">
      <Nav />
      <ProjectSwiper />
      {/* <ProjectScroll /> */}
      <ProjectContents />
    </div>
  );
}

export default Project;
