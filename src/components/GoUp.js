import "../styles/goUp.scss";

import { useEffect, useState } from "react";

function GoUp(props) {
  // const [upBtn, setUpBtn] = useState(false);
  // const handleGoUp = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   console.log(window.scrollY);
  //   window.handlescroll = () => {
  //     window.scrollY > 160 ? setUpBtn(true) : setUpBtn(false);
  //   };

  //   window.addEventListener("scroll", handlescroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      {/* <div
        className={upBtn ? "goUpBtn on" : "goUpBtn"}
        onClick={handleGoUp}
      ></div> */}
      <div className="goUpBtn"></div>;
    </>
  );
}

export default GoUp;
