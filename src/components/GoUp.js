import "../styles/goUp.scss";

import { useEffect, useState } from "react";

function GoUp(props) {
  const [upBtn, setUpBtn] = useState(false);
  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.handlescroll = () => {
      window.scrollY > 4000 ? setUpBtn(true) : setUpBtn(false);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={upBtn ? "goUpBtn on" : "goUpBtn"}
        onClick={handleGoUp}
        data-menuanchor="Main"
      >
        <a href="#Main"></a>
      </div>
      {/* <div className="goUpBtn" data-menuanchor="Main"></div>; */}
    </>
  );
}

export default GoUp;
