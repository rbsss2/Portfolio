import React from "react";
import SkillList from "../components/SkillList";

// scss
import "../styles/skill.scss";
function Skill(props) {
  return (
    <div className="section sec3">
      <div className="skill">
        <SkillList />
      </div>
    </div>
  );
}

export default Skill;
