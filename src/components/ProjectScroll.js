// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styled, { keyframes } from "styled-components";
import { Link, NavLink, Routes, Route } from "react-router-dom";

const leftMov = keyframes`
0%, 100%{transform: translateX(0px)}
 25%{transform: translateX(0px) }
 50%{transform: translateX(0px)}
 75%{transform: translateX(-20px) }
`;
const Left = styled.div`
  animation: ${leftMov} 1.5s infinite ease-in-out;
`;

const rightMov = keyframes`
0%, 100%{transform: translateX(0px)}
 25%{transform: translateX(0px) }
 50%{transform: translateX(0px)}
 75%{transform: translateX(20px) }
`;
const Right = styled.div`
  animation: ${rightMov} 1.5s infinite ease-in-out;
`;
const leftRightMov = keyframes`
0%, 100%{transform: translateX(0px)}
 25%{transform: translateX(20px) }
 50%{transform: translateX(0px)}
 75%{transform: translateX(-20px) }
`;
const LeftRight = styled.div`
  animation: ${leftRightMov} 1.5s infinite ease-in-out;
`;

export default function App() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div
            className="swiper-slide slide active fp-auto-height"
            data-anchor="slide1"
          >
            <div className="titleWrapper">
              <div className="titleBox">
                <h1 className="title">파이브스톤</h1>
                <h2 className="subTitle">React</h2>
                {/* j쿼리 풀페이지 특성상 #으로는 리액트에서 페이지안에페이지로 연결이 /는 인식 안됨 포트폴리오서브페이지로 주소 연결 */}
                <a href="https://github.com/">
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
                </a>
              </div>
              <div className="projectImage1"></div>
            </div>

            <Left>
              <div className="mouse"></div>
              <div className="left"></div>
            </Left>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide slide" data-anchor="slide2">
            <div className="titleWrapper">
              <div className="titleBox">
                <h1 className="title">플레이디</h1>
                <h2 className="subTitle">JavaScript</h2>
                <a href="https://github.com/">
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
                </a>
              </div>

              <div className="projectImage2"></div>
            </div>

            <LeftRight>
              <div className="mouse"></div>
              <div className="left"></div>
              <div className="right"></div>
            </LeftRight>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide slide" data-anchor="slide3">
            <div className="titleWrapper">
              <div className="titleBox">
                <h1 className="title">개인프로젝트</h1>
                <h2 className="subTitle">project1</h2>
                <a href="https://github.com/">
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
                </a>
              </div>
              <div className="projectImage"></div>
            </div>
            <LeftRight>
              <div className="mouse"></div>
              <div className="left"></div>
              <div className="right"></div>
            </LeftRight>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide slide" data-anchor="slide4">
            <div className="titleWrapper">
              <a href="https://github.com/">
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
              </a>
              <div className="projectImage4"></div>
            </div>
            <Right>
              <div className="mouse"></div>
              <div className="right"></div>
            </Right>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
