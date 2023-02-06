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
            <p>비동기적 실행</p>
            <p>함수 setTimeout, setInterval / 콜백함수</p>
          </div>
          <div className="skillDes">
            <p>Node.js을 통한 npm 사용 </p>
            <p>통신 Fetch API, Axios 라이브러리</p>
            <p>promise / async, await</p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>React</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>클래스컴포넌트,함수컴포넌트 구현 </p>
            <p>React-router-dom</p>
          </div>
          <div className="skillDes">
            <p>Hook - 상태관리,이펙트 </p>
            <p>컴포넌트 라이프 사이클에 대한 이해</p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>Tool</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>figma-프로토타입 제작 </p>
            <p>firebase-데이터 생성 </p>
          </div>
          <div className="skillDes">
            <p>VSCode</p>
            <p>Git&GitHub로 협업 </p>
          </div>
        </article>
        <article className="skillBox">
          <div className="skillTitle">
            <h1>기타</h1>
            <p>frontend</p>
          </div>
          <div className="skillDes">
            <p>firebase-데이터 생성</p>
            <p>
              <span className="uiTolltip">
                UI
                {/* <span className="uiTolltip-text">
                  사용자가 제품을 어떤 방식으로 이용하도록 만드느냐를 디자인하는
                  것입니다. 즉, 겉으로 시각화되는 작업이라고 보시면 됩니다.
                  사용자가 실제로 마주하게 될 화면, 레이아웃 등을 아우르는 개념
                </span> */}
              </span>
              /
              <span className="uxTolltip">
                UX
                {/* <span className="uxTolltip-text">
                  사용자 경험을 의미합니다. 사용자가 어떤 제품, 시스템, 서비스
                  등을 직접적 혹은 간접적으로 이용하면서 느끼는 반응과 행동들과
                  같은 경험을 총체적으로 설계하는 것이 UX 디자인
                </span> */}
              </span>
              design 이해와 구현
            </p>
          </div>
          <div className="skillDes">
            <p>Mongo DB</p>
            <p>사용성 테스트</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default SkillList;
