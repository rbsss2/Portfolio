import Main from "./layout/Main";
import Project from "./layout/Project";
import Skill from "./layout/Skill";
import About from "./layout/About";
import Nav from "./layout/Nav";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { Link, NavLink, Routes, Route } from "react-router-dom";
// style
import "./assets/styles/style.scss";
import GoUp from "./components/GoUp";

let options = {
  activeClass: "active",
  anchors: ["Main", "Project", "Skill", "About"],
  arrowNavigation: true,
  className: "SectionContainer",
  delay: 1000,
  navigation: true,
  scrollBar: false,
  sectionClassName: "Section",
  sectionPaddingTop: "0",
  sectionPaddingBottom: "0",
  verticalAlign: false,
};

function App() {
  return (
    <>
      <Nav />

      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<GoUp />} />
      </Routes> */}
      <SectionsContainer className="container" {...options}>
        <Section>{<Main />}</Section>
        <Section>{<Project />}</Section>
        <Section>{<Skill />}</Section>
        <Section>{<About />}</Section>
      </SectionsContainer>
    </>
  );
}

export default App;
