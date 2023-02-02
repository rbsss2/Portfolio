import React from "react";
function SkillList(props) {
  return (
    <>
      <section className="skillList">
        <article className="skillBox Box1">
          <div className="skillTitle">
            <h1>HTML5/CSS3</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>mark Up 언어 이해와 구현 </p>
            <p>웹사이트 구성 요소 구현 </p>
          </div>
          <div className="skillDes">
            <p>CSS 선택자를 활용한 스타일 구현 </p>
            <p>Layout 모듈 기반 구현</p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>JavaScript</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>객체프로그래밍,함수프로그래밍 </p>
          </div>
          <div className="skillDes">
            <p>Node.js을 통한 npm 사용 </p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>React</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>클래스컴포넌트,함수컴포넌트 구현 </p>
          </div>
          <div className="skillDes">
            <p>Hook - 상태관리,이펙트 </p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>figma</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>와이어프레임 제작 </p>
          </div>
          <div className="skillDes">
            <p>프로토타입 제작 </p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>firebase</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>와이어프레임 제작</p>
          </div>
          <div className="skillDes">
            <p>프로토타입 제작 </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default SkillList;
