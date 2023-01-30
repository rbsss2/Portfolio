import React from "react";

import ProjectContents from "../components/ProjectContents";
import ProjectSwiper from "../components/ProjectSwiper";
import Nav from "./Nav";

// scss

function Project(props) {
  return (
    <div>
      <Nav />
      <ProjectSwiper />
      <ProjectContents />
    </div>
  );
}

export default Project;
