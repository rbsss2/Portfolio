import React from "react";
import MainContents from "../components/MainContents";

import "../styles/main.scss";
import Nav from "./Nav";
function Main(props) {
  return (
    <div className="section sec1 active">
      <Nav />
      <MainContents />
    </div>
  );
}

export default Main;
