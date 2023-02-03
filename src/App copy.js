import Main from "./layout/Main";
import Project from "./layout/Project";
import Skill from "./layout/Skill";
import About from "./layout/About";
import Nav from "./layout/Nav";
import { SectionsContainer, Section } from "react-fullpage";

import { Link } from "react-router-dom";

import "./app.scss";

// style
import "./assets/styles/style.scss";

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
    <SectionsContainer {...options}>
      <Section>
        <Main />
      </Section>

      <Section>
        <Project />
      </Section>

      <Section>
        <Skill />
      </Section>

      <Section>
        <Nav />
        <About />
      </Section>
    </SectionsContainer>
  );
}

export default App;
