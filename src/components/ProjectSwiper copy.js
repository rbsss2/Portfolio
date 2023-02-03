import React from "react";
import Nav from "../layout/Nav";

function ProjectSwiper(props) {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.6/swiper-bundle.css"
      />
      <link rel="stylesheet" type="text/css" href="examples.css" />

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.6/swiper-bundle.min.js"
      ></script>

      <div className="section sec2">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Nav />

            <div className="swiper-slide">
              <div className="titleWrapper">
                <div className="titleBox">
                  <h1 className="title">파이브스톤</h1>
                  <h2 className="subTitle">React</h2>
                  <div className="goProject">
                    <p className="goProjectText">프로젝트 보러가기</p>
                    <div className="gogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="40"
                      >
                        <path d="m23.417 29.375-1.459-1.458L28.833 21H7.167v-2.083h21.666L21.917 12l1.5-1.5 9.416 9.458Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="projectImage"></div>
              </div>
            </div>
            {/* 
            <div className="swiper-slide">
              <div className="titleWrapper">
                <div className="titleBox">
                  <h1 className="title">플레이디</h1>
                  <h2 className="subTitle">JavaScript</h2>
                  <div className="goProject">
                    <p className="goProjectText">프로젝트 보러가기</p>
                    <div className="gogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="40"
                      >
                        <path d="m23.417 29.375-1.459-1.458L28.833 21H7.167v-2.083h21.666L21.917 12l1.5-1.5 9.416 9.458Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="projectImage"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="titleWrapper">
                <div className="titleBox">
                  <h1 className="title">개인프로젝트</h1>
                  <h2 className="subTitle">project1</h2>
                  <div className="goProject">
                    <p className="goProjectText">프로젝트 보러가기</p>
                    <div className="gogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="40"
                      >
                        <path d="m23.417 29.375-1.459-1.458L28.833 21H7.167v-2.083h21.666L21.917 12l1.5-1.5 9.416 9.458Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="projectImage"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="titleWrapper">
                <div className="titleBox">
                  <h1 className="title">다함께차차차</h1>
                  <h2 className="subTitle">HTML5&CSS3</h2>
                  <div className="goProject">
                    <p className="goProjectText">프로젝트 보러가기</p>
                    <div className="gogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="40"
                      >
                        <path d="m23.417 29.375-1.459-1.458L28.833 21H7.167v-2.083h21.666L21.917 12l1.5-1.5 9.416 9.458Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="projectImage"></div>
              </div>
            </div> */}
          </div>
          {/* Add Pagination  */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
}

export default ProjectSwiper;
