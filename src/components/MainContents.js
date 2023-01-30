import ReactPlayer from "react-player";
import img1 from "../assets/images/ico_scroll_arrow.png";
import videoBg from "../assets/images/mainVideo.mp4";
import styled, { keyframes } from "styled-components";

const mov = keyframes`
0%, 100%{transform: translateY(0px)}
 25%{transform: translateY(0px) }
 50%{transform: translateY(0px)}
 75%{transform: translateY(20px) }
`;

const Arrow = styled.div`
  animation: ${mov} 1.5s infinite ease-in-out;
`;
function MainContents() {
  return (
    <div className="video">
      <video src={videoBg} autoPlay loop muted />
      <div className="mainContent">
        <h2>
          안녕하세요
          <br /> 시각화하고 재설계하는
          <br /> 오대균입니다.
          <br />
        </h2>
      </div>
      <div className="mainImg">
        <Arrow>
          <img src={img1} />
        </Arrow>
      </div>
    </div>
  );
}

export default MainContents;
