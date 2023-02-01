import React from "react";
import Nav from "../layout/Nav";

import img1 from "../assets/images/GITHUB_icon.png";
import img2 from "../assets/images/tistory-icon.png";
function AboutContents(props) {
  return (
    <section className="section">
      <Nav />
      <article className="AboutContent">
        <div className="title">
          <h1>
            새로운 것에 <strong>도전</strong>합니다.
          </h1>
        </div>
        <div className="profile">
          <h2>오대균</h2>
          <p>1995.09.21</p>
          <p>경기도 평택시</p>
          <p>rbsss2@naver.com</p>
        </div>
        <div className="carrior">
          <h3>경력</h3>
          <p>18.11~22.06 : 와이즈스톤(주)</p>
          <p>22.09~23.02 : 이젠컴퓨터 아카데미 학원</p>
        </div>
        <div className="imgBox">
          <span className="iconImg1">
            <img src={img1} />
          </span>
          <span className="iconImg2">
            <img src={img2} />
          </span>
        </div>
      </article>
      <div className="end">
        <p>Last Update:2023</p>
      </div>
    </section>
  );
}

export default AboutContents;
