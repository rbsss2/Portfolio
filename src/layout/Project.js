import React from "react";

import ProjectContents from "../components/ProjectContents";
import ProjectScroll from "../components/ProjectScroll";

import ProjectSwiper from "../components/ProjectSwiper";
// scss
import "../styles/project.scss";
import Nav from "./Nav";
function Project(props) {
  return (
    <div className="section sec2">
      <div className="project">
        {/* <ProjectSwiper /> */}
        <ProjectScroll />
        <ProjectContents />
      </div>
    </div>
  );
}

export default Project;
