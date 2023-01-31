import React from "react";
import SkillList from "../components/SkillList";
import Nav from "./Nav";

// scss
import "../styles/skill.scss";
function Skill(props) {
  return (
    <div className="skill">
      <Nav />
      <SkillList />
    </div>
  );
}

export default Skill;
