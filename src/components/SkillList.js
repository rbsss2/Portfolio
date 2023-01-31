import React from "react";

function SkillList(props) {
  return (
    <section className="skillList">
      <div className="skillTitle">
        <h1>HTML5 / CSS3</h1>
        {/* <p>frontend</p> */}
      </div>
      <div className="skillDes">
        <p>mark Up 언어 이해와 구현 </p>
        <p>웹사이트 구성 요소 구현 </p>
        <p>CSS 선택자를 활용한 스타일 구현 </p>
        <p>Layout 모듈 기반 구현</p>
      </div>
    </section>
  );
}

export default SkillList;
