import React from "react";
import SkillList from "../components/SkillList";

// scss
import "../styles/skill.scss";
function Skill(props) {
  return (
    <div className="skill">
      <SkillList />
    </div>
  );
}

export default Skill;
